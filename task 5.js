class ElectronicDevice {
    constructor() {
        this.isOn = false;
        this.power = 0;
    }

    switchOn() {
        this.isOn = true;
        console.log("Прибор включен");
    }

    switchOff() {
        this.isOn = false;
        console.log("Прибор выключен");
    }
}

class DeskLamp extends ElectronicDevice {
    constructor() {
        super();
        this.isOn = false;
        this.power = 100;
    }

    switchOn() {
        this.isOn = true;
        console.log("Настольная лампа включена");
    }

    switchOff() {
        this.isOn = false;
        console.log("Настольная лампа выключена");
    }
}

class Computer extends ElectronicDevice {
    constructor() {
        super();
        this.isOn = false;
        this.power = 200;
    }

    switchOn() {
        this.isOn = true;
        console.log("Компьютер включен");
    }

    switchOff() {
        this.isOn = false;
        console.log("Компьютер выключен");
    }
}

let deskLamp = new DeskLamp();
let computer = new Computer();

deskLamp.switchOn();
computer.switchOn();

let totalPower = deskLamp.power + computer.power;
console.log("Суммарная потребляемая мощность: " + totalPower);