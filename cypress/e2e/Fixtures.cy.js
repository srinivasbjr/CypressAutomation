
describe("MyTestSuite",()=>
{
    //Direct access
    it('FixturesDemoTest-Hardcoded values',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()


        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",'Dashboard')
    })
//Data from fixture file
let userdata
before(()=>
{
    cy.fixture('orangehrm').then( (data)=>
    {
        userdata=data
    })
})
    it.only('FixturesDemoTest-from Fixtures file',()=>
    {
       
            cy.visit(userdata.url)
            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()


            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",userdata.expected)
    
        
     })

     it('FixturesDemoTest-from Fixtures file for single block',()=>
    {
       
        cy.fixture('oragnehrm').then((data)=>
        {

      
            cy.visit(data.url)
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()


            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",data.expected)
        })
        
     })

    //Access through Hook-for multiple it blocks
    it('FixturesDemoTest',()=>
    {

    })
})