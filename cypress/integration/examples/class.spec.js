class BasePage {
    static loadHomePage () {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait (number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}


describe('Abstaction with Classes', ()=>{
    before(function() {
        // runs before all tests inside describe
        //setup test data or test contex
        //seed or reset the database
        HomePage.loadHomePage()
    })

    after(function() {
        //test clean up or clean cookies or localstorage
    })

    beforeEach(function() {
        //runs before each it block in the describe block
    })

    afterEach(function() {
        //runs after each it block in the describe block
    })

    it.skip('1st IT',()=>{
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it('2nd IT',()=>{
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    it.only('3rd IT',()=>{
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})