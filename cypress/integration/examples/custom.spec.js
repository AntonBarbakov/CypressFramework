describe('Custom command', ()=>{
    it('should login to app using custom cy command',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})