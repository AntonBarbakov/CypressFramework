describe('Device Tests', ()=>{
    it('720p', ()=>{
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    }) 
    
    it('1080p', ()=>{
        cy.viewport(1980, 1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    }) 

    it('iPhoneX', ()=>{
        cy.viewport('iphone-x')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })
})