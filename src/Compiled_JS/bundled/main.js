pyimport vex
vex.Accelerometer;
vex.AnalogIn;
vex.AnalogPercentUnits;
vex.AnalogUnits;
vex.Any;
vex.AxisType;
vex.BRAKE;
let Brain = vex.Brain;
vex.BrakeType;
vex.Bumper;
vex.COAST;
vex.Callable;
vex.Code;
vex.Color;
let Competition = vex.Competition;
let Controller = vex.Controller;
vex.ControllerType;
vex.CurrentUnits;
vex.DEGREES;
vex.DPS;
vex.DigitalIn;
vex.DigitalOut;
vex.DirectionType;
vex.Distance;
vex.DistanceUnits;
vex.DriveTrain;
vex.Electromagnet;
vex.Encoder;
vex.Event;
vex.EventMask;
vex.FORWARD;
vex.FontType;
vex.GearSetting;
vex.GestureType;
vex.Gps;
vex.Gyro;
vex.HOLD;
vex.INCHES;
vex.Inertial;
vex.LEFT;
vex.Led;
vex.LedStateType;
vex.Light;
vex.Limit;
vex.Line;
vex.MM;
let MSEC = vex.MSEC;
vex.MV;
vex.MessageLink;
vex.Motor;
vex.Motor29;
vex.MotorGroup;
vex.MotorVictor;
vex.ObjectSizeType;
vex.Optical;
vex.OrientationType;
vex.PARTNER;
vex.PERCENT;
vex.PITCH;
vex.PRIMARY;
vex.PercentUnits;
vex.Pneumatics;
vex.Ports;
vex.Potentiometer;
vex.PotentiometerV2;
vex.PowerUnits;
vex.Pwm;
vex.REVERSE;
vex.RIGHT;
vex.ROLL;
vex.RPM;
vex.Rotation;
vex.RotationPercentUnits;
vex.RotationUnits;
vex.SECONDS;
vex.SerialLink;
vex.Servo;
vex.Signature;
vex.SmartDrive;
vex.Sonar;
vex.TURNS;
vex.TemperaturePercentUnits;
vex.TemperatureUnits;
vex.Thread;
vex.ThreeWireType;
vex.TimeUnits;
vex.Timer;
vex.TorquePercentCurrentUnits;
vex.TorquePercentUnits;
vex.TorqueUnits;
vex.Triport;
vex.Tuple;
vex.TurnType;
vex.Union;
vex.VOLT;
vex.VelocityPercentUnits;
vex.VelocityUnits;
vex.VexlinkType;
vex.Vision;
vex.VisionObject;
vex.VoltageUnits;
vex.XAXIS;
vex.YAW;
vex.YAXIS;
vex.ZAXIS;
vex.__builtins__;
vex.__cached__;
vex.__doc__;
vex.__file__;
vex.__loader__;
vex.__name__;
vex.__package__;
vex.__spec__;
vex.clear_errors;
vex.info;
vex.math;
vex.on_screen_errors;
vex.sleep;
vex.sys;
vex.time;
vex.vexEnum;
vex.vexnumber;
let wait = vex.wait;

// Generated by CoffeeScript 2.7.0
var autonomous, pre_autonomous, user_control;
Brain();
Controller();

pre_autonomous = function () {
  return pass;
};

autonomous = function () {
  return pass;
};

user_control = function () {
  return wait(20, MSEC);
}; // create competition instance


Competition(user_control, autonomous);
pre_autonomous();
