const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const colorWhite = 0xffffff;
// const colorRed = 0xffffff;

const small_numbers = [
    'small_numbers/0.png',
    'small_numbers/1.png',
    'small_numbers/2.png',
    'small_numbers/3.png',
    'small_numbers/4.png',
    'small_numbers/5.png',
    'small_numbers/6.png',
    'small_numbers/7.png',
    'small_numbers/8.png',
    'small_numbers/9.png'
];
const logger = Logger.getLogger('watchface');


try {
    ((() => {
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        const __$$module$$__ = __$$app$$__.current;

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {

                // background
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 390,
                    h: 450,
                    src: 'background.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                // time main
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 1,
                    hour_startX: 107,
                    hour_startY: 104,
                    hour_array: [
                        'hours/0.png',
                        'hours/1.png',
                        'hours/2.png',
                        'hours/3.png',
                        'hours/4.png',
                        'hours/5.png',
                        'hours/6.png',
                        'hours/7.png',
                        'hours/8.png',
                        'hours/9.png',
                    ],
                    hour_space: 7,
                    hour_align: hmUI.align.RIGHT,
                    minute_zero: 1,
                    minute_startX: 255,
                    minute_startY: 104,
                    minute_array: [
                        'hours/0.png',
                        'hours/1.png',
                        'hours/2.png',
                        'hours/3.png',
                        'hours/4.png',
                        'hours/5.png',
                        'hours/6.png',
                        'hours/7.png',
                        'hours/8.png',
                        'hours/9.png',
                    ],
                    minute_space: 7,
                    minute_align: hmUI.align.RIGHT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });

                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 23,
                    y: 116,
                    image_array: [
                        'weather/0.png',
                        'weather/1.png',
                        'weather/2.png',
                        'weather/3.png',
                        'weather/4.png',
                        'weather/5.png',
                        'weather/6.png',
                        'weather/7.png',
                        'weather/8.png',
                        'weather/9.png',
                        'weather/10.png',
                        'weather/11.png',
                        'weather/12.png',
                        'weather/13.png',
                        'weather/14.png',
                        'weather/15.png',
                        'weather/16.png',
                        'weather/17.png',
                        'weather/18.png',
                        'weather/19.png',
                        'weather/20.png',
                        'weather/21.png',
                        'weather/22.png',
                        'weather/23.png',
                        'weather/24.png',
                        'weather/25.png',
                        'weather/26.png',
                        'weather/27.png',
                        'weather/28.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 12,
                    y: 161,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    font_array: small_numbers,
                    align_h: hmUI.align.CENTER_H,
                    h_space: 2,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: 'weather_unit.png',
                    unit_tc: 'weather_unit.png',
                    unit_en: 'weather_unit.png',
                    negative_image: 'weather_negative.png',
                    invalid_image: 'no_data.png',
                    padding: false,
                    isCharacter: false
                });
                // battery
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 298,
                    y: 15,
                    type: hmUI.data_type.BATTERY,
                    font_array: small_numbers,
                    align_h: hmUI.align.CENTER_H,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 299,
                    y: 1,
                    src: 'battery.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });

                // steps
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 260,
                    y: 416,
                    type: hmUI.data_type.STEP,
                    font_array: small_numbers,
                    align_h: hmUI.align.CENTER_H,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: 'no_data.png',
                    padding: false,
                    isCharacter: false
                });
                // heart rate
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 162,
                    y: 416,
                    type: hmUI.data_type.HEART,
                    font_array: small_numbers,
                    align_h: hmUI.align.CENTER_H,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: 'no_data.png',
                    padding: false,
                    isCharacter: false
                });
                // cal
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 40,
                    y: 416,
                    type: hmUI.data_type.CAL,
                    font_array: small_numbers,
                    align_h: hmUI.align.CENTER_H,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: 'no_data.png',
                    padding: false,
                    isCharacter: false
                });


                // calendar
                let shift = 10;
                weekDays.forEach((day, index) => {
                    // if (index === 5 || index === 6) {
                    //     weekColor = colorRed
                    // }
                    hmUI.createWidget(hmUI.widget.TEXT, {
                        x: shift,
                        y: 208,
                        w: 50,
                        h: 25,
                        color: colorWhite,
                        text_size: 25,
                        align_h: hmUI.align.CENTER_H,
                        align_v: hmUI.align.CENTER_V,
                        text_style: hmUI.text_style.NONE,
                        text: day
                    });
                    shift = shift + 54;
                });

                hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                    resume_call: (function () {
                        CalendarWidget();
                        WeatherForecastWidget();
                    }),
                })
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
            }
        });
    })());
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
}

let calendarWidget = []
let lastUpdatedCalendar = new Date(1997, 1, 10);

function CalendarWidget() {
    if (lastUpdatedCalendar.getDay() === new Date().getDay()) {
        return;
    }

    calendarWidget.forEach((widget, index) => {
        hmUI.deleteWidget(widget)
        calendarWidget = []
    })


    lastUpdatedCalendar = new Date();

    const time = hmSensor.createSensor(hmSensor.id.TIME)
    // Get the current month and year (assuming `time` has the current day, month, year)
    let currentMonth = time.month; // 1 for January, 2 for February, etc
    let currentYear = time.year; // Current year
    let currentDay = time.day; // Current day

    // date on top
    calendarWidget.push(hmUI.createWidget(hmUI.widget.TEXT, {
        x: 80,
        y: 45,
        w: 230,
        h: 35,
        color: colorWhite,
        text_size: 35,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: time.day + "." + time.month + "." + time.year
    }));

    let dates = getNextTwoWeeksDates(currentDay, currentMonth, currentYear)
    let shiftX = 10; // Initialize the shift for x position
    let shitY = 210; // Initialize y position
    let weekColor = colorWhite
    dates.forEach((day, index) => {
        if (index % 7 === 0) {
            shitY += 32; // Move down by 30 pixels for every 7th item
            shiftX = 10;
        }

        // if (index % 7 === 5 || index % 7 === 6) { // 5 is Saturday, 6 is Sunday
        //     weekColor = colorRed
        // } else {
        //     weekColor = colorWhite
        // }
        calendarWidget.push(hmUI.createWidget(hmUI.widget.TEXT, {
            x: shiftX, // Current x position
            y: shitY, // Current y position
            w: 50, // Width of the text widget
            h: 25, // Height of the text widget
            color: weekColor, // Text color
            text_size: 25, // Size of the text
            align_h: hmUI.align.CENTER_H, // Horizontal alignment
            align_v: hmUI.align.CENTER_V, // Vertical alignment
            text_style: hmUI.text_style.NONE, // Text style
            text: String(day).padStart(2, ' ') // Display the current timeToDisplay value
        }));

        if (day === currentDay) {
            calendarWidget.push(hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                x: shiftX + 5,
                y: shitY - 2,
                w: 40,
                h: 30,
                radius: 10,
                line_width: 2,
                color: 0xff0000
            }))
        }
        shiftX += 54
    })
}


let weatherWidgets = []
let lastUpdatedWeather = new Date(1997, 1, 10);

function WeatherForecastWidget() {
    const currentTime = new Date();
    const oneHourInMillis = 60 * 60 * 1000; // 1 hour in milliseconds

    // Check if 1 hour has passed since the last weather update
    if (currentTime - lastUpdatedWeather < oneHourInMillis) {
        return; // Exit the function if 1 hour has not passed
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
            text: element.high + "/" + element.low
        }));
        shift = shift + 95
    }
}

// Function to get the next 14 dates starting from the current date
function getNextTwoWeeksDates(currentDay, currentMonth, currentYear) {
    const dates = [];

    // Create a date object for the current date
    const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

    // Calculate the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = currentDate.getDay();

    // Calculate how many days to subtract to get to the most recent Monday
    const mondayOffset = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;

    // Set the date to the most recent Monday
    currentDate.setDate(currentDate.getDate() + mondayOffset);

    // Loop to get the next 14 days starting from the most recent Monday
    for (let i = 0; i < 14; i++) {
        // Push the actual date (day of the month) into the array
        dates.push(currentDate.getDate()); // Push just the day of the month

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates; // Return the array of days of the month
}

