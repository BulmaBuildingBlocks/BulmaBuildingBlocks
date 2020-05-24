/* eslint-disable no-undef */
/// <reference types="cypress" />
import menu from '../../docs/data/blocks-menu.json';

const listOfAllPages = [
  '/',
  '/?standalone=true', // Check loading url with parameter for PWA App
  '/documentation',
  '/page-builder',
  ...menu
];

describe('Check accessibility', () => {
  listOfAllPages.forEach((page) => {
    it('Check accessibility for page: ' + page, () => {
      // if your app uses jQuery, then we can trigger a jQuery
      // event that causes the event callback to fire
      cy.visit(page);
      cy.injectAxe();

      cy.checkA11y(null, null, null, true);
    });
  });
});
