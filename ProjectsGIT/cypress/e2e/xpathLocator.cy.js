describe("Xpath locators",()=>
{
    it("find number of products",()=>
    {
        cy.visit("http://automationpractice.com/index.php")
        //cy.get("//ul[@id='homefeatured']/li").should('have.length',7)
        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7)
    })

    it("find number of products-chained xpath",()=>
    {
        cy.visit("http://automationpractice.com/index.php")
        //cy.get("//ul[@id='homefeatured']/li").should('have.length',7)
        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7)
        cy.xpath("//ul[@id='homefeatured']").xpath("./li").should('have.length',7)
    })
}
)