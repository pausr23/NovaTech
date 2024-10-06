describe('Pruebas de Landing Page', () => {
  it('Botón Menu', () => {
    cy.visit('http://localhost:5173/')
    cy.wait(2000)
    cy.get('button').contains('Menu').click()
    cy.wait(2000)
    
  })

  it('Pruebas de navbar', () => {
    cy.visit('http://localhost:5173/')
    cy.wait(2000)
    cy.get('li').contains('Menu').click()
    cy.wait(2000)
    cy.get('li').contains('About us').click()
    cy.wait(2000)
    cy.get('li').contains('Home').click()
    cy.wait(2000)
  })

  it('Pruebas de Carrusel', () => {
    cy.visit('http://localhost:5173/')
    cy.wait(2000)

    cy.get('img[alt="flecha go"]').click()
    cy.wait(2000)
    cy.get('img[alt="flecha back"]').click()
    cy.wait(2000)
    cy.get('img[alt="flecha go"]').click()
    cy.wait(2000)
    cy.get('img[alt="flecha back"]').click()
    cy.wait(2000)
    cy.get('img[alt="flecha go"]').click()
    cy.wait(2000)
    cy.get('img[alt="flecha back"]').click()
    cy.wait(2000)
  })
})

  describe('Pruebas de About Us', () => {
    

    it('Pruebas de scroll', () => {
      cy.visit('http://localhost:5173/about-us')
      cy.wait(2000)  
      cy.get('div.grid-cols-2.h-full')
      .should('be.visible');
      cy.wait(2000)
    cy.scrollTo('bottom'); 
  
    cy.get('div.w-full.h-auto.py-10.mt-16')
      .should('be.visible');
      cy.wait(2000)
    })

  })

    describe('Pruebas de Menu', () => {

      it('Scroll de menú', () => {
        cy.visit('http://localhost:5173/menu')
        cy.wait(2000)

        cy.get('div.text-white h1')
        .should('be.visible');    
        cy.wait(2000)

      cy.scrollTo('bottom'); 
    
      cy.get('div.w-full.h-auto.py-10.mt-16')
        .should('be.visible');
        
      })

})