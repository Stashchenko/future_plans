import {getLangTable} from "./i18n";

const colorWhite = 0xffffff;
const weekDays = getLangTable().weekNamesConfig

let calendarWidget = []
let lastUpdatedCalendar = new Date(1997, 1, 10);

export function CalendarWidget() {
    const today = new Date();
    if (
        lastUpdatedCalendar.getFullYear() === today.getFullYear() &&
        lastUpdatedCalendar.getMonth() === today.getMonth() &&
        lastUpdatedCalendar.getDate() === today.getDate()
    ) {
        return;
    }

    lastUpdatedCalendar = new Date();

    calendarWidget.forEach((widget, index) => {
        hmUI.deleteWidget(widget)
    })
    calendarWidget = []

    const time = hmSensor.createSensor(hmSensor.id.TIME)
    // Get the current month and year (assuming `time` has the current day, month, year)
    let currentMonth = time.month; // 1 for January, 2 for February, etc
    let currentYear = time.year; // Current year
    let currentDay = time.day; // Current day

    // calendar week names
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


    // date on top dd.mm.yyyy
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
        text: currentDay + "." + currentMonth + "." + currentYear
    }));

    let dates = getNextTwoWeeksDates(currentDay, currentMonth, currentYear)
    let shiftX = 10; // Initialize the shift for x position
    let shiftY = 210; // Initialize y position
    let weekColor = colorWhite
    dates.forEach((day, index) => {
        if (index % 7 === 0) {
            shiftY += 32; // Move down by 30 pixels for every 7th item
            shiftX = 10;
        }

        // if (index % 7 === 5 || index % 7 === 6) { // 5 is Saturday, 6 is Sunday
        //     weekColor = colorRed
        // } else {
        //     weekColor = colorWhite
        // }
        calendarWidget.push(hmUI.createWidget(hmUI.widget.TEXT, {
            x: shiftX, // Current x position
            y: shiftY, // Current y position
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
                y: shiftY - 2,
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
