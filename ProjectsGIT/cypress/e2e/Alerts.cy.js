
describe("Alerts",()=>
{
    it("Normal alert-JS alert",()=>
    {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        //cypress event
        cy.on('window:alert',(t)=>
        {
            expect(t).to.contains('I am a JS Alert')
        })
        // cypress will automatically close the alert window
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it("JS confirmation alert-OK",()=>
    {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>
        {
            expect(t).to.contains('I am a JS Confirm')
           
        })
        //cypress click's on 'OK" by default
        cy.get("#result").should('have.text','You clicked: Ok')
    })
    it("JS confirmation alert-CANCEL",()=>
    {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>
        {
            expect(t).to.contains('I am a JS Confirm')
           
        })
        //cypress will close the alert window by clicking on cancel button
        cy.on('window:confirm',()=> false)
       
        cy.get("#result").should('have.text','You clicked: Cancel')
    })
    it("JS prompt alert-OK",()=>
    {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((win)=>
        {
            cy.stub(win,'prompt').returns('welcome');
        })
        //default it will click on OK
       // cy.get("button[onclick='jsPrompt()']").click()
       //cy.get("#result").should('have.text','You entered: welcome')

       //to click on cancel in alert
        cy.on('window:prompt',()=>false)
        cy.get("#result").should('have.text','You entered: welcoe')

    })

    it.only("JS authenticated alert",()=>
    {
        //approach 1
        /*cy.visit("http://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin',password:'admin'}})
        
       
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")

*/ 
        //approach 2
        cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get("div[class='example'] p").should('have.contain',"Congratulations")

    })

})