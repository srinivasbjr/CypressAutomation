
//before
//after
//beforeEach
//afterEach

describe("My test suite",()=>
{
    before(()=>
    {
        cy.log("launch browser ---before log")
    })
    after(()=>
    {
        cy.log("teardown ---After log")
    })

    beforeEach(()=>
    {
        cy.log("login to app for every test case ")
    })

    afterEach(()=>
    {
        cy.log("Log out from app after each test case")
    })

    it("Search",()=>
    {
        cy.log("****search****")
    })

    it.skip("Advanced Search",()=>
    {
        cy.log("****Advanced search****")
    })
    it.only("Listing Products",()=>
    {
        cy.log("****listing products ****")

    })
})