/// <reference types="Cypress" />

describe("Get api user",()=>
{
    let accessToken='92f4a66e24db5d53f942120a081c03dd967be4fbdf0c20af49c67cb614c5fe6d'
    it("Get users",()=>
    {
        cy.request({
            method:'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' :'Bearer '+accessToken

            }
        }).then((res)=>
        {
            expect(res.status).to.eq(200)
            //expect(res.body.gender).to.eq('female')
        })
    })
    it("Get user details of a specific user",()=>
    {
        cy.request({
            method:'GET',
            url : 'https://gorest.co.in/public/v2/users/3225',
            headers : {
                'authorization' :'Bearer '+accessToken
            }
        }).then((res)=>
        {
            expect(res.status).to.eq(200)
            expect(res.body.gender).to.eq('female')
        })
    })
})