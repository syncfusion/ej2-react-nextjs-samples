'use client';
import { LinearGaugeComponent, ILoadedEventArgs, AnnotationsDirective, Annotations, Inject, AnnotationDirective, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective, LinearGaugeTheme, IAxisLabelRenderEventArgs } from '@syncfusion/ej2-react-lineargauge';

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;

const Thermometer = () => {

    const load = (args: ILoadedEventArgs): void => {
        // custom code start
        let selectedTheme: string = location.pathname.split('/').slice(3)[0];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = ((selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast')) as LinearGaugeTheme;
        // custom code end
    }

    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <LinearGaugeComponent load={load} id='gauge' background='transparent' orientation='Vertical' container={{ width: 13, roundedCornerRadius: 5, type: 'Thermometer', border: { width: 1 } }}>
                    <Inject services={[Annotations]} />
                    <AxesDirective>
                        <AxisDirective minimum={-20} maximum={50} majorTicks={{ height: 7, interval: 10 }} minorTicks={{ height: 0, interval: 5 }} line={{ width: 0 }} labelStyle={{ font: { fontFamily: 'inherit' } }}>
                            <PointersDirective>
                                <PointerDirective value={35} height={12} width={12} offset={3} markerType='Triangle' placement='Center' color='#0074E3' />
                            </PointersDirective>
                        </AxisDirective>
                        <AxisDirective minimum={0} maximum={120} opposedPosition={true} majorTicks={{ height: 7, interval: 20 }} minorTicks={{ height: 0, interval: 10 }} line={{ width: 0 }} labelStyle={{ font: { fontFamily: 'inherit' } }}>
                            <PointersDirective>
                                <PointerDirective value={94} height={13} width={13} type='Bar' color='#0074E3' />
                            </PointersDirective>
                        </AxisDirective>
                    </AxesDirective>
                    <AnnotationsDirective>
                        <AnnotationDirective content='<div> <p style="font-size:13px;margin-left: -20px;margin-top: -30px;">\u00b0C</p> </div>' axisIndex={0} axisValue={50} x={0} y={0} zIndex='1' />
                        <AnnotationDirective content='<div> <p style="font-size:13px;margin-left: 28px;margin-top: -30px;">\u00b0F</p> </div>' axisIndex={1} axisValue={120} x={0} y={0} zIndex='1' />
                    </AnnotationsDirective>
                </LinearGaugeComponent>
            </div>
            <div id="action-description">
                <p>This sample shows a thermometer that displays temperature in both degrees and fahrenheit.</p>
            </div>
            <div id="description">
                <p>
                    In this example, you can see how to render and configure a linear gauge to look like a thermometer. More information about containers can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/linear-gauge/appearance/#customizing-the-linear-gauge-container">documentation section</a>.
                </p>
            </div>
        </div >
    )
}
export default Thermometer;