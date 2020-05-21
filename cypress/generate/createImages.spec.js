/*
 * uses Cypress to load up and create images of all the components
 */

describe('Create Component Images', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Create Images', () => {
    cy.visit('/html-blocks/all');

    cy.get('.example-section').each(($el) => {
      const content = $el.find('.example-component');
      const title = $el.attr('data-id');

      if (title) {
        title
          .toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(/[^\w-]+/g, '') // Remove all non-word chars
          .replace(/--+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, ''); // Trim - from end of text

        cy.get(content).screenshot(title);
      }
    });
  });
});
