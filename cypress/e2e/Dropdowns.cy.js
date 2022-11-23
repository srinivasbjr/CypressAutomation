
describe("Handle dropdowns",()=>
{
    it.skip("with select",()=>
    {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Australia").should("have.value","Australia")
    })

    it.skip("without select",()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input.select2-search__field").type("Japan").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text","Japan")
    })

    it.skip("static Auto suggest dropdown",()=>
    {
        cy.visit("https://www.wikipedia.org")

        cy.get('#searchInput').type("Delhi")

        cy.get(".suggestion-title").should("have.length",6)

        cy.get(".suggestion-title").contains("Metro").click()
    })

    it("Dynamic dropdown",()=>
    {
        cy.visit("http://google.com")
        cy.get("[name='q']").type("Cypress automation")

        cy.wait(3000)
        cy.get("div.wM6W7d>span").should("have.length",11)
        cy.get("div.wM6W7d>span").each(($el,index,$list)=>
        {
            if($el.text()=='Cypress automation course')
            {
                cy.wrap($el).click()
            }
        })

        cy.get("[name='q']").should("have.value","Cypress automation course")

    })
})