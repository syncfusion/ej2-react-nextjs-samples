'use client';
import { useRef, useState } from "react";
import { HeatMapComponent, Tooltip, ILoadedEventArgs, HeatMapTheme, Inject, TitleModel, AxisModel, CellSettingsModel } from '@syncfusion/ej2-react-heatmap';
import data from './opposed-axis-data.json';
import { CheckBoxComponent, ChangeEventArgs } from "@syncfusion/ej2-react-buttons";
import PropertyPane from '@/common/property-pane';

// custom code start
const SAMPLE_CSS: any = `
    #control-container {
        padding: 0px !important;
    }
    #source{
        float: right; margin-right: 10p
    }`;
// custom code end
const OpposedAxis = () => {
    
    const [isXOpposedPosition, setIsXOpposedPosition] = useState<boolean>(true);
    const [isYOpposedPosition, setIsYOpposedPosition] = useState<boolean>(true);
    let heatmap = useRef<HeatMapComponent>(null);
    let title: TitleModel = {
        text: 'Monthly Flight Traffic at JFK Airport',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit'
        }
    }
    let xAxis: AxisModel = {
        labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        opposedPosition: isXOpposedPosition,
        labelRotation: 45,
        labelIntersectAction: 'None',
        textStyle: {
            fontFamily: 'inherit'
        }
    }
    let yAxis: AxisModel = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        opposedPosition: isYOpposedPosition,
        textStyle: {
            fontFamily: 'inherit'
        }
    }
    let cellSettings: CellSettingsModel = {
        showLabel: false,
        border: {
            width: 0,
        },
        format: '{value} flights',
    }
    
    const load = (args: ILoadedEventArgs): void => {
        // custom code start
        let selectedTheme: string = location.pathname.split('/').slice(3)[0];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark") as HeatMapTheme;
        // custom code end
    };

    const valueXChange = (args: ChangeEventArgs): void => {
        setIsXOpposedPosition(args.checked);
        heatmap.current.dataBind();
    }

    const valueYChange = (args: ChangeEventArgs): void => {
        setIsYOpposedPosition(args.checked);
        heatmap.current.dataBind();
    }

    return (
        <div>
            <div className='col-md-9 control-section'>
                {/* custom code start */}
                <style>{SAMPLE_CSS}</style>
                {/* custom code end */}
                <HeatMapComponent id='heatmap-container' ref={heatmap} titleSettings={title} xAxis={xAxis} yAxis={yAxis} dataSource={(data as any).opposedAxisData} tooltipSettings={{ textStyle:{fontFamily: 'inherit'} }} legendSettings={{ visible: false }} load={load.bind(this)} cellSettings={cellSettings}>
                    <Inject services={[Tooltip]} />
                </HeatMapComponent>
            </div>
            <div className="col-md-3 property-section">
                <PropertyPane title='Properties'>
                    <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%', marginLeft:-10 }}>
                        <tbody>
                            <tr id='' style={{ height: '50px' }}>
                                <td style={{ width: '40%' }}>
                                    <CheckBoxComponent id='XOpposedPosition' checked={isXOpposedPosition} label='Change X-Axis Position' change={valueXChange} />
                                </td>
                            </tr>
                            <tr id='' style={{ height: '50px' }}>
                                <td style={{ width: '40%' }}>
                                    <CheckBoxComponent id='YOpposedPosition' checked={isYOpposedPosition} label='Change Y-Axis Position' change={valueYChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </PropertyPane>
            </div>
            <div id="action-description">
                <p>
                    This sample illustrates the monthly flight arrivals at JFK international airport, New York.
                    The data label is disabled in this sample, the tooltip displays the data point values.  In property panel,
                    the options are available to change the position of the axes by means of checkbox for each axis.
                </p>
            </div>
            <div id="description">
                <p>
                    In this example, you can see how to change the display position of the axis. You can change the display position of axes by enabling the
                    <a href="https://ej2.syncfusion.com/react/documentation/api/heatmap/axisModel/#opposedposition" target="_blank"> opposedPosition</a> property for each axis.
                </p>
                <p>
                    The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.
                </p>
                <br></br>
                <p> <b>Injecting Module</b></p>
                <p>
                    Heatmap component features are separated into discrete feature-based modules. To use a tooltip, inject the <a target="_blank"
                    href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/tooltip">Tooltip</a> module using the <code>{'<Inject services={[Tooltip]} />'}</code> method.
                </p>
            </div>
        </div >
    );
}
export default OpposedAxis;
