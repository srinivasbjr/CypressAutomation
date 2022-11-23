
describe("locators suite",()=>
{
    it("csslocator",()=>
    {
        cy.visit("http://automationpractice.com/index.php")
        //used class and attribute locator combination
        //cy.get(".sf-with-ul[title='Dresses']").click
        // used id locator and tag is optional
        cy.get("#search_query_top").type("T-Shirt")
        //used attribute locaor
        cy.get("[name='submit_search']").click()
        //used class locator
        cy.get(".lighter").contains("T-Shirt")

    }
    )
}
)