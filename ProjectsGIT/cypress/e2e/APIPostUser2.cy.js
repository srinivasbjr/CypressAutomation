
const datajson=require('../fixtures/createuser')
describe('Post user request',()=>
{
    let accessToken='92f4a66e24db5d53f942120a081c03dd967be4fbdf0c20af49c67cb614c5fe6d'
    let txtemail=''
    let txtname=''
    it("Create user",()=>
    {
        var patterns="ABCDEFGHUJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<10;i++)
        {
            txtname+=patterns.charAt(Math.floor(Math.random()*patterns.length))
            txtemail=txtname+'@gmail.com'
        }
        cy.fixture('createuser').then((payload) =>
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
                            "name":payload.name,
                            "gender":payload.gender,
                            "email":txtemail,
                            "status":payload.status
                        }
            
                    }).then((res)=>
                    {
                        cy.log(JSON.stringify(res))
                       expect(res.status).to.eq(201)
                       expect(res.body).has.property('name',payload.name)
                        expect(res.body).has.property('email',txtemail)
                    })
                })
            })
        

   
})