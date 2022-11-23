
describe("Assertions-Demo",()=>
{
     it("immplicit-assertions",()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and And keywords for implicit assertions
       // cy.url().should("include","orangehrmlive")
        //cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should("contain","orangehrm")

        // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should and And keywords for implicit assertions
       /* cy.url().should("include","orangehrmlive")
        .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should("contain","orangehrm")*/
        //using and keyword
        cy.url().should("include","orangehrmlive")
        .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain","orangehrm")
        //-ve validation
        .and("not.contain","google")
        
        cy.title().should('include',"Orange")
        .and("eq","OrangeHRM")
        .and("contain","HRM")
        //.and("contain","hrm")

        // validation on webelement
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        .and("exist")

        // find how many links are present in the page

        cy.xpath("//a").should("have.length",5)

        cy.get("[name='username']").type("Admin") // enter text to a textfield

        cy.get("[name='username']").should("have.value","Admin")// validating entered value in textfield

        





     })

     it("explicit-assertions",()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("[name='username']").type("Admin")
        cy.get("[name='password']").type("admin123")
        cy.get("[type='submit']").click()


        let expname="Pooja Patel1"

        cy.get(".oxd-userdropdown-tab").then((x)=>{
                                                let actname=x.text()
                                                //assertion in BDD style
                                               // expect(actname).to.equal(expname)
                                                expect(actname).to.not.equal(expname)
                                                
                                                //TDD style
                                               // assert.equal(actname,expname)
                                                assert.notEqual(actname,expname)

                                                   }
                                             )



        





     })
})