/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Check Html Blocks', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('Check Html Blocks for visual changes', () => {
    cy.visit('/html-blocks/all');

    cy.percySnapshot();
  });
});
