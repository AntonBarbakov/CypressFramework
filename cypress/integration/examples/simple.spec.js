describe("Browser Actions", ()=>{
    it('should load books website',()=>{
        cy.visit('http://books.toscrape.com/index.html', {timeout : 10000})
        cy.url().should('include', 'index.html')
        cy.log('Website Loaded!')
    })

    it('should click on Travel category', ()=>{
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', ()=>{
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('check that price of Olio book is correct (23.88)', ()=>{
        cy.get('a')
            .contains('Poetry')
            .click()
        cy.get('h1').contains('Poetry')
        cy.get('h3')
            .contains('Olio')
            .click()
        cy.get('h1').contains('Olio')
        cy.get('.price_color').contains('£23.88')
    })
})