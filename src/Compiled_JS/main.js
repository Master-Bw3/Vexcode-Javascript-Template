import { Brain, Competition, Controller, GearSetting, Motor, MSEC, PercentUnits, Ports, wait } from "./api/vex";
const brain = Brain();
const controller = Controller();
const example_motor = new Motor(Ports.PORT3, GearSetting.RATIO_18_1, false);
const example_motor2 = new Motor(0, GearSetting.RATIO_18_1, false);
PercentUnits.PERCENT;
function pre_autonomous() {
}
function autonomous() {
}
function user_control() {
    wait(20, MSEC);
}
let d = (h, y, d) => { };
console.log(d(1, 2, 3));
// create competition instance
const comp = Competition(user_control, autonomous);
pre_autonomous();
