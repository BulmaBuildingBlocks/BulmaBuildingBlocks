/* eslint-disable no-undef */
/// <reference types="cypress" />

import slugifyString from '../../src/shared/slugifyString';

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
      const content = $el.find('.example-component')[0].firstChild;

      const title = slugifyString($el.find('.title a').text());

      cy.get(content as any).screenshot('./' + title);
    });
  });
});
