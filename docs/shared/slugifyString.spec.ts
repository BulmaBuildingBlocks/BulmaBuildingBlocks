import slugifyString from '~/shared/slugifyString';

describe('utils', () => {
  it('check string with spaces is slugified correct', () => {
    const testString = slugifyString('Heres a string');

    expect(testString).toEqual('heres-a-string');
  });

  it('check string with odd characters is slugified correct', () => {
    const testString = slugifyString("He's looking. fo]r a` s;tring");

    expect(testString).toEqual('hes-looking-for-a-string');
  });
});
