export const DashboardLayoutSampleOrder:Object = [
    { 'path': 'dashboard-layout/default', 'component':'Default', 'name': 'Default Functionalities', 'description':'This example explains the default functionalities of the JavaScript Dashboard Layout with draggable and resizable panels', 'order': '01', 'category': 'Dashboard Layout', 
    'sourceFiles': [
        { 'displayName': 'default.tsx', 'path': '/nextjs/demos/src/dashboard-layout/default/page.tsx' },
        { 'displayName': 'default.css', 'path': '/nextjs/demos/src/dashboard-layout/default/default.component.css' }
    ] },
    { 'path': 'dashboard-layout/predefined-layouts', 'component':'PredefinedLayouts', 'name': 'Predefined Layouts', 'description':'This sample demonstrates how to change the initially defined panels structure with a set of predefined panel templates dynamically', 'order': '01', 'category': 'Dashboard Layout',
    'sourceFiles':[
        { 'displayName': 'predefined-layouts.tsx', 'path': '/nextjs/demos/src/dashboard-layout/predefined-layouts/page.tsx' },
        { 'displayName': 'predefined-layouts.css', 'path': '/nextjs/demos/src/dashboard-layout/predefined-layouts/predefined-layouts.component.css' },
        { 'displayName': 'panel-data.ts', 'path': '/nextjs/demos/src/dashboard-layout/predefined-layouts/panel-data.ts' }
    ] },
    { 'path': 'dashboard-layout/properties', 'component':'Properties', 'name': 'API', 'description':'This sample demonstrates the most frequently used API combinations and dynamic addition and removal of panels within the layout.', 'order': '01', 'category': 'Dashboard Layout',
    'sourceFiles': [
        { 'displayName': 'properties.tsx', 'path': '/nextjs/demos/src/dashboard-layout/properties/page.tsx' },
        { 'displayName': 'properties.css', 'path': '/nextjs/demos/src/dashboard-layout/properties/properties.component.css' }
    ] },
    { 'path': 'dashboard-layout/dynamic', 'component':'DynamicWidget', 'name': 'Editable Dashboard', 'description':'This sample demonstrates how to add the data visualization components such as pie, column and spline chart in panels dynamically within the layout.', 'order': '01', 'category': 'Dashboard Layout',
    'sourceFiles': [
        { 'displayName': 'dynamic.tsx', 'path': '/nextjs/demos/src/dashboard-layout/dynamic/page.tsx' },
        { 'displayName': 'dynamic.css', 'path': '/nextjs/demos/src/dashboard-layout/dynamic/dynamic.css' }
    ] },
    { 'path': 'dashboard-layout/analytics-dashboard', 'component':'SEODashboard', 'name': 'SEO Analytics Dashboard', 'description':'This sample explains about constructing a real time dashboar.d for SEO analysis using data visualizing components like maps, charts, cards etc', 'order': '02', 'category': 'Use Case',
    'sourceFiles': [
        { 'displayName': 'analytics.tsx', 'path': '/nextjs/demos/src/dashboard-layout/analytics-dashboard/page.tsx' },
        { 'displayName': 'analytics.css', 'path': '/nextjs/demos/src/dashboard-layout/analytics-dashboard/analytics.css' },
        { 'displayName': 'default-datasource.json', 'path': '/nextjs/demos/src/dashboard-layout/analytics-dashboard/default-datasource.json' },
        { 'displayName': 'world-map.json', 'path': '/nextjs/demos/src/dashboard-layout/analytics-dashboard/world-map.json' }
    ] }
]