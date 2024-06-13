export const SidebarSampleOrder:Object = [
    { 'path': 'sidebar/default', 'component':'Default', 'name': 'Default Functionalities', 'description': 'It demonstrates a simple, mobile-friendly and responsive Sidebar (Navigation drawer, Side Navigation menu) which navigates various parts of an application.','order': '01', 'category': 'Sidebar', 'api': '{ "SidebarComponent": ["type", "position", "showBackdrop", "closeOnDocumentClick", "change", "mediaQuery"]}', 
    'sourceFiles': [{ 'displayName': 'default.tsx', 'path': '/nextjs/demos/src/sidebar/default/page.tsx' }, { 'displayName': 'sidebar-component.css', 'path': '/nextjs/demos/src/sidebar/default/sidebar-component.css' }] },
    { 'path': 'sidebar/docking-sidebar', 'component':'Dock', 'name': 'Dock','description': 'This example demonstrates how the React Sidebar is docked to the main content when it is in closed state','order': '01', 'category': 'Sidebar', 'api': '{ "Sidebar": ["enableDock", "dockSize", "contextTo"]}',
    'sourceFiles': [{ 'displayName': 'docking-sidebar.tsx', 'path': '/nextjs/demos/src/sidebar/docking-sidebar/page.tsx' }, { 'displayName': 'dock.css', 'path': '/nextjs/demos/src/sidebar/docking-sidebar/dock.css' }] },
    { 'path': 'sidebar/api', 'component':'API', 'name': 'API', 'description': 'It demonstrates how to change the behavior and appearance of sidebar in application through user friendly API’s like types, position, auto close and backdrop', 'order': '01', 'category': 'Sidebar', 'api': '{ "Sidebar": ["showBackdrop", "position", "types", "closeOnDocumentClick"] }',
    'sourceFiles': [{ 'displayName': 'api.tsx', 'path': '/nextjs/demos/src/sidebar/api/page.tsx' }, { 'displayName': 'api.css', 'path': '/nextjs/demos/src/sidebar/api/api.css' }]},
    { 'path': 'sidebar/sidebar-menu', 'component':'SidebarWithMenu', 'name': 'Sidebar Menu','description': 'This example demonstrates how to render Menu for navigation purpose inside the React Sidebar of an application.', 'order': '01', 'category': 'Sidebar', 'api': '{ "Sidebar": ["width", "target","mediaQuery","dockSize","enableDock"] }',
    'sourceFiles': [{ 'displayName': 'sidebar-menu.tsx', 'path': '/nextjs/demos/src/sidebar/sidebar-menu/page.tsx' }, { 'displayName': 'sidebar-menu.css', 'path': '/nextjs/demos/src/sidebar/sidebar-menu/sidebar-menu.css' }]},
    { 'path': 'sidebar/responsive-panel', 'component':'ResponsivePanel', 'name': 'Responsive Panel','description': 'This example demonstrates how to render responsive TreeView for navigation purpose inside the React Sidebar', 'order': '01', 'category': 'Sidebar', 'api': '{ "Sidebar": ["width", "target","mediaQuery"] }',
    'sourceFiles': [{ 'displayName': 'responsive-panel.tsx', 'path': '/nextjs/demos/src/sidebar/responsive-panel/page.tsx' }, { 'displayName': 'responsive-panel.css', 'path': '/nextjs/demos/src/sidebar/responsive-panel/responsive-panel.css' }]},
    { 'path': 'sidebar/sidebar-list', 'component':'SidebarWithList', 'name': 'Sidebar With ListView','description': 'This example demonstrates how the React Sidebar is integrated with a ListView to display a list of menu items', 'order': '01', 'category': 'Sidebar', 'api': '{ "Sidebar": ["open", "close"] }',
    'sourceFiles': [{ 'displayName': 'sidebar-list.tsx', 'path': '/nextjs/demos/src/sidebar/sidebar-list/page.tsx' }, { 'displayName': 'sidebar-list.css', 'path': '/nextjs/demos/src/sidebar/sidebar-list/sidebar-list.css' }]}
]