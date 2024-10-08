package lmsensors

import (
	"strconv"
)

// A TemperatureSensorType is value that indicates the type of TemperatureSensor.
type TemperatureSensorType int

// All possible TemperatureSensorType constants.
const (
	TemperatureSensorUnknown             TemperatureSensorType = 0
	TemperatureSensorTypePIICeleronDiode TemperatureSensorType = 1
	TemperatureSensorType3904Transistor  TemperatureSensorType = 2
	TemperatureSensorTypeThermalDiode    TemperatureSensorType = 3
	TemperatureSensorTypeThermistor      TemperatureSensorType = 4
	TemperatureSensorTypeAMDAMDSI        TemperatureSensorType = 5
	TemperatureSensorTypeIntelPECI       TemperatureSensorType = 6
)

var _ Sensor = &TemperatureSensor{}

// A TemperatureSensor is a Sensor that detects temperatures in degrees
// Celsius.
type TemperatureSensor struct {
	// The name of the sensor.
	Name string

	// A label that describes what the sensor is monitoring.  Label may be empty.
	Label string

	// Whether the sensor has an alarm triggered.
	Alarm bool

	// Whether the sensor will sound an audible alarm if an alarm
	// is triggered.
	Beep bool

	// The type of sensor used to report temperatures.
	TempType TemperatureSensorType

	// The input temperature, in degrees Celsius, indicated by the sensor.
	Input float64

	// A low threshold temperature, in degrees Celsius, indicated by the sensor.
	Minimum float64

	// A high threshold temperature, in degrees Celsius, indicated by the sensor.
	Maximum float64

	// A critical threshold temperature, in degrees Celsius, indicated by the sensor.
	Critical float64

	// An emergency threshold temperature, in degrees Celsius, indicated by the sensor.
	Emergency float64

	// Whether the temperature is past the critical threshold.
	CriticalAlarm bool
}

func (s *TemperatureSensor) Type() SensorType { return SensorTypeTemperature }

func (s *TemperatureSensor) parse(raw map[string]string) error {
	for k, v := range raw {
		switch k {
		case "input", "min", "max", "crit", "emergency":
			f, err := strconv.ParseFloat(v, 64)
			if err != nil {
				return err
			}

			// Raw temperature values are scaled by 1000
			f /= 1000

			switch k {
			case "input":
				s.Input = f
			case "min":
				s.Minimum = f
			case "max":
				s.Maximum = f
			case "crit":
				s.Critical = f
			case "emergency":
				s.Emergency = f
			}
		case "alarm":
			s.Alarm = v != "0"
		case "beep":
			s.Beep = v != "0"
		case "type":
			t, err := strconv.Atoi(v)
			if err != nil {
				return err
			}

			s.TempType = TemperatureSensorType(t)
		case "crit_alarm":
			s.CriticalAlarm = v != "0"
		case "label":
			s.Label = v
		}
	}

	return nil
}

func (s *TemperatureSensor) name() string { return s.Name }
