
describe('Post user request',()=>
{
    let accessToken='92f4a66e24db5d53f942120a081c03dd967be4fbdf0c20af49c67cb614c5fe6d'
   
    it("Create user",()=>
    {
        
        cy.request(
        {
            method :'POST',
            url :'https://gorest.co.in/public/v2/users',
            headers : 
            {
                'authorization' :'Bearer '+accessToken

            },
            body: 
            {
                "name":"Test Sini Auto",
                "gender":"Male",
                "email":"txtemailpq101@gamil.com",
                "status":"active"
            }

        }).then((res)=>
        {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            //expect(res.body).has.property('email','txtemailpq11@gmail.com')
            expect(res.body).has.property('name','Test Sini Auto')
        })
    })

    
})