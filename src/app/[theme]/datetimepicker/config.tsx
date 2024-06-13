export const DateTimeOrder: Object = [
    {
        'path': 'datetimepicker/default', 'component': 'Default', 'name': 'Default Functionalities', 'description': 'This example demonstrates a simple, mobile-friendly and responsive React DateTimePicker to select both a date and time', 'order': '01', 'category': 'DateTimePicker', 'api': '{"DateTimePickerComponent": []}',
        'sourceFiles': [
            { 'displayName': 'default.tsx', 'path': '/nextjs/demos/src/datetimepicker/default/page.tsx' },
            { 'displayName': 'default-style.css', 'path': '/nextjs/demos/src/datetimepicker/default-style.css' }
        ]
    },
    {
        'path': 'datetimepicker/date-time-range', 'component': 'Range', 'name': 'DateTime Range', 'description': 'This example demonstrates how to disables the specific range of dates and times (min and max) in a React DateTimePicker', 'order': '01', 'category': 'DateTimePicker', 'api': '{"DatePicker": [ "min", "max", "value" ]}',
        'sourceFiles': [
            { 'displayName': 'date-time-range.tsx', 'path': '/nextjs/demos/src/datetimepicker/date-time-range/page.tsx' },
            { 'displayName': 'range-style.css', 'path': '/nextjs/demos/src/datetimepicker/date-time-range/range-style.css' }
        ]
    },
    {
        'path': 'datetimepicker/date-time-format', 'component': 'Dateformat', 'name': 'Format', 'description': 'This example demonstrates how to change the date and time format in the input field based on the format in a React DateTimePicker', 'order': '01', 'category': 'DateTimePicker', 'api': '{"DateTimePicker": [ "format", "value"]}',
        'sourceFiles': [
            { 'displayName': 'date-time-format.tsx', 'path': '/nextjs/demos/src/datetimepicker/date-time-format/page.tsx' },
            { 'displayName': 'format-style.css', 'path': '/nextjs/demos/src/datetimepicker/date-time-format/format-style.css' }
        ]
    },
    {
        'path': 'datetimepicker/disabled', 'component': 'Disabled', 'name': 'Disabled Dates', 'description': 'Customizable DateTimePicker widget for React with disabled dates and times that restrict selection for specific date and time durations', 'order': '01', 'category': 'DateTimePicker', 'api':'{"DateTimePicker": ["renderDayCell" ]}',
        'sourceFiles': [
            { 'displayName': 'disabled.tsx', 'path': '/nextjs/demos/src/datetimepicker/disabled/page.tsx' },
            { 'displayName': 'disabled-style.css', 'path': '/nextjs/demos/src/datetimepicker/disabled/disabled-style.css' }
        ]
    },
    {
        'path': 'datetimepicker/special-dates', 'component': 'Special', 'name': 'Special Dates', 'description': 'This example demonstrates how to highlight the specific dates and times like weekends, holidays and special dates in a React DateTimePicker', 'order': '01', 'category': 'DateTimePicker', 'api': '{"DateTimePicker": [ "renderDayCell", "value"]}',
        'sourceFiles': [
            { 'displayName': 'special-dates.tsx', 'path': '/nextjs/demos/src/datetimepicker/special-dates/page.tsx' },
            { 'displayName': 'special-style.css', 'path': '/nextjs/demos/src/datetimepicker/special-dates/special-style.css' }
        ]
    },
    {
        'path': 'datetimepicker/input-mask', 'component': 'MaskSupport', 'name': 'Mask Support', 'description': 'This example demonstrates a simple, mobile-friendly and responsive React DateTimePicker to select a date with mask support.', 'order': '01', 'category': 'DateTimePicker', 'api': '{"DateTimePickerComponent": ["enableMask"]}',
        'sourceFiles': [
            { 'displayName': 'input-mask.tsx', 'path': '/nextjs/demos/src/datetimepicker/input-mask/page.tsx' },
            { 'displayName': 'default-style.css', 'path': '/nextjs/demos/src/datetimepicker/default-style.css' }
        ]
    }
]
