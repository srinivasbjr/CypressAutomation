
describe("API test using Intercept ",()=>
{
    it("simple intercept",()=>
    {
        cy.visit("https://jsonplaceholder.typicode.com/")
        

        cy.intercept(
            {
                path:"/posts"

            }
        ).as('posts')
        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
        cy.wait('@posts').then(inter =>
            {
                cy.log(JSON.stringify(inter))
                console.log(JSON.stringify(inter))
            })

    })

    it.only('mocking with intercept',()=>
    {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET','/posts',{totalpost:5})
        cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
        cy.wait('@posts')
    })
})