const medicalFile = artifacts.require("medicalFile");

require('chai')
    .use(require('chai-as-promised'))
    .should()
     
contract('medicalFile', (accounts) => {

 let file

 before(async() => {
    file = await medicalFile.deployed()
 })

 describe ('deployment', async() => {
     it('depolys successfully', async() => {
        file = await medicalFile.deployed()
        const address= file.address
        console.log(address)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        assert.notEqual(address, 0x0)
     })
 })
 
 describe ('storage', async() => {
    it('updates the hash', async() => {
        let fileHash
        fileHash = 'abc123'
        await file.set(fileHash)
        const result = await file.get()
        assert.equal(result, fileHash)
    })
  })
})