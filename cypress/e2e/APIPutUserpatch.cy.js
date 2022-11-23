

describe("Put user",()=>
{
    let accessToken='92f4a66e24db5d53f942120a081c03dd967be4fbdf0c20af49c67cb614c5fe6d'
    let userid=''

    it("User creation",()=>
    {
        cy.request
        (
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
                    "email":"txtemailpq1aa01aaaa1babaa@gamil.com",
                    "status":"active"
                }

            }
        ).then
        ((res)=>
            {
                   // expect(res.status).to.eq(200)
                    cy.wait(5000)
                    userid=res.body.id
                    cy.log('user id is'+userid)

                    cy.request
                    (
                        {
                             method:'PATCH',
                             url : 'https://gorest.co.in/public/v2/users/'+userid,
                             headers : 
                             {
                                 'authorization' :'Bearer '+accessToken
                             },
                            body: 
                            {
                                "email":"putusera1ababa@gmail.com",
                              
                            }
                        }
                    ).then
                    ((res)=>
                        {
                            //expect(res.status).to.eq(200)
                            expect(res.body.id).to.eq(userid)
                            expect(res.body.email).to.eq("putusera1ababa@gmail.com")
                            
                            cy.request
                            (
                                {
                                    method:'GET',
                                    url : 'https://gorest.co.in/public/v2/users/'+userid,
                                    headers : 
                                    {
                                        'authorization' :'Bearer '+accessToken
                                    }
                                }
                            ).then
                            ((res)=>
                                {
                                    //expect(res.status).to.eq(200)
                                    expect(res.body.email).to.eq("putusera1ababa@gmail.com")
                                }
                            )
                            
                        }
                    )
            }
        )
    }
    )
})