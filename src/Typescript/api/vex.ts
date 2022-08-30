enum Ports {
	PORT1 = 0,
	PORT2 = 1,
	PORT3 = 2,
	PORT4 = 3,
	PORT5 = 4,
	PORT6 = 5,
	PORT7 = 6,
	PORT8 = 7,
	PORT9 = 8,
	PORT10 = 9,
	PORT11 = 10,
	PORT12 = 11,
	PORT13 = 12,
	PORT14 = 13,
	PORT15 = 14,
	PORT16 = 15,
	PORT17 = 16,
	PORT18 = 17,
	PORT19 = 18,
	PORT20 = 19,
	PORT21 = 20,
}
type port = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20

class vexEnum {
	value = 0
	name = ""

	constructor(value: number, name: string) {
		this.value = value
		this.name = name}

	__str__(){
		return this.name}

	__repr__(){
		return this.name}
}

class PercentUnits extends vexEnum {
	static PERCENT: PercentUnits
	constructor(value: number, name: string) {
		super(value, name);
			}
}

PercentUnits.PERCENT = new PercentUnits(0, "PERCENT")

class TimeUnits extends vexEnum {
	static SECONDS: TimeUnits
	static SEC: TimeUnits
	static MSEC: TimeUnits
	constructor(value: number, name: string) {
		super(value, name);
			}
}
TimeUnits.SECONDS = new TimeUnits(0, "SECONDS")
TimeUnits.SEC = new TimeUnits(0, "SECONDS")
TimeUnits.MSEC = new TimeUnits(1, "MSEC")



class Accelerometer {
	constructor(port: number, sensitivity: number = 0){
		}
};

let AnalogIn
let AnalogPercentUnits
let AnalogUnits
let Any
let AxisType
let BRAKE
let Brain
let BrakeType
let Bumper
let COAST
let Callable
let Code
let Color
let Competition
let Controller
let ControllerType
let CurrentUnits
let DEGREES
let DPS
let DigitalIn
let DigitalOut
let DirectionType
let Distance
let DistanceUnits
let DriveTrain
let Electromagnet
let Encoder
let Event
let EventMask
let FORWARD
let FontType
let GearSetting
let GestureType
let Gps
let Gyro
let HOLD
let INCHES
let Inertial
let LEFT
let Led
let LedStateType
let Light
let Limit
let Line
let MM
let MSEC
let MV
let MessageLink
let Motor
let Motor29
let MotorGroup
let MotorVictor
let ObjectSizeType
let Optical
let OrientationType
let PARTNER
let PERCENT
let PITCH
let PRIMARY
let Pneumatics
let Potentiometer
let PotentiometerV2
let PowerUnits
let Pwm
let REVERSE
let RIGHT
let ROLL
let RPM
let Rotation
let RotationPercentUnits
let RotationUnits
let SECONDS
let SerialLink
let Servo
let Signature
let SmartDrive
let Sonar
let TURNS
let TemperaturePercentUnits
let TemperatureUnits
let Thread
let ThreeWireType
let Timer
let TorquePercentCurrentUnits
let TorquePercentUnits
let TorqueUnits
let Triport
let Tuple
let TurnType
let Union
let VOLT
let VelocityPercentUnits
let VelocityUnits
let VexlinkType
let Vision
let VisionObject
let VoltageUnits
let XAXIS
let YAW
let YAXIS
let ZAXIS
let __builtins__
let __cached__
let __doc__
let __file__
let __loader__
let __name__
let __package__
let __spec__
let clear_errors
let info
let math
let on_screen_errors
let sleep
let sys
let time
let vexnumber
let wait

export {
	Accelerometer,
	AnalogIn,
	AnalogPercentUnits,
	AnalogUnits,
	Any,
	AxisType,
	BRAKE,
	Brain,
	BrakeType,
	Bumper,
	COAST,
	Callable,
	Code,
	Color,
	Competition,
	Controller,
	ControllerType,
	CurrentUnits,
	DEGREES,
	DPS,
	DigitalIn,
	DigitalOut,
	DirectionType,
	Distance,
	DistanceUnits,
	DriveTrain,
	Electromagnet,
	Encoder,
	Event,
	EventMask,
	FORWARD,
	FontType,
	GearSetting,
	GestureType,
	Gps,
	Gyro,
	HOLD,
	INCHES,
	Inertial,
	LEFT,
	Led,
	LedStateType,
	Light,
	Limit,
	Line,
	MM,
	MSEC,
	MV,
	MessageLink,
	Motor,
	Motor29,
	MotorGroup,
	MotorVictor,
	ObjectSizeType,
	Optical,
	OrientationType,
	PARTNER,
	PERCENT,
	PITCH,
	PRIMARY,
	PercentUnits,
	Pneumatics,
	Ports,
	Potentiometer,
	PotentiometerV2,
	PowerUnits,
	Pwm,
	REVERSE,
	RIGHT,
	ROLL,
	RPM,
	Rotation,
	RotationPercentUnits,
	RotationUnits,
	SECONDS,
	SerialLink,
	Servo,
	Signature,
	SmartDrive,
	Sonar,
	TURNS,
	TemperaturePercentUnits,
	TemperatureUnits,
	Thread,
	ThreeWireType,
	TimeUnits,
	Timer,
	TorquePercentCurrentUnits,
	TorquePercentUnits,
	TorqueUnits,
	Triport,
	Tuple,
	TurnType,
	Union,
	VOLT,
	VelocityPercentUnits,
	VelocityUnits,
	VexlinkType,
	Vision,
	VisionObject,
	VoltageUnits,
	XAXIS,
	YAW,
	YAXIS,
	ZAXIS,
	__builtins__,
	__cached__,
	__doc__,
	__file__,
	__loader__,
	__name__,
	__package__,
	__spec__,
	clear_errors,
	info,
	math,
	on_screen_errors,
	sleep,
	sys,
	time,
	vexEnum,
	vexnumber,
	wait,
};
