
describe('suite name',()=>
 {
    it('test1-positive',function()
        {
            cy.visit("http://google.com")
            cy.title().should('eq','Google')
        }
    )
    
 }
)