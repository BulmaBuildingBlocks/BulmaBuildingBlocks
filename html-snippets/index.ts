import headerComponents from '~/html-snippets/headers';
import featureComponents from '~/html-snippets/features';
import contentComponents from '~/html-snippets/content';

const allcomponents = [...headerComponents, ...featureComponents, ...contentComponents];

function componentsExtract() {
  const components: any = {};
  const allComponentArray = allcomponents.map((x) => x.component);

  for (const component of allComponentArray) {
    components[component.name] = component;
  }

  return components;
}

export const components = componentsExtract();

export default allcomponents;
