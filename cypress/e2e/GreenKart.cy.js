import { faker } from '@faker-js/faker';
describe('GreenKart End-to-End Flow', () => {
  it('test Place Order Brocolli', () => {
    const fakePromoCode = faker.string.alphanumeric(5)
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('input.search-keyword').type('Brocolli')
    cy.contains('Brocolli').should('be.visible')
    cy.get('input.quantity').should('have.value', 1)
    cy.get('a.increment').click().click()
    cy.get('input.quantity').should('have.value', 3)
    cy.contains('ADD TO CART').click()
    cy.contains('ADDED').should('be.visible')
    cy.get('a.cart-icon').click()
    cy.get('li.cart-item').should('be.visible')
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('p.product-name',"Brocolli").should('be.visible') 
    cy.get('.promoCode').type(fakePromoCode)
    cy.get('.promoBtn').click()
    cy.get('span.promoInfo', { timeout: 6000 }).should('contain', 'Invalid code ..!')
    cy.contains('button','Place Order').click()
    cy.get('.wrapperTwo>div>select').select('Armenia')
    cy.get('.chkAgree').check()
    cy.get('.errorAlert ~ button').click()
    cy.get('.wrapperTwo>span').should('contain', 'Thank you, your order has been placed successfully')
  });
});
