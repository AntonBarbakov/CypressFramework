describe('Scrolls on the Page', ()=>{
    it('should scroll down and back',()=>{
        cy.visit('http://devexpress.github.io/testcafe/example/')
        cy.wait(3000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(3000)
        cy.get('header').scrollIntoView()
    })
})