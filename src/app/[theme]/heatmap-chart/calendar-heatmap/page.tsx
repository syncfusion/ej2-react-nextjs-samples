'use client';
import { HeatMapComponent, Legend, Tooltip, ILoadedEventArgs, HeatMapTheme, Inject, ITooltipEventArgs, PaletteSettingsModel, AxisModel, TitleModel } from '@syncfusion/ej2-react-heatmap';
import data from './calendar-data-source.json';
import { Internationalization } from "@syncfusion/ej2-base";

// custom code start
const SAMPLE_CSS: any = `
#control-container {
    padding: 0px !important;
}`;
// custom code end
const CalendarHeatmap = () => {

    let paletteSettings: PaletteSettingsModel = {
        palette: [
            { value: 0, color: 'rgb(238,238,238)', label: 'no contributions' },
            { value: 1, color: 'rgb(172, 213, 242)', label: '1-15 contributions' },
            { value: 16, color: 'rgb(127, 168, 201)', label: '16-31 contributions' },
            { value: 32, color: 'rgb(82, 123, 160)', label: '31-49 contributions' },
            { value: 50, color: 'rgb(37, 78, 119)', label: '50+ contributions' },
        ],
        type: 'Fixed',
        emptyPointColor: 'white'
    }

    let xAxis: AxisModel = {
        opposedPosition: true,
        valueType: 'DateTime',
        minimum: new Date(2017, 6, 23),
        maximum: new Date(2018, 6, 30),
        intervalType: 'Days',
        showLabelOn: 'Months',
        labelFormat: 'MMM',
        increment: 7,
        labelIntersectAction: 'Rotate45',
        textStyle: { fontFamily: 'inherit' } 
    }

    let title: TitleModel = {
        text: 'Annual Summary of User Activities in GitLab',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit'
        }
    }

    const tooltipTemplate = (args: ITooltipEventArgs): void => {
        let intl: Internationalization = new Internationalization();
        let format: Function = intl.getDateFormat({ format: 'EEE MMM dd, yyyy' });
        let newDate: Date = new Date(args.xValue as Date);
        let date: Date = new Date(newDate.getTime());
        let axisLabel: string[] = args.heatmap.axisCollections[1].axisLabels;
        let index: number = axisLabel.indexOf(args.yLabel);
        (date).setDate((date).getDate() + index);
        let value: Date = format(date);
        args.content = [(args.value === 0 ? 'No' : args.value) + ' ' + 'contributions' + '<br>' + value];
    };

    const load = (args: ILoadedEventArgs): void => {
        // custom code start
        let selectedTheme: string = location.pathname.split('/').slice(3)[0];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark") as HeatMapTheme;
        // custom code end
    };

    return (
        <div className='control-pane'>
            {/* custom code start */}
            <style>{SAMPLE_CSS}</style>
            {/* custom code end */}
            <div className='control-section'>
                <HeatMapComponent id='heatmap-container' titleSettings={title} height={'300px'} xAxis={xAxis} yAxis={{ labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], isInversed: true, textStyle: { fontFamily: 'inherit' }   }} dataSource={(data as any).calendarDataSource} tooltipSettings={ {textStyle: { fontFamily: 'inherit' }} } cellSettings={{ showLabel: false, border: { color: 'white' } }} tooltipRender={tooltipTemplate} paletteSettings={paletteSettings} load={load.bind(this)} legendSettings={{ position: 'Bottom', width: '20%', alignment: 'Near', showLabel: true, labelDisplayType: 'None', enableSmartLegend: true, textStyle: { fontFamily: 'inherit' } }}>
                    <Inject services={[Legend, Tooltip]} />
                </HeatMapComponent>
            </div>
            <div id="action-description">
                <p>This sample visualizes the summary of user activities in GitLab account such as merge requests, push events and comments across 52 weeks in a year.</p>
            </div>
            <div id="description">
                <p>In this example, you can see how to display a calendar data using heatmap. You can make the axis labels to display at specific time intervals along the datetime axis using the showLabelOn property.</p>
                <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over
                        an item or tap an item on touch-enabled devices.</p>
                <br></br>
                <p><b>Injecting Module</b></p>
                <p>
                        Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target="_blank"
                        href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/tooltip">Tooltip</a> and <a target="_blank"
                        href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/legend">Legend</a> module using the <code>{'<Inject services={[Tooltip, Legend]} />'}</code> method.
                </p>
            </div>
        </div >
    );
}
export default CalendarHeatmap;
