describe('Home Page User Flow', () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/reservations', {
            statusCode: 200,
            body: [
                {
                    "id": "1",
                    "name": "Christie",
                    "date": "12/29",
                    "time": "7:00",
                    "number": "12"
                  },
                  {
                    "id": "2",
                    "name": "Leta",
                    "date": "4/5",
                    "time": "7:00",
                    "number": "2"
                  },
                  {
                    "id": "3",
                    "name": "Pam",
                    "date": "1/21",
                    "time": "6:00",
                    "number": "4"
                  },
                  {
                    "id": "4",
                    "name": "Khalid",
                    "date": "5/9",
                    "time": "7:30",
                    "number": "7"
                  }
            ]
        })
        cy.visit('http://localhost:3000')
      
    }) 

    it('Should show all reservations on homepage', () => {
        cy.get('body')
        .contains('Turing Cafe Reservations')
        cy.get('form > button').contains('Make Reservation')
        cy.get('label').should('have.length', 4)
        cy.get('article').should('have.length', 4)
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

    it ('Should be able to add a new reservation to the page', () => {
        cy.get('label[name="name"] > input')
        .type('Taylor')
        cy.get('label[name="date"] > input')
        .type('05/15')
        cy.get('label[name="time"] > input')
        .type('4:00')
        cy.get('label[name="number"] > input')
        .type('200')
        cy.get('form > button')
        .click()
        cy.get('article').should('have.length', 10)
        cy.get('.reservation-container > :nth-child(10)')
        .contains('Taylor')
        cy.get('.reservation-container > :nth-child(10)')
        .contains('05/15')
        cy.get('.reservation-container > :nth-child(10)')
        .contains('4:00')
        cy.get('.reservation-container > :nth-child(10)')
        .contains('200')
    })
})