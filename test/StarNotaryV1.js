// import 'babel-polyfill';
// const StarNotaryV1 = require('../build/contracts/StarNotaryV1.json');
const StarNotaryV1 = artifacts.require('StarNotaryV1');

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
    let instance = await StarNotaryV1.deployed();
    await instance.claimStar({ from: owner });
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
})

it('Can change owners', async () => {
    let instance = await StarNotaryV1.deployed();
    let secondUser = accounts[1];

    // Assigning star to the first user
    await instance.claimStar({ from: owner });
    let starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);

    // Assigning star to the second user
    await instance.claimStar({ from: secondUser });
    let secondOwner = await instance.starOwner.call();
    assert.equal(secondOwner, secondUser);
})