describe('Pruebas de Landing Page', () => {
  it('Botón Menu', () => {
    cy.visit('http://localhost:5173/')

    cy.get('button').contains('Menu').click()
    
  })

  it('Pruebas de navbar', () => {
    cy.visit('http://localhost:5173/')

    cy.get('li').contains('Menu').click()
    cy.get('li').contains('About us').click()
    cy.get('li').contains('Home').click()
  })

  it('Pruebas de Carrusel', () => {
    cy.visit('http://localhost:5173/')

    cy.get('img[alt="flecha go"]').click()
    cy.get('img[alt="flecha back"]').click()
    cy.get('img[alt="flecha go"]').click()
    cy.get('img[alt="flecha back"]').click()
    cy.get('img[alt="flecha go"]').click()
    cy.get('img[alt="flecha back"]').click()
  })

})