import {Brain, Competition, Controller, MSEC, wait} from "./api/vex.js"

brain = Brain();

controller = Controller();

function pre_autonomous() {

}

function autonomous() {
    
}

function user_control() {
    wait(20, MSEC);
}

// create competition instance
comp = Competition(user_control, autonomous);
pre_autonomous();
