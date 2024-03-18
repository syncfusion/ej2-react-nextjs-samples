import { GridSampleOrder } from '@/app/[theme]/grid/config';
import { DocumentEditorSampleOrder } from '@/app/[theme]/document-editor/config';
import { PdfViewerSampleOrder } from '@/app/[theme]/pdfviewer/config';
import { ScheduleSampleOrder } from '@/app/[theme]/schedule/config';
import { GanttSampleOrder } from '@/app/[theme]/gantt/config';
import { TreeGridSampleOrder } from '@/app/[theme]/treegrid/config';
import { SpreadsheetSampleOrder } from '@/app/[theme]/spreadsheet/config';
import { ChartSampleOrder } from '@/app/[theme]/chart/config';
import { PivotViewSampleOrder } from '@/app/[theme]/pivot-table/config';
import { DiagramSampleOrder } from '@/app/[theme]/diagram/config';

export let samplesList: any = [
    {
        'name': 'Data Grid', 'category': 'Grids', 'order': '03', 'path': 'grid', 'samples': GridSampleOrder
    },
    {
        'name': 'Pivot Table', 'category': 'Grids', 'order': '03', 'path': 'pivot-table', 'samples': PivotViewSampleOrder
    },
    {
        'name': 'Tree Grid', 'category': 'Grids', 'order': '03', 'path': 'treegrid', 'samples': TreeGridSampleOrder, 'ftName' :'treegrid'
    },
    {
        'name': 'Spreadsheet', 'category': 'Grids', 'order': '03', 'path': 'spreadsheet', 'samples': SpreadsheetSampleOrder
    },
    {
        'name': 'Charts', 'category': 'Data Visualization', 'order': '01', 'path': 'chart', 'samples': ChartSampleOrder, 'ftName': 'chart'
    },
    {
        'name': 'Diagram', 'category': 'Data Visualization', 'order': '02', 'path': 'diagram', 'samples': DiagramSampleOrder
    },
    {
        'name': 'PDF Viewer', 'category': 'File Viewers & Editors', 'order': '01', 'path': 'pdfviewer', 'samples': PdfViewerSampleOrder, 'ftName': 'pdfviewer'
    },
    {
        'name': 'DocumentEditor', 'category': 'File Viewers & Editors', 'order': '04', 'path': 'document-editor', 'samples': DocumentEditorSampleOrder
    },
    {
        'name': 'Scheduler', 'category': 'Calendars', 'order': '02', 'path': 'schedule', 'samples': ScheduleSampleOrder, 'ftName': 'scheduler'
    },
    {
        'name': 'Gantt Chart', 'category': 'Calendars', 'order': '02', 'path': 'gantt', 'samples': GanttSampleOrder
    }
];
    
