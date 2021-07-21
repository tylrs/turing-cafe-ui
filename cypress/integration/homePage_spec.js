describe('Home Page User Flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    }) 

    it('Should show all reservations on homepage', () => {
        cy.get('body')
        .contains('Turing Cafe Reservations')
        cy.get('form > button').contains('Make Reservation')
        cy.get('label').should('have.length', 4)
        cy.get('article').should('have.length', 9)
    })
})