export const ComboBoxSampleOrder:Object = [
    { 'path': 'combo-box/default', 'component':'Default', 'name': 'Default Functionalities', 'description': 'This example demonstrates the default functionalities of the React combo box component with minimum configuration.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["popupHeight", "index", "change", "placeholder"]}','sourceFiles' : [{ 'displayName': 'default.tsx', 'path':'/nextjs/demos/src/combo-box/default/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/grouping-icon', 'component':'Grouping', 'name': 'Grouping and Icons', 'description': 'This example demonstrates how to group based on the different categories with individual header and icon support using the React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "placeholder", "popupHeight"]}' ,'sourceFiles' : [{ 'displayName': 'grouping-icon.tsx', 'path':'/nextjs/demos/src/combo-box/grouping-icon/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/data-binding', 'component':'Data', 'name': 'Data Binding', 'description': 'This example demonstrates how to bind with local data source and fetch data from remote data service in the React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "query", "sortOrder", "autofill", "popupHeight", "placeholder"]}','sourceFiles' : [{ 'displayName': 'data-binding.tsx', 'path':'/nextjs/demos/src/combo-box/data-binding/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/object-value-binding', 'type': 'new', 'component':'Object', 'name': 'Object Value Binding', 'description': 'This example demonstrates how to bind object value with data source in the React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "query", "sortOrder", "autofill", "popupHeight", "placeholder", "allowObjectBinding"]}','sourceFiles' : [{ 'displayName': 'object-value-binding.tsx', 'path':'/nextjs/demos/src/combo-box/object-value-binding/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/disabled-items', 'type': 'new', 'component':'DisabledItems', 'name': 'Disabled Items', 'description': 'This example demonstrates disabled items in the React combo box component. the disabled items are greyed out and cannot be selected.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "placeholder", "allowFiltering"]}','sourceFiles' : [{ 'displayName': 'disabled-items.tsx', 'path':'/nextjs/demos/src/combo-box/disabled-items/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}] },
    { 'path': 'combo-box/custom-value', 'component':'Custom', 'name': 'Custom Value', 'description': 'This example demonstrates the addition of a new value that is not present in the predefined list of the React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "placeholder", "popupHeight", "allowFiltering", "noRecordsTemplate", "filtering", "width"]}','sourceFiles' : [{ 'displayName': 'custom-value.tsx', 'path':'/nextjs/demos/src/combo-box/custom-value/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/filtering', 'component':'Filtering', 'name': 'Filtering', 'description': 'This example demonstrates how the filtering functionalities works based on the typed characters in the React combo box component..', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "allowFiltering", "filtering", "placeholder", "popupHeight"]}','sourceFiles' : [{ 'displayName': 'filtering.tsx', 'path':'/nextjs/demos/src/combo-box/filtering/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/template', 'component':'Templates', 'name': 'Templates', 'description': 'This example demonstrates how to customize the appearance of each item in the React combo box component pop-up list using the template.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "headerTemplate", "itemTemplate", "placeholder", "popupHeight"]}','sourceFiles' : [{ 'displayName': 'template.tsx', 'path':'/nextjs/demos/src/combo-box/template/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/virtual-scroll', 'component':'Virtualization', 'name': 'Virtualization', 'description': 'This example demonstrates how to utilize the virtual scrolling support of React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "fields", "enableVirtualization", "placeholder", "popupHeight"]}','sourceFiles' : [{ 'displayName': 'virtual-scroll.tsx', 'path':'/nextjs/demos/src/combo-box/virtual-scroll/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/cascading', 'component':'Cascading', 'name': 'Cascading', 'description': 'This example demonstrates how to create a related combo box (Cascading ComboBox) using the React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "allowCustom", "fields", "change", "placeholder", "popupHeight", "value", "enabled"]}','sourceFiles' : [{ 'displayName': 'cascading.tsx', 'path':'/nextjs/demos/src/combo-box/cascading/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]},
    { 'path': 'combo-box/diacritics-filtering', 'component':'DiacriticsFiltering', 'name': 'Diacritics Filtering', 'description': 'This example demonstrates how to achieve the diacritics filter functionalities in the React combo box component.', 'order': '01', 'category': 'ComboBox', 'api': '{"ComboBox": ["dataSource", "ignoreAccent", "placeholder","allowFiltering"]}','sourceFiles' : [{ 'displayName': 'diacritics-filtering.tsx', 'path':'/nextjs/demos/src/combo-box/diacritics-filtering/page.tsx' },{ 'displayName': 'dataSource.json', 'path':'/nextjs/demos/src/combo-box/dataSource.json'}]}
]