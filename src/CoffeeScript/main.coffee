import {Brain, Competition, Controller, MSEC, wait} from "./api/vex.js"

brain = Brain();

controller = Controller();

pre_autonomous = () -> pass

autonomous = () -> pass


user_control = () ->
    wait(20, MSEC);


# create competition instance
comp = Competition(user_control, autonomous);
pre_autonomous();
