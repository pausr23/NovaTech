describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('button').click()

  })
})