class Login1
{
    txtusername="input[placeholder='Username']"
    txtpassword="input[placeholder='Password']"
    btnsubbmit="button[type='submit']"
    lbltext=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    setUserName(UserName)
    {
        cy.get(this.txtusername).type(UserName)
    }
    setPassword(Password)
    {
        cy.get(this.txtpassword).type(Password)
    }
    clickSubmit()
    {
        cy.get(this.btnsubbmit).click()
    }
    verifylogin(validatetext)
    {
        cy.get(this.lbltext).should("have.text",validatetext)
    }

}
export default Login1 