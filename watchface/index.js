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

import { WeatherForecastWidget} from './weather_forecast'
import { CalendarWidget} from './calendar'


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

