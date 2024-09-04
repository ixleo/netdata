// SPDX-License-Identifier: GPL-3.0-or-later

package w1sensor

import (
	"fmt"
	"strings"

	"github.com/netdata/netdata/go/plugins/plugin/go.d/agent/module"
)

const (
	prioTemperature = module.Priority + iota
)

var (
	sensorChartTmpl = module.Chart{
		ID:       "w1sensor_%s_temperature",
		Title:    "1-Wire Temperature Sensor",
		Units:    "Celsius",
		Fam:      "Temperature",
		Ctx:      "w1sensor.temperature",
		Type:     module.Line,
		Priority: prioTemperature,
		Dims: module.Dims{
			{ID: "w1sensor_%s_temperature", Div: precision},
		},
	}
)

func (w *W1sensor) addSensorChart(id string) {
	chart := sensorChartTmpl.Copy()

	chart.ID = fmt.Sprintf(chart.ID, id)
	chart.Labels = []module.Label{
		{Key: "sensor_id", Value: id},
	}

	for _, dim := range chart.Dims {
		dim.ID = fmt.Sprintf(dim.ID, id)
	}

	if err := w.Charts().Add(chart); err != nil {
		w.Warning(err)
	}

}

func (w *W1sensor) removeSensorChart(id string) {
	px := fmt.Sprintf("w1sensor_%s", id)
	for _, chart := range *w.Charts() {
		if strings.HasPrefix(chart.ID, px) {
			chart.MarkRemove()
			chart.MarkNotCreated()
		}
	}
}
