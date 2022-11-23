class Login
{
    setUserName(UserName)
    {
        cy.get("input[placeholder='Username']").type(UserName)
    }
    setPassword(Password)
    {
        cy.get("input[placeholder='Password']").type(Password)
    }
    clickSubmit()
    {
        cy.get("button[type='submit']").click()
    }
    verifylogin(validatetext)
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",validatetext)
    }

}
export default Login 