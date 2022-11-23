import Loginelements from "./LoginPageEle"
const ele=new Loginelements()
class LoginAct
{
    
    setUserName(UserName)
    {
        cy.get(ele.txtusername).type(UserName)
    }
    setPassword(Password)
    {
        cy.get(ele.txtpassword).type(Password)
    }
    clickSubmit()
    {
        cy.get(ele.btnsubbmit).click()
    }
    verifylogin(validatetext)
    {
        cy.get(ele.lbltext).should("have.text",validatetext)
    }

}
export default LoginAct 