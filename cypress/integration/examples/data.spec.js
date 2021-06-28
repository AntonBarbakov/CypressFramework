describe('Write/ REad date to JSON /Text file', ()=>{
    it('should write data into json',()=>{
        cy.writeFile('log.json', { name: 'Mike', age: 25 })
    })

    it('should write data into text file',()=>{
        cy.writeFile('log.txt', 'Hello Mutherfuckers')
    })

    it('should read and verify data from json file',()=>{
        cy.readFile('log.json').its('age').should('eq', 25)
    })

    it('should read and verify data from text file',()=>{
        cy.readFile('log.txt').should('eq', 'Hello Mutherfuckers')
    })

    it('should read and verify browser document content',()=>{
        cy.visit('https://example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
})

