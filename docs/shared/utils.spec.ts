import { getRegexMatches } from '~/shared/utils';

describe('utils', () => {
  it('check local images sources returned from regex group', () => {
    const testRegex = /<img.*?src="([^http].*?)"/g;

    const code = `<img src="/image.png" />
                <img src="image.svg" />
                <img src="./card/icon.png" />`;
    const imagesSources = getRegexMatches(code, testRegex, 1);

    expect(imagesSources).toEqual([
      '/image.png',
      'image.svg',
      './card/icon.png'
    ]);

    const imagesSourcesWithoutGroup = getRegexMatches(code, testRegex);

    expect(imagesSourcesWithoutGroup).toEqual([
      '/image.png',
      'image.svg',
      './card/icon.png'
    ]);
  });
});
