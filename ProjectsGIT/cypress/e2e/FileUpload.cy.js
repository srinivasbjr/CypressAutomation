import 'cypress-file-upload'
describe("File uploads",()=>
{
    it("Single file upload",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('sample1.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })

    it("file upload Rename",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'sample1.pdf',fileName:'Sample11.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it("file upload-Drag and Drop",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('sample1.pdf',{subjectType:'drag-n-drop'})
        //cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains("sample1.pdf")
    })
    it("Multiple files upload",()=>
    {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get("#filesToUpload").attachFile(['sample1.pdf','sample2.pdf'])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').contains('Files You Selected')
    })
    it.only(" file upload-Shadow Dom",()=>
    {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('sample1.pdf')
        cy.wait(5000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('sample1.pdf')
    })
})