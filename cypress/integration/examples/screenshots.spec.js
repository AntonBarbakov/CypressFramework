describe('Screenshots', ()=>{
    it('full page screenshot',()=>{
        cy.visit('http://devexpress.github.io/testcafe/example/')
        cy.screenshot({ capture: 'fullPage'})
    })

    it('single element screenshot',()=>{
        cy.get('header').screenshot()
        cy.get('#populate').screenshot()
    })
})