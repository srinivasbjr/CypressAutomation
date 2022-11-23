
describe("Handle tab ",()=>
{
   it("1-remove target from view source",()=>
   {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').invoke("removeAttr",'target').click()
        cy.get('.example >h3').should('have.text','New Window')
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
       
        cy.wait(5000)
        cy.go('back')

        cy.get('.example >h3').should('have.text','Opening a new window')
   })

   it.only("2-get href value",()=>
   {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').then((e)=>
        {
            let url=e.prop('href')
            cy.visit(url)
        })

        cy.get('.example >h3').should('have.text','New Window')
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
       
        cy.wait(5000)
        cy.go('back')

        cy.get('.example >h3').should('have.text','Opening a new window')
   })
   
    
})