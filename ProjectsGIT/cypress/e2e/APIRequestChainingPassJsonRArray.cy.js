const { Callbacks } = require("cypress/types/jquery")

describe("Request chaining",()=>
{
    let accessToken='3c3c26c2b5214d68b9f153629221611'
    //const city=''
    it("Get location details",()=>
    {
        cy.request(
        {
            method:'GET',
            url : 'http://api.weatherapi.com/v1/current.json?key='+accessToken+'&q=India',
            

        }).then((res)=>
        {
           cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
           
           
        })
        
       
    })
})