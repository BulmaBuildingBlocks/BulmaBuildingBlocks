import { DirectiveBinding } from 'vue/types/options';
import $ from 'jquery';
const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.msMaxTouchPoints > 0);
const events = isTouch ? ['touchstart', 'click'] : ['click'];

const instances: { el: any; eventHandlers: any }[] = [];

function processArgs(bindingValue: any) {
  const isFunction = typeof bindingValue === 'function';
  if (!isFunction && typeof bindingValue !== 'object') {
    throw new Error(
      `v-click-outside: Binding value should be a function or an object, typeof ${bindingValue} given`
    );
  }

  return {
    handler: isFunction ? bindingValue : bindingValue.handler,
    middleware:
      bindingValue.middleware || ((isClickOutside: any) => isClickOutside),
    events: bindingValue.events || events
  };
}

function onEvent({ el, event, handler, middleware }: any) {
  const isClickOutside = event.target !== el && !el.contains(event.target);

  if (!isClickOutside) {
    return;
  }

  if (middleware(event, el)) {
    handler(event, el);
  }
}

function bind(el: HTMLElement, { value }: DirectiveBinding) {
  const { handler, middleware, events } = processArgs(value);

  const instance = {
    el,
    eventHandlers: events.map((eventName: any) => ({
      event: eventName,
      handler: (event: any) => onEvent({ event, el, handler, middleware })
    }))
  };

  instance.eventHandlers.forEach(({ event, handler }: any) =>
    $(el).closest('body').on(event, handler)
  );
  instances.push(instance);
}

function update(el: HTMLElement, { value }: DirectiveBinding) {
  const { handler, middleware, events } = processArgs(value);
  // `filter` instead of `find` for compat with IE
  const instance = instances.filter((instance) => instance.el === el)[0];

  instance.eventHandlers.forEach(({ event, handler }: any) =>
    $(el).closest('body').off(event, handler)
  );

  instance.eventHandlers = events.map((eventName: any) => ({
    event: eventName,
    handler: (event: any) => onEvent({ event, el, handler, middleware })
  }));

  instance.eventHandlers.forEach(({ event, handler }: any) =>
    $(el).closest('body').on(event, handler)
  );
}

function unbind(el: HTMLElement) {
  // `filter` instead of `find` for compat with IE
  const instance = instances.filter((instance) => instance.el === el)[0];
  instance.eventHandlers.forEach(({ event, handler }: any) =>
    $(el).closest('body').off(event, handler)
  );
}

const directive = {
  bind,
  update,
  unbind
};

export default directive;
