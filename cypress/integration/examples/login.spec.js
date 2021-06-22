describe("Browser Actions", ()=>{
    it('Should override the current time', ()=>{
        const date = new Date(2022, 3, 10).getDate() // return a timestamp
        console.log(date)
        cy.clock(date)
        cy.log(date)
    })

    it('Should load login page',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout : 10000})
        cy.url().should('include', 'login.html')
        cy.clearCookies({ log: true})
        cy.clearLocalStorage( 'your item ', { log: true } )
    })
    
    it('should fill username',()=>{
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Some Invalid Name', { delay : 50 })
    })

    it('should fill password',()=>{
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some Invalid Password', { delay : 50 })
    })

    it('should mark checkbox',()=>{
        cy.get('input[type="checkbox"]').click()
        cy.wait(3000)
    })

    it('should submit login form',()=>{
        cy.contains('Sign in').click()
    })

    it('should display erroe message',()=>{
        cy.get('.alert-error').should('be.visible')
                                .and('contain', 'Login and/or password are wrong.')
    })
})