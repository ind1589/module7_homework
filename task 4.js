function ElectronicDevice() {
    this.isOn = false;
    this.power = 0;
}

ElectronicDevice.prototype.switchOn = function() {
    this.isOn = true;
    console.log("Прибор включен");
};

ElectronicDevice.prototype.switchOff = function() {
    this.isOn = false;
    console.log("Прибор выключен");
};

function DeskLamp() {
    this.isOn = false;
    this.power = 50;
    this.color = "белый";
}

DeskLamp.prototype = Object.create(ElectronicDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.switchOn = function() {
    this.isOn = true;
    console.log("Настольная лампа включена");
};

DeskLamp.prototype.switchOff = function() {
    this.isOn = false;
    console.log("Настольная лампа выключена");
};

function Computer() {
    this.isOn = false;
    this.power = 250;
    this.brand = "Apple";
}

Computer.prototype = Object.create(ElectronicDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.switchOn = function() {
    this.isOn = true;
    console.log("Компьютер включен");
};

Computer.prototype.switchOff = function() {
    this.isOn = false;
    console.log("Компьютер выключен");
};

function Kettle() {
    this.isOn = false;
    this.power = 1250;
    this.type = "Smart";
}

Kettle.prototype = Object.create(ElectronicDevice.prototype);
Kettle.prototype.constructor = Kettle;

Kettle.prototype.switchOn = function() {
    this.isOn = true;
    console.log("Чайник включен");
};

Kettle.prototype.switchOff = function() {
    this.isOn = false;
    console.log("Чайник выключен");
};

let deskLamp = new DeskLamp();
let computer = new Computer();
let kettle = new Kettle ();

deskLamp.switchOn();
computer.switchOn();
kettle.switchOn();

let totalPower = deskLamp.power + computer.power + kettle.power;
console.log("Суммарная потребляемая мощность: " + totalPower + " Вт");