// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-nocheck
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

import Example from '~/components/Example';

Vue.component('Example', Example);

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);

Vue.filter('pre', (text) => {
  if (!text) return;

  // Remove first blank line
  text = text.replace(/^\s*[\r\n]/g, '');

  // Find how many whitespaces before the first character of the first line
  const whitespaces = /^[ \t]*./
    .exec(text)
    .toString()
    .slice(0, -1);

  // Replace first occurrance of whitespace on each line
  let newText = [];
  text.split(/\r\n|\r|\n/).forEach((line) => {
    newText.push(line.replace(whitespaces, ''));
  });
  newText = newText.join('\r\n');

  return newText;
});
