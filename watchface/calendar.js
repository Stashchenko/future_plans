import {getLangTable} from "./i18n";

const colorWhite = 0xffffff;
const colorGray = 0x808080;
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
        hmUI.createWidget(hmUI.widget.TEXT, {
            x: shift,
            y: 178,
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
        y: 10,
        w: 230,
        h: 35,
        color: colorWhite,
        text_size: 35,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: currentDay + "." + String(currentMonth).padStart(2, '0') + "." + currentYear
    }));

    let dates = getNextThreeWeeksDates(currentDay, currentMonth, currentYear)
    let shiftX = 10; // Initialize the shift for x position
    let shiftY = 180; // Initialize y position
    dates.forEach((dayProp, index) => {
        if (index % 7 === 0) {
            shiftY += 32; // Move down by 30 pixels for every 7th item
            shiftX = 10;
        }

        calendarWidget.push(hmUI.createWidget(hmUI.widget.TEXT, {
            x: shiftX, // Current x position
            y: shiftY, // Current y position
            w: 50, // Width of the text widget
            h: 25, // Height of the text widget
            color: dayProp.color, // Text color
            text_size: 25, // Size of the text
            align_h: hmUI.align.CENTER_H, // Horizontal alignment
            align_v: hmUI.align.CENTER_V, // Vertical alignment
            text_style: hmUI.text_style.NONE, // Text style
            text: String(dayProp.day).padStart(2, '') // Display the current timeToDisplay value
        }));

        if (dayProp.day === currentDay) {
            calendarWidget.push(hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                x: shiftX + 6,
                y: shiftY - 1,
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

function getNextThreeWeeksDates(currentDay, currentMonth, currentYear) {
    const dates = [];
    const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

    const currentRealMonth = currentDate.getMonth(); // Store real current month (0-indexed)

    const dayOfWeek = currentDate.getDay();
    const mondayOffset = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;

    currentDate.setDate(currentDate.getDate() + mondayOffset - 7);

    for (let i = 0; i < 21; i++) {
        const dateMonth = currentDate.getMonth(); // month of this specific date
        const dayColor = dateMonth !== currentRealMonth ? colorGray : colorWhite;

        dates.push({
            day: currentDate.getDate(),
            color: dayColor
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}
