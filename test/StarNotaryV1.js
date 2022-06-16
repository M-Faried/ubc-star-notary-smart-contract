// import 'babel-polyfill';

const StarNotaryV1 = require('StarNotaryV1.sol');

let accounts;
let owner;

contract('StarNotaryV1', async (accs) => {
    accounts = accs;
    owner = accounts[0];
})

it('Has the correct name', async () => {
    let instance = await StarNotaryV1.deployed();
    let starName = await instance.starName.call();
    assert.equal(starName, 'Awesome Udacity Star');
})

it('Can be claimed', async () => {
    let instance = await StarNotaryV1.deplyed();
    instance.claimStar({ from: owner });
    let starOwner = instance.starOwner.call();
    assert.equal(starOwner, owner);
})