export const TimePickerSampleOrder: Object = [
    {
        'path': 'timepicker/default', 'component': 'Default', 'name': 'Default Functionalities', 'description': 'This example demonstrates a simple, mobile-friendly and responsive React TimePicker to select a time.', 'order': '01', 'category': 'TimePicker', 'api': '{"TimePickerComponent": [ "placeholder" ]}',
        'sourceFiles': [
            { 'displayName': 'default.tsx', 'path': '/nextjs/demos/src/timepicker/default/page.tsx' },
            { 'displayName': 'default-style.css', 'path': '/nextjs/demos/src/timepicker/default-style.css' }
        ]
    },
    {
        'path': 'timepicker/time-range', 'component': 'Range', 'name': 'Time Range', 'description': 'This example demonstrates how to disable the specific range of times(min and max) in a React TimePicker.', 'order': '01', 'category': 'TimePicker', 'api': '{"TimePicker": [ "placeholder", "value", "readonly", "enabled", "min", "change" ]}',
        'sourceFiles': [
            { 'displayName': 'time-range.tsx', 'path': '/nextjs/demos/src/timepicker/time-range/page.tsx' },
            { 'displayName': 'range-style.css', 'path': '/nextjs/demos/src/timepicker/time-range/range-style.css' }
        ]
    },
    {
        'path': 'timepicker/time-format', 'component': 'Format', 'name': 'Format', 'description': 'This example demonstrates how to change the time format in the input field based on the format in a React TimePicker', 'order': '01', 'category': 'TimePicker', 'api': '{"TimePicker": [ "value", "step", "format" ]}',
        'sourceFiles': [
            { 'displayName': 'time-format.tsx', 'path': '/nextjs/demos/src/timepicker/time-format/page.tsx' },
            { 'displayName': 'format-style.css', 'path': '/nextjs/demos/src/timepicker/time-format/format-style.css' }
        ]
    },
    {
        'path': 'timepicker/list-formatting', 'component': 'Formatting', 'name': 'Time Duration', 'description': 'This example demonstrates how to disable specific times like past time, current time in a React TimePicker', 'order': '01', 'category': 'TimePicker', 'api': '{"TimePicker": [ "value", "itemRender" ]}',
        'sourceFiles': [
            { 'displayName': 'list-formatting.tsx', 'path': '/nextjs/demos/src/timepicker/list-formatting/page.tsx' },
            { 'displayName': 'list-style.css', 'path': '/nextjs/demos/src/timepicker/list-formatting/list-style.css' }
        ]
    },
    {
        'path': 'timepicker/input-mask', 'component': 'MaskSupport', 'name': 'Mask Support', 'description': 'This example demonstrates a simple, mobile-friendly and responsive React TimePicker to select a date with mask support.', 'order': '01', 'category': 'TimePicker', 'api': '{"TimePicker": ["enableMask"]}',
        'sourceFiles': [
            { 'displayName': 'input-mask.tsx', 'path': '/nextjs/demos/src/timepicker/input-mask/page.tsx' },
            { 'displayName': 'default-style.css', 'path': '/nextjs/demos/src/timepicker/default-style.css' }
        ]
    }
]