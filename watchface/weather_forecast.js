import {getLangTable} from "./i18n";

const colorWhite = 0xffffff;
const refreshIn = 60 * 60 * 1000; // 1 hour in milliseconds
const weekDays = getLangTable().weekNamesConfig

let weatherWidgets = []
let lastUpdatedWeather = new Date(1997, 1, 10);

export function WeatherForecastWidget() {
    const currentTime = new Date();

    // Check if refreshIn has passed since the last weather update
    if (currentTime - lastUpdatedWeather < refreshIn) {
        return;
    }

    // removing old widgets
    weatherWidgets.forEach((widget, index) => {
        hmUI.deleteWidget(widget)
        weatherWidgets = []
    })

    lastUpdatedWeather = currentTime
    const weather = hmSensor.createSensor(hmSensor.id.WEATHER)
    const weatherData = weather.getForecastWeather()
    const forecastData = weatherData.forecastData

    // weather city
    weatherWidgets.push(hmUI.createWidget(hmUI.widget.TEXT, {
        x: 5,
        y: 80,
        w: 95,
        h: 46,
        color: colorWhite,
        text_size: 20,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: weatherData.cityName
    }));

    // forecast
    let shift = 25
    let tomorrow = new Date().getDay()
    for (let i = 1; i <= 4; i++) {
        const element = forecastData.data[i]
        const weekDayIndex = (tomorrow + i + 6) % 7;
        weatherWidgets.push(hmUI.createWidget(hmUI.widget.TEXT, {
            x: shift - 20,
            y: 308,
            w: 48,
            h: 30,
            color: colorWhite,
            text_size: 25,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.NONE,
            text: weekDays[weekDayIndex]
        }));
        weatherWidgets.push(hmUI.createWidget(hmUI.widget.IMG, {
            x: shift + 20,
            y: 308,
            w: 50,
            h: 50,
            src: 'weather/' + element.index + '.png',
            show_level: hmUI.show_level.ONLY_NORMAL
        }));
        weatherWidgets.push(hmUI.createWidget(hmUI.widget.TEXT, {
            x: shift - 22,
            y: 343,
            w: 80,
            h: 30,
            color: colorWhite,
            text_size: 25,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.NONE,
            text: element.low + "/" + element.high
        }));
        shift = shift + 95
    }
}
