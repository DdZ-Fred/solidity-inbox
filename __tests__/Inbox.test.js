// const ganache = require('ganache-core')
// const Web3 = require('web3')

// const web3 = new Web3(ganache.provider())

class Car {
    park() {
        return 'stopped';
    }
    drive() {
        return 'vroom';
    }
}

describe('Car', () => {
    it('should return "stopped" when parked', () => {
        const car = new Car()
        expect(car.park()).toEqual('stopped')
    })
    it('should return "vroom" when driving', () => {
        const car = new Car()
        expect(car.drive()).toEqual('vroom')
    })
})
