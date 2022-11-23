/// <reference types="Cypress" />

describe("Get api user",()=>
{
    it("Get users",()=>
    {
        cy.request({
            method:'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' :'Bearer 92f4a66e24db5d53f942120a081c03dd967be4fbdf0c20af49c67cb614c5fe6d'

            }
        }).then((res)=>
        {
            expect(res.status).to.eq(200)
            expect(res.body.meta.limit).to.eq('20')
        })
    })
})