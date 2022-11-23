
describe("Handle Tables",()=>
{
   beforeEach('Login',()=>
   {
     cy.visit("https://demo.opencart.com/admin/")
     cy.get("#input-username").type("demo")
     cy.get("#input-password").type("demo")
     cy.get("[type='submit']").click()

     cy.get(".btn-close").click()
     cy.get('#menu-customer>a').click()
     cy.get("#menu-customer>ul>li:first-child").click()
   })
   
    it("Check number of rows and columns",()=>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')

        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    })

    it("Check cell data from specific row and column",()=>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").should('have.text','rs@yopmail.com')
    })

    it("Read all the rows and columns data in the first page",()=>
    {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").
        each(($row,index,$rows)=>
        {
            cy.wrap($row).within(()=>
            {
                cy.get('td').each(($col,index,$cols)=>
                {
                    cy.log($col.text())
                })
            })
        })
    })

    it.only("Pagination",()=>
    {
        cy.get(".col-sm-6.text-end").then((ele)=>
        {
           let textis=ele.text()
           let start=textis.indexOf('(')
           let last=textis.indexOf('Pages')
           let pages=textis.substring(start+1,last-1)
           cy.log("Total nuber of pages in a table is:"+ pages)
        })

        let totalpages=5
        for(let p=1;p<=totalpages;p++)
        {
            if(totalpages>1)
            {
                cy.log("Acive page is "+p)
                cy.get(".pagination>li:nth-child("+p+")").click()
                cy.wait(3000)

                cy.get("table[class='table table-bordered table-hover']>tbody>tr").
                each(($row,index,$rows)=>
                {
                    cy.wrap($row).within(()=>
                    {
                        cy.get('td').each(($col,index,$cols)=>
                        {
                            cy.log($col.text())
                        })
                    })
                })
            }
        }
    })
})