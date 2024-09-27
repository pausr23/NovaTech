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

  describe('Pruebas de About Us', () => {

    it('Pruebas de scroll', () => {
      cy.visit('http://localhost:5173/about-us')
  
      cy.get('div.grid-cols-2.h-full')
      .should('be.visible');
  
    cy.scrollTo('bottom'); 
  
    cy.get('div.h-60') 
      .should('be.visible');
    })

  })

    describe('Pruebas de Menu', () => {

      it('Scroll de menú', () => {
        cy.visit('http://localhost:5173/menu')
    
        cy.get('div.text-white h1')
        .should('be.visible');
    
      cy.scrollTo('bottom'); 
    
      cy.get('div.h-60') 
        .should('be.visible');
      })

})