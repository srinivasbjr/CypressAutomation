//click on link using label
//over witing existing contains() command
//re-usable custom command

describe("custom commands",()=>
{
    it("Handling links",()=>
    {
        cy.visit("https://demo.nopcommerce.com/")

        //direct approach withour using custom command
            //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
            

        //using custom command

        cy.ClickLink('Apple MacBook Pro 13-inch')

        cy.get("div[class='product-name'] h1").should("have.text","Apple MacBook Pro 13-inch")

    })

    it("overwriting existing commands",()=>
    {
        cy.visit("https://demo.nopcommerce.com/")
        cy.ClickLink('APPLE MACBOOK PRO 13-INCH')

        cy.get("div[class='product-name'] h1").should("have.text","Apple MacBook Pro 13-inch")
    })

    it.only("Login command",()=>
    {
        cy.visit("https://demo.nopcommerce.com/")
        //Login
        cy.ClickLink('Log in')
        cy.Login('testing@gmail.com','test123')
        cy.get(".message-error.validation-summary-errors").should('have.text','Login was unsuccessful. Please correct the errors and try again.No customer account found\n')
    })
})