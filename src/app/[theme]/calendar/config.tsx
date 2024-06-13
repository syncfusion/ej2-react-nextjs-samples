export const CalendarSampleOrder: Object = [
    {
        'path': 'calendar/default', 'component': 'Default', 'name': 'Default Functionalities', 'description': 'A simple calendar component for React to select dates easily by switching between month, year, and decade views with a rich user interface', 'order': '01', 'category': 'Calendar', 'api': '{"CalendarComponent": [ "change"]}',
        'sourceFiles': [
            { 'displayName': 'default.tsx', 'path': '/nextjs/demos/src/calendar/default/page.tsx' },
            { 'displayName': 'default-style.css', 'path': '/nextjs/demos/src/calendar/default/default-style.css' }
        ]
    },
    {
        'path': 'calendar/date-range', 'component': 'Range', 'name': 'Date Range', 'description': 'This example demonstrates how to disables the specific range of dates (min and max) in a React Calendar.', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "min", "max", "change" ]}',
        'sourceFiles': [
            { 'displayName': 'dete-range.tsx', 'path': '/nextjs/demos/src/calendar/date-range/page.tsx' },
            { 'displayName': 'daterange-style.css', 'path': '/nextjs/demos/src/calendar/date-range/daterange-style.css' }
        ]
    },
    {
        'path': 'calendar/disabled', 'component': 'Disabled', 'name': 'Disabled Dates', 'description': 'This example demonstrates how to disable the dates like weekends, weekdays and specific dates (past dates, future dates and current dates) in a react Calendar', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "renderDayCell", "change" ]}',
        'sourceFiles': [
            { 'displayName': 'disabled.tsx', 'path': '/nextjs/demos/src/calendar/disabled/page.tsx' },
            { 'displayName': 'disabled-style.css', 'path': '/nextjs/demos/src/calendar/disabled/disabled-style.css' }
        ]
    },
    {
        'path': 'calendar/special-dates', 'component': 'Special', 'name': 'Special Dates', 'description': 'This example demonstrates how to highlight the specific dates like weekends, holidays and special dates in a React Calendar', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "renderDayCell", "change" ]}',
        'sourceFiles': [
            { 'displayName': 'special-dates.tsx', 'path': '/nextjs/demos/src/calendar/special-dates/page.tsx' },
            { 'displayName': 'special-styles.css', 'path': '/nextjs/demos/src/calendar/special-dates/special-styles.css' }
        ]
    },
    {
        'path': 'calendar/multi-selection', 'component': 'MultipleSelection', 'name': 'Multiple Selection', 'description': 'This example demonstrates how to select the multiple dates (more than one date) in a React Calendar.', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "isMultiSelection", "values", "change" ]}',
        'sourceFiles': [
            { 'displayName': 'multi-selection.tsx', 'path': '/nextjs/demos/src/calendar/multi-selection/page.tsx' },
            { 'displayName': 'multi-style.css', 'path': '/nextjs/demos/src/calendar/multi-selection/multi-style.css' }
        ]
    },
    {
        'path': 'calendar/month-picker', 'component': 'MonthPicker', 'name': 'Month Picker', 'description': 'The React Calendar component can act as a month and year picker. It helps you to select a month or year quickly with all month related properties.', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "start", "depth", "change" ]}',
        'sourceFiles': [
            { 'displayName': 'month-picker.tsx', 'path': '/nextjs/demos/src/calendar/month-picker/page.tsx' },
            { 'displayName': 'monthpicker-style.css', 'path': '/nextjs/demos/src/calendar/month-picker/monthpicker-style.css' }
        ]
    },
    {
        'path': 'calendar/islamic-calendar', 'component': 'IslamicCalendar', 'name': 'Islamic Calendar', 'description': 'This example demonstrates how to render a React hijri calendar with default functionalities such as min, max date restriction, disabled dates, highlight dates', 'order': '01', 'category': 'Calendar', 'api': '{"Calendar": [ "values", "change", "renderDayCell" ]}',
        'sourceFiles': [
            { 'displayName': 'islamic-calendar.tsx', 'path': '/nextjs/demos/src/calendar/islamic-calendar/page.tsx' },
            { 'displayName': 'islamic-calendar.css', 'path': '/nextjs/demos/src/calendar/islamic-calendar/islamic-calendar.css' }
        ]
    }
]