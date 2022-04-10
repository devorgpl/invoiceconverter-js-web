// 
// before each: check if user exists, if not, create one and logout if yes, select it
//

describe('Logged in', () => {
    it('Invoices', () => {
      cy.visit('http://localhost:5000')
      cy.get('#HeadLoginButton').click()
      expect(true).to.equal(true)
    })
  })
  