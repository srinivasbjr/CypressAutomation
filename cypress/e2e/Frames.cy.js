import 'cypress-iframe'
describe("Handling Frames",()=>
{
    it("Approach 1",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe=cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

            iframe.clear().type('Welcome to cypress{ctrl+a}')
            cy.get("[aria-label='Bold']").click()
    })

    it("Approach 2-by using custom command",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getiFrame ('#mce_0_ifr').clear().type('cusptom command')
    })

    it("Approach 3 -By using cypress iframe plugin",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('By iframe plugin')
    })
})