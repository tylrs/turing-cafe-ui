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

    it ('Should be able to type into the form and see the form updated', () => {
        cy.get('label[name="name"] > input')
        .type('Taylor')
        cy.get('label[name="name"] > input')
        .should('have.value', 'Taylor')
        cy.get('label[name="date"] > input')
        .type('05/15')
        cy.get('label[name="date"] > input')
        .should('have.value', '05/15')
        cy.get('label[name="time"] > input')
        .type('4:00')
        cy.get('label[name="time"] > input')
        .should('have.value', '4:00')
        cy.get('label[name="number"] > input')
        .type('200')
        cy.get('label[name="number"] > input')
        .should('have.value', '200')
    })
})