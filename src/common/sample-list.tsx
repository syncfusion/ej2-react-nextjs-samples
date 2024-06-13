import { ButtonSampleOrder } from '@/app/[theme]/button/config';
import { TooltipSampleOrder } from '@/app/[theme]/tooltip/config';
import { TextBoxSampleOrder } from '@/app/[theme]/textboxes/config';
import { TextAreaSampleOrder } from '@/app/[theme]/textarea/config';
import { ComboBoxSampleOrder } from '@/app/[theme]/combo-box/config';
import { AutoCompleteSampleOrder } from '@/app/[theme]/auto-complete/config';
import { DropDownListSampleOrder } from '@/app/[theme]/drop-down-list/config';
import { DropDownTreeSampleOrder } from '@/app/[theme]/drop-down-tree/config';
import { ListViewSampleOrder } from '@/app/[theme]/listview/config';
import { ToolbarSampleOrder } from '@/app/[theme]/toolbar/config';
import { AccordionSampleOrder } from '@/app/[theme]/accordion/config';
import { ScheduleSampleOrder } from '@/app/[theme]/schedule/config';
import { KanbanSampleOrder } from '@/app/[theme]/kanban/config';
import { CardSampleOrder } from '@/app/[theme]/card/config';
import { AvatarSampleOrder } from '@/app/[theme]/avatar/config';
import { SplitterSampleOrder } from '@/app/[theme]/splitter/config';
import { BadgeSampleOrder } from '@/app/[theme]/badge/config';
import { ToastSampleOrder } from '@/app/[theme]/toast/config';
import { MessageSampleOrder } from '@/app/[theme]/message/config';
import { TreeViewSampleOrder } from '@/app/[theme]/treeview/config';
import { ChartSampleOrder } from '@/app/[theme]/chart/config';
import { DiagramSampleOrder } from '@/app/[theme]/diagram/config';
import { DialogSampleOrder } from '@/app/[theme]/dialog/config';
import { PredefinedDialogSampleOrder } from '@/app/[theme]/predefined-dialogs/config';
import { GridSampleOrder } from '@/app/[theme]/grid/config';
import { NumericTextBoxOrder } from '@/app/[theme]/numerictextbox/config';
import { CalendarSampleOrder } from '@/app/[theme]/calendar/config';
import { DatePickerSampleOrder } from '@/app/[theme]/datepicker/config';
import { DateTimeOrder } from '@/app/[theme]/datetimepicker/config';
import { DateRangePickerSampleOrder } from '@/app/[theme]/daterangepicker/config';
import { CircularGaugeSampleOrder } from '@/app/[theme]/circular-gauge/config';
import { ArcGaugeSampleOrder } from '@/app/[theme]/arc-gauge/config';
import { ContextMenuSampleOrder } from '@/app/[theme]/context-menu/config';
import { MenuSampleOrder } from '@/app/[theme]/menu/config';
import { LinearGaugeSampleOrder } from '@/app/[theme]/linear-gauge/config';
import { TimePickerSampleOrder } from '@/app/[theme]/timepicker/config';
import { MaskedTextBoxOrder } from '@/app/[theme]/maskedtextbox/config';
import { MultiSelectSampleOrder } from '@/app/[theme]/multi-select/config';
import { TabSampleOrder } from '@/app/[theme]/tab/config';
import { SliderSampleOrder } from '@/app/[theme]/range-slider/config';
import { SidebarSampleOrder } from '@/app/[theme]/sidebar/config';
import { UploaderSampleOrder } from '@/app/[theme]/uploader/config';
import { MapSampleOrder } from '@/app/[theme]/maps/config';
import { RangeNavigatorSampleOrder } from '@/app/[theme]/range-navigator/config';
import { SparklineOrder } from '@/app/[theme]/sparkline/config';
import { SmithChartOrder } from '@/app/[theme]/smith-chart/config';
import { TreemapOrder } from '@/app/[theme]/treemap/config';
import { ColorPickerSampleOrder } from '@/app/[theme]/color-picker/config';
import { HeatmapSampleOrder } from '@/app/[theme]/heatmap-chart/config';
import { DocumentEditorSampleOrder } from '@/app/[theme]/document-editor/config';
import { RichTextEditorSampleOrder } from '@/app/[theme]/rich-text-editor/config';
import { InPlaceEditorSampleOrder } from '@/app/[theme]/inplace-editor/config';
import { PivotViewSampleOrder } from '@/app/[theme]/pivot-table/config';
import { ChipsSampleOrder } from '@/app/[theme]/chips/config';
import { StockChartSampleOrder } from '@/app/[theme]/stock-chart/config';
import { BulletChartSampleOrder } from '@/app/[theme]/bullet-chart/config';
import { ProgressBarSampleOrder } from '@/app/[theme]/progress-bar/config';
import { TreeGridSampleOrder } from '@/app/[theme]/treegrid/config';
import { PdfViewerSampleOrder } from '@/app/[theme]/pdfviewer/config';
import { QueryBuilderSampleOrder } from '@/app/[theme]/query-builder/config';
import { DashboardLayoutSampleOrder } from '@/app/[theme]/dashboard-layout/config';
import { FileManagerSampleOrder } from '@/app/[theme]/file-manager/config';
import { GanttSampleOrder } from '@/app/[theme]/gantt/config';
import { SpreadsheetSampleOrder } from '@/app/[theme]/spreadsheet/config';
import { ListBoxSampleOrder } from '@/app/[theme]/list-box/config';
import { BreadcrumbSampleOrder } from '@/app/[theme]/breadcrumb/config';
import { CarouselSampleOrder } from '@/app/[theme]/carousel/config';
import { AppBarSampleOrder } from '@/app/[theme]/appbar/config';
import { SignatureSampleOrder } from '@/app/[theme]/signature/config';
import { ImageEditorSampleOrder } from '@/app/[theme]/image-editor/config';
import { FloatingActionButtonSampleOrder } from "@/app/[theme]/floating-action-button/config";
import { SpeedDialSampleOrder } from "@/app/[theme]/speed-dial/config";
import { MentionSampleOrder } from '@/app/[theme]/mention/config';
import { SkeletonSampleOrder} from '@/app/[theme]/skeleton/config';
import { RatingSampleOrder } from '@/app/[theme]/rating/config';
import { RibbonSampleOrder } from '@/app/[theme]/ribbon/config';
import { StepperSampleOrder } from '@/app/[theme]/stepper/config';
import { ThreeDimensionChartList } from '@/app/[theme]/three-dimension-chart/config';
import { Circular3DOrderList } from '@/app/[theme]/three-dimension-circular-chart/config';
import { TimelineSampleOrder } from '@/app/[theme]/timeline/config';
import { OTPSampleOrder } from '@/app/[theme]/otp-input/config';
import { MultiColumnComboboxSampleOrder } from '@/app/[theme]/multicolumn-combobox/config';

export let samplesList: any = [
    {
        'name': 'Data Grid', 'type':'update', 'category': 'Grids', 'order': '03', 'path': 'grid', 'samples': GridSampleOrder
    },
    {
        'name': 'Pivot Table', 'category': 'Grids', 'order': '03', 'path': 'pivot-table', 'samples': PivotViewSampleOrder
    },
    {
        'name': 'Tree Grid', 'type':'update', 'category': 'Grids', 'order': '03', 'path': 'treegrid', 'samples': TreeGridSampleOrder, 'ftName' :'treegrid'
    },
    {
        'name': 'Spreadsheet', 'type':'update', 'category': 'Grids', 'order': '03', 'path': 'spreadsheet', 'samples': SpreadsheetSampleOrder
    },
    {
        'name': 'Charts', 'type':'update', 'category': 'Data Visualization', 'order': '01', 'path': 'chart', 'samples': ChartSampleOrder, 'ftName': 'chart'
    },
    {
        'name': '3D Chart', 'category': 'Data Visualization', 'order': '03', 'path': 'three-dimension-chart', 'samples': ThreeDimensionChartList,
    },
    {
        'name': '3D Circular Chart', 'category': 'Data Visualization', 'order': '03', 'path': 'three-dimension-circular-chart', 'samples': Circular3DOrderList,
    },
    {
        'name': 'Stock Chart', 'category': 'Data Visualization', 'order': '02', 'path': 'stock-chart', 'samples': StockChartSampleOrder
    },
    {
        'name': 'Arc Gauge', 'category': 'Data Visualization', 'order': '04', 'path': 'arc-gauge', 'samples': ArcGaugeSampleOrder, 
    },
    {
        'name': 'Circular Gauge', 'category': 'Data Visualization', 'order': '03', 'path': 'circular-gauge', 'samples': CircularGaugeSampleOrder, 'ftName' :'circulargauge'
    },
    {
        'name': 'Diagram', 'category': 'Data Visualization', 'order': '02', 'path': 'diagram', 'samples': DiagramSampleOrder
    },
    {
        'name': 'HeatMap Chart', 'category': 'Data Visualization', 'order': '06', 'path': 'heatmap-chart', 'samples': HeatmapSampleOrder, 'ftName' :'heatmap-chart'
    },
    {
        'name': 'Linear Gauge', 'category': 'Data Visualization', 'order': '04', 'path': 'linear-gauge', 'samples': LinearGaugeSampleOrder, 'ftName' :'lineargauge'
    },
    {
        'name': 'Maps', 'category': 'Data Visualization', 'order': '07', 'path': 'maps', 'samples': MapSampleOrder, 'ftName' :'maps'
    },
    {
        'name': 'Range Selector', 'category': 'Data Visualization', 'order': '08', 'path': 'range-navigator', 'samples': RangeNavigatorSampleOrder, 'ftName': 'rangenavigator'
    },
    {
        'name': 'Smith Chart', 'category': 'Data Visualization', 'order': '09', 'path': 'smith-chart', 'samples': SmithChartOrder, 'ftName' :'smithchart'
    },
    {
        'name': 'Sparkline Charts', 'category': 'Data Visualization', 'order': '10', 'path': 'sparkline', 'samples': SparklineOrder, 'ftName' :'sparkline'
    },
    {
        'name': 'TreeMap', 'category': 'Data Visualization', 'order': '11', 'path': 'treemap', 'samples': TreemapOrder, 'ftName' :'treemap'
    },
    {
        'name': 'Bullet Chart', 'category': 'Data Visualization', 'order': '08', 'path': 'bullet-chart', 'samples': BulletChartSampleOrder,
    },
    {
        'name': 'Kanban', 'category': 'Data Visualization', 'order': '08', 'path': 'kanban', 'samples': KanbanSampleOrder, 'ftName': 'kanban'
    },
    {
        'name': 'Query Builder', 'type':'update', 'category': 'Forms', 'path': 'query-builder', 'samples': QueryBuilderSampleOrder      
    },
    {
        'name': 'PDF Viewer', 'type':'update', 'category': 'File Viewers & Editors', 'order': '01', 'path': 'pdfviewer', 'samples': PdfViewerSampleOrder, 'ftName': 'pdfviewer'
    },
    {
        'name': 'RichTextEditor', 'category': 'File Viewers & Editors', 'order': '04', 'path': 'rich-text-editor', 'samples': RichTextEditorSampleOrder, 'type': 'update'
    },
    {
        'name': 'Document Editor', 'type':'update', 'category': 'File Viewers & Editors', 'order': '04', 'path': 'document-editor', 'samples': DocumentEditorSampleOrder
    },
    {
        'name': 'Image Editor', 'category': 'File Viewers & Editors', 'ftName': 'image-editor', 'order': '04', 'path': 'image-editor', 'type': 'update', 'samples': ImageEditorSampleOrder
    },
    {
        'name': 'Scheduler', 'category': 'Calendars', 'order': '02', 'path': 'schedule', 'samples': ScheduleSampleOrder, 'ftName': 'scheduler'
    },
    {
        'name': 'Calendar', 'category': 'Calendars', 'order': '04', 'path': 'calendar', 'samples': CalendarSampleOrder
    },
    {
        'name': 'DatePicker', 'category': 'Calendars', 'order': '04', 'path': 'datepicker', 'samples': DatePickerSampleOrder
    },
    {
        'name': 'DateRangePicker', 'category': 'Calendars', 'order': '04', 'path': 'daterangepicker', 'samples': DateRangePickerSampleOrder
    },
    {
        'name': 'DateTimePicker', 'category': 'Calendars', 'order': '04', 'path': 'datetimepicker', 'samples': DateTimeOrder
    },
    {
        'name': 'TimePicker', 'category': 'Calendars', 'order': '04', 'path': 'timepicker', 'samples': TimePickerSampleOrder
    },
    {
        'name': 'Gantt Chart', 'type':'update', 'category': 'Calendars', 'order': '02', 'path': 'gantt', 'samples': GanttSampleOrder
    },
    {
        'name': 'Button', 'category': 'Buttons', 'order': '04', 'path': 'button', 'samples': ButtonSampleOrder
    },
    {
        'name': 'Chips', 'category': 'Buttons', 'order': '04', 'path': 'chips', 'samples': ChipsSampleOrder
    },
    {
        'name': 'Floating Action Button', 'category': 'Buttons', 'order': '04', 'path': 'floating-action-button', 'samples': FloatingActionButtonSampleOrder
    },
    {
        'name': 'SpeedDial', 'category': 'Buttons', 'order': '04', 'path': 'speed-dial', 'samples': SpeedDialSampleOrder
    },
    {
        'name': 'AutoComplete', 'category': 'Dropdowns', 'order': '04', 'type':'update', 'path': 'auto-complete', 'samples': AutoCompleteSampleOrder
    },
    {
        'name': 'ComboBox', 'category': 'Dropdowns', 'order': '04', 'type':'update', 'path': 'combo-box', 'samples': ComboBoxSampleOrder
    },
    {
        'name': 'Dropdown List', 'category': 'Dropdowns', 'order': '04', 'type':'update', 'path': 'drop-down-list', 'samples': DropDownListSampleOrder
    },
    {
        'name': 'Dropdown Tree', 'category': 'Dropdowns', 'order': '04', 'path': 'drop-down-tree', 'samples': DropDownTreeSampleOrder
    },
    {
        'name': 'MultiSelect Dropdown', 'category': 'Dropdowns', 'order': '04', 'type': 'update', 'path': 'multi-select', 'samples': MultiSelectSampleOrder
    },
    {
        'name': 'List Box', 'category': 'Dropdowns', 'ftName': 'list-box', 'order': '04', 'path': 'list-box', 'samples': ListBoxSampleOrder
    },
    {
        'name': 'MultiColumn ComboBox', 'category': 'Dropdowns', 'ftName': 'multicolumn-combobox', 'order': '04', 'path': 'multicolumn-combobox', 'samples': MultiColumnComboboxSampleOrder, 'type' : 'preview'
    },
    {
        'name': 'Mention', 'category': 'Dropdowns', 'path': 'mention', 'order': '03', 'samples': MentionSampleOrder
    },
    {
        'name': 'Accordion', 'category': 'Navigation', 'path': 'accordion', 'samples': AccordionSampleOrder
    },
    {
        'name': 'AppBar', 'category': 'Navigation', 'path': 'appbar', 'samples': AppBarSampleOrder, 'ftName': 'appbar'
    },
    {
        'name': 'Breadcrumb', 'category': 'Navigation', 'path': 'breadcrumb', 'samples': BreadcrumbSampleOrder
    },
    {
        'name': 'Carousel', 'category': 'Navigation', 'path': 'carousel', 'samples': CarouselSampleOrder
    },
    {
        'name': 'Context Menu', 'category': 'Navigation', 'path': 'context-menu', 'samples': ContextMenuSampleOrder, 'ftName': 'context-menu'
    },
    {
        'name': 'Menu Bar', 'category': 'Navigation', 'path': 'menu', 'samples': MenuSampleOrder, 'ftName': 'menu-bar'
    },
    {
        'name': 'Sidebar', 'category': 'Navigation', 'path': 'sidebar', 'samples': SidebarSampleOrder
    },
    {
        'name': 'Tabs', 'category': 'Navigation', 'path': 'tab', 'samples': TabSampleOrder
    },
    {
        'name': 'Toolbar', 'category': 'Navigation', 'path': 'toolbar', 'samples': ToolbarSampleOrder
    },
    {
        'name': 'TreeView', 'category': 'Navigation', 'path': 'treeview', 'samples': TreeViewSampleOrder
    },
    {
        'name': 'File Manager', 'category': 'Navigation', 'type':'update', 'path':'file-manager', 'samples': FileManagerSampleOrder, 'ftName': 'file-manager'
    },
    {
        'name': 'Ribbon', 'category': 'Navigation', 'path':'ribbon', 'samples': RibbonSampleOrder, 'ftName': 'ribbon'
    },
    {
        'name': 'Stepper', 'category': 'Navigation', 'path': 'stepper', 'samples': StepperSampleOrder, 'ftName': 'stepper'
    },
    {
        'name': 'Badge', 'category': 'Notifications', 'order': '02', 'path': 'badge', 'samples': BadgeSampleOrder
    },
    {
        'name': 'Message', 'category': 'Notifications', 'order': '01', 'path': 'message', 'samples': MessageSampleOrder
    },
    {
        'name': 'Toast', 'category': 'Notifications', 'order': '03', 'path': 'toast', 'samples': ToastSampleOrder
    },
    {
        'name': 'Progress Bar', 'category': 'Notifications', 'order': '04', 'path': 'progress-bar', 'samples': ProgressBarSampleOrder
    },
    {
        'name': "Skeleton", 'category': 'Notifications' , 'order': '04', 'path': "skeleton", 'samples': SkeletonSampleOrder
    },
    {
        'name': 'TextBox', 'category': 'Inputs', 'order': '04', 'path': 'textboxes', 'samples': TextBoxSampleOrder, 'ftName' :'textbox'
    },
    {
        'name': 'TextArea', 'category': 'Inputs', 'order': '04', 'path': 'textarea', 'samples': TextAreaSampleOrder, 'ftName' :'textarea',
    },
    {
        'name': 'Input Mask', 'category': 'Inputs', 'order': '04', 'path': 'maskedtextbox', 'samples': MaskedTextBoxOrder
    },
    {
        'name': 'Numeric Textbox', 'category': 'Inputs', 'order': '04', 'path': 'numerictextbox', 'samples': NumericTextBoxOrder
    },
    {
        'name': 'Color Picker', 'category': 'Inputs', 'order': '04', 'path': 'color-picker', 'samples': ColorPickerSampleOrder, 'ftName': 'color-picker'
    },
    {
        'name': 'File Upload', 'category': 'Inputs', 'order': '04', 'path': 'uploader', 'samples': UploaderSampleOrder, 'ftName' :'file-upload'
    },
    {
        'name': 'Range Slider', 'category': 'Inputs', 'order': '04', 'path': 'range-slider', 'samples': SliderSampleOrder
    },
    {
        'name': 'Signature', 'category': 'Inputs', 'path': 'signature', 'samples': SignatureSampleOrder
    },
    {
        'name': 'In-place Editor', 'category': 'Inputs', 'path': 'inplace-editor', 'samples': InPlaceEditorSampleOrder       
    },
    {
        'name': 'Rating', 'category': 'Inputs', 'order': '04', 'path': 'rating', 'samples': RatingSampleOrder, 'ftName' :'rating'
    },
    {
        'name': 'OTP Input', 'category': 'Inputs', 'order': '04', 'type': 'preview', 'path': 'otp-input', 'samples': OTPSampleOrder, 'ftName' :'otp-input'
    },
    {
        'name': 'Avatar', 'category': 'Layout', 'path': 'avatar', 'samples': AvatarSampleOrder
    },
    {
        'name': 'Card', 'category': 'Layout', 'path': 'card', 'samples': CardSampleOrder
    },
    {
        'name': 'Dialog', 'category': 'Layout', 'order': '05', 'path': 'dialog', 'samples': DialogSampleOrder, 'ftName' :'modal-dialog'
    },
    {
        'name': 'Predefined Dialogs', 'category': 'Layout', 'order': '05', 'path': 'predefined-dialogs', 'samples': PredefinedDialogSampleOrder
    },
    {
        'name': 'ListView', 'category': 'Layout', 'order': '05', 'path': 'listview', 'samples': ListViewSampleOrder
    },
    {
        'name': 'Tooltip', 'category': 'Layout', 'order': '05', 'path': 'tooltip', 'samples': TooltipSampleOrder
    },
    {
        'name': 'Splitter', 'category': 'Layout', 'path': 'splitter', 'samples': SplitterSampleOrder
    },
    {
        'name': 'Dashboard Layout', 'category': 'Layout', 'path': 'dashboard-layout', 'samples': DashboardLayoutSampleOrder
    },
    {
        'name': 'Timeline', 'category': 'Layout', 'path': 'timeline', 'samples': TimelineSampleOrder, "ftName" :"timeline"
    },
];
    
