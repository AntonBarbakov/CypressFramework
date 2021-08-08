export default class AccountLinks {
    static clickSummary() {
        cy.get('#account_summary_tab').click()
    }

    static clackActivity() {
        cy.get('#account_activity_tab').click()
    }

    static clickTransferFunds() {
        cy.get('#transfer_funds_tab').click()
    }

    static clickPayBills() {
        cy.get('#pay_bills_tab').click()
    }

    static clickManeyApp() {
        cy.get('#money_map_tab').click()
    }

    static clickOnLineStatements() {
        cy.get('#online_statements_tab').click()
    }
}