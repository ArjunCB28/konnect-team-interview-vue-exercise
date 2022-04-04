// https://docs.cypress.io/api/introduction/api.html
const searchText = "Handmade";
describe('Testing the Service page', () => {

  it('Visit service page', () => {
    cy.visit('/')
    cy.contains('h4', 'Services')
  })

  it('Perform search on service page', () => {
    cy.get('input[id="search-services"]').type(searchText)
  })

  it('Able to see search results', () => {
    cy.wait(3000)
    cy.contains('.k-card-title h4', searchText)
  })

  it('Takes user to service information page when clicked on a service', () => {
    cy.get('.kong-card').first().click()
    cy.wait(1000)
    cy.url().should('include', '/service')
  })

  it('Loads up the service information component', () => {
    cy.contains('h4', 'Service Info')
  })

  it('Go back to Service list page to see if the state persists', () => {
    cy.go('back')
    cy.wait(1000)
    cy.get('input[id="search-services"]').should('have.value', searchText)
  })
})
