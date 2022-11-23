import Login from "../PageObjects/LoginPage1"
import Login1 from "../PageObjects/LoginPage"
import LoginAct from "../PageObjects/LoginPageActions"
describe('POM',()=>
{
    //General approach
    it("Login test -General approacj",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard")
    })
    it("Login test using POM-1",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        const ln=new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifylogin("Dashboard")
    })
    it("Login test using POM-2",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        const ln2=new Login1()
        ln2.setUserName("Admin")
        ln2.setPassword("admin123")
        ln2.clickSubmit()
        ln2.verifylogin("Dashboard")
    })
    it.only("Login test using POM-3",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.fixture("orangehrm").then((data)=>
        {
            const ln3=new LoginAct()
            ln3.setUserName(data.username)
            ln3.setPassword(data.password)
            ln3.clickSubmit()
            ln3.verifylogin(data.expected)
        })
        
    })
})