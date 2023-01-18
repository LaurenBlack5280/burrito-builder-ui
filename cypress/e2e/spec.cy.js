describe('Burrito Builder', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      "orders": [
        {
            "id": 1,
            "name": "Pat",
            "ingredients": [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]
        },
        {
            "id": 2,
            "name": "Sam",
            "ingredients": [
                "steak",
                "pico de gallo",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]
        },
        {
            "id": 3,
            "name": "Alex",
            "ingredients": [
                "sofritas",
                "beans",
                "sour cream",
                "carnitas",
                "queso fresco"
            ]
        },
        {
            "name": "Cool",
            "ingredients": [
                "beans"
            ],
            "id": 4
        }
    ]
    })
  })

  it('Should have Burrito Builder title', () => {
    cy.contains('Burrito Builder')
  })
  it('Should show existing orders', () => {
    cy.contains('Pat')
    cy.contains('beans')
  })
  it('Should have a name input', () => {
    cy.get('form').find('input').should('be.visible')
  })

  it('Should be able to fill out form', () => {
    cy.get('input[type="text"]')
    .type('Lauren')
    .should('have.value', 'Lauren')
    cy.get('button').first().click()
    cy.get('p').contains('beans')
  })

  //a user visits the page and can
  //1. view title
  //2. view existing orders
  //3. view form with proper inputs
  //4. fill out form and see info in input fields value

})