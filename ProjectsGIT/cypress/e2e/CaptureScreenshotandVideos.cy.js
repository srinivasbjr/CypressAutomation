
describe("My suite",()=>
{
    it("Capture screenshots and videos",()=>
    {
        cy.visit("https://demo.opencart.com/")
        /*cy.screenshot("Homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot("logo")*/

        //automatically capture screenshot and video on failure only when we execute through cmd line or cli tool

        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should("have.text","Tablets")

       
       
    })
})