const Greeting = artifacts.require("Greeting");

contract("Greeting", (accounts) => {
  it("should deploy with initial message", async () => {
    const instance = await Greeting.deployed();
    const message = await instance.message();
    assert.equal(message, "Hello, Ethereum!");
  });

  it("should update the message", async () => {
    const instance = await Greeting.deployed();
    await instance.setMessage("Hi Blockchain!", { from: accounts[0] });
    const message = await instance.message();
    assert.equal(message, "Hi Blockchain!");
  });
});
