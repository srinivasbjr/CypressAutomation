
describe("Check ui elements",()=>
{
    it("Checking radio buttons",()=>
    {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio buttons
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")
       

        //selecting radio buttons
        
        cy.get("input#female").check().should("be.checked")
        //cy.get("input#female").click().should("be.checked")
        cy.get("input#male").should("not.be.checked")

        cy.get("input#male").click().should("be.checked")
        cy.get("input#female").should("not.be.checked")


    })

    it("Checking check box",()=>
    {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of check
        cy.get("input#monday").should("be.visible")

        //check the checkbox and verify the checked status
        cy.get("input#monday").check().should("be.checked")
         //verify the checked status for a not checked check box
        cy.get("input#tuesday").should("not.be.checked")

        //unselect check box which is already checked
        cy.get("input#monday").uncheck().should("not.be.checked")
        cy.get("input#tuesday").uncheck().should("not.be.checked")

        //select all the check boxes

        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        //De-select all the check boxes

        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //select first check box from the list

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input#monday").should("be.checked")

        //select last check box from the list

        cy.get("input.form-check-input[type='checkbox']").last().check()
        cy.get("input#sunday").should("be.checked")
    })
})