// const ganache = require('ganache-core')
// const Web3 = require('web3')

// const web3 = new Web3(ganache.provider())

class Car {
  static park() {
    return 'stopped';
  }

  static drive() {
    return 'vroom';
  }
}

beforeEach(() => {
});

describe('Car', () => {
  it('should return "stopped" when parked', () => {
    expect(Car.park()).toEqual('stopped');
  });
  it('should return "vroom" when driving', () => {
    expect(Car.drive()).toEqual('vroom');
  });
});
