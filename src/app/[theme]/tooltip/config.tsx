export const TooltipSampleOrder: Object = [{
    'path': 'tooltip/default',
    'component': 'Default',
    'name': 'Default Functionalities',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Default rendering of the Essential JS 2 Tooltip control, which will open when hovering or tapping and holding, and can be displayed in 12 different positions.',
    'api': '{"TooltipComponent": ["content", "appendTo", "position"]}'
},
{
    'path': 'tooltip/template',
    'component': 'TemplateTooltip',
    'name': 'Template',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Demo of the Essential JS 2 Tooltip control template functionality, which allows HTML content to be rendered in tooltips.',
    'api': '{"TooltipComponent": ["content", "target", "beforeRender", "showTipPointer", "offsetX", "width", "appendTo"]}',
    'sourceFiles': [{ 'displayName': 'template.tsx', 'path': '/nextjs/demos/src/tooltip/template/page.tsx' },{ 'displayName': 'tooltip-sample.css', 'path': '/nextjs/demos/src/tooltip/tooltip-sample.css' }]
},
{
    'path': 'tooltip/ajaxcontent',
    'component': 'AjaxContentTooltip',
    'name': 'Ajax Content',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Demo of the Essential JS 2 Tooltip control loading dynamic content in tooltips through Ajax from JSON files.',
    'api': '{"TooltipComponent": ["content", "target", "beforeRender", "position", "dataBind", "appendTo"]}',
    'sourceFiles': [{ 'displayName': 'ajaxcontent.tsx', 'path': '/nextjs/demos/src/tooltip/ajaxcontent/page.tsx' },{ 'displayName': 'tooltip-sample.css', 'path': '/nextjs/demos/src/tooltip/tooltip-sample.css' },{ 'displayName': 'tooltipdata.json', 'path': '/nextjs/demos/src/tooltip/ajaxcontent/tooltipdata.json' }]
},
{
    'path': 'tooltip/smartposition',
    'component': 'DraggableTooltip',
    'name': 'Smart Positioning',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Demo of the Essential JS 2 Tooltip control smart (flexible) positioning based on the view port dimensions.',
    'api': '{"TooltipComponent": ["content", "target", "animation", "open", "offsetX", "close", "refresh", "appendTo"]}'
},
{
    'path': 'tooltip/tooltip-menu',
    'component': 'TooltipMenu',
    'name': 'Tooltip Menu',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Demo of Essential JS 2 Tooltip control customization to look like a menu using toolbar and listview controls.',
    'api': '{"TooltipComponent": ["content", "target", "open",  "close", "refresh"]}',
    'sourceFiles': [{ 'displayName': 'tooltip-menu.tsx', 'path': '/nextjs/demos/src/tooltip/tooltip-menu/page.tsx' },{ 'displayName': 'tooltip-menu.css', 'path': '/nextjs/demos/src/tooltip/tooltip-menu/tooltip-menu.css' }]
},
{
    'path': 'tooltip/html-content',
    'component': 'HtmlContentTooltip',
    'name': 'HTML Content',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Demo of Essential JS 2 Tooltip control customization as an HTML page using HTML tags to display a template content.',
    'api': '{"TooltipComponent": ["content", "target", "open",  "close", "refresh"]}',
    'sourceFiles': [{ 'displayName': 'html-content.tsx', 'path': '/nextjs/demos/src/tooltip/html-content/page.tsx' },{ 'displayName': 'html-content.css', 'path': '/nextjs/demos/src/tooltip/html-content/html-content.css' }]
},
{
    'path': 'tooltip/api',
    'component': 'ApiTooltip',
    'name': 'API',
    'order': '04',
    'category': 'Tooltip',
    'description': 'Essential JS 2 Tooltip control demo showcasing the most frequently used API combinations, like content, height, width, open, sticky mode, and more.',
    'api': '{"TooltipComponent": ["content", "target", "open",  "close", "refresh", "width", "height", "opensOn"]}',
    'sourceFiles': [{ 'displayName': 'api.tsx', 'path': '/nextjs/demos/src/tooltip/api/page.tsx' },{ 'displayName': 'api.css', 'path': '/nextjs/demos/src/tooltip/api/api.css' }]
}
]