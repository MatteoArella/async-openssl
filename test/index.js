const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('openssl', function() {
  it('should be accessed without errors', async function() {
    const openssl = require('../src/index.js');
    await expect(openssl('version')).to.not.be.rejectedWith(Error);
  });
});
