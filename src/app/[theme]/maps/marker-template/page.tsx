/**
 * Marker Template sample
 */
'use client';
import { MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective, Marker, MarkersDirective, MarkerDirective } from '@syncfusion/ej2-react-maps';
import australia from './australia.json';
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
let marker: object[] = [
    { weather: 'clear', Name: 'Perth', latitude: -31.950527, longitude: 115.860457, Temperature: 31.6 },
    { weather: 'clouds', Name: 'Adelaide', latitude: -34.928499, longitude: 138.600746, Temperature: 29 },
    { weather: 'clear', Name: 'Townsville', latitude: -19.2589635, longitude: 146.8169483, Temperature: 31.3 },
    { weather: 'rain', Name: 'Sydney', latitude: -33.868820, longitude: 151.209296, Temperature: 26.4 },
    { weather: 'clear', Name: 'Alice Springs', latitude: -23.698042, longitude: 133.880747, Temperature: 36.4 },
    { weather: 'clouds', Name: 'Brisbane', latitude: -27.469771, longitude: 153.025124, Temperature: 29.1 }
];
const MarkerTemplateMaps = () => {
    const onMapsLoad = (): void => {
        let maps: Element = document.getElementById('maps');
        maps.setAttribute('title', '');
    };
    const load = (args: ILoadedEventArgs): void => {
        // custom code start
        let selectedTheme: string = location.pathname.split('/').slice(3)[0];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.maps.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast') as MapsTheme;
        // custom code end
    };
    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section row'>
                <div className='col-md-12'>
                    <MapsComponent id="maps" loaded={onMapsLoad} load={load} zoomSettings={{ enable: false }} titleSettings={{ text: ' Australia cities weather details', textStyle: { size: '16px' } }}>
                        <Inject services={[Marker]} />
                        <LayersDirective>
                            <LayerDirective shapeData={australia} tooltipSettings={{ visible: false }} shapeSettings={{ autofill: true, palette: ['#E2B247', '#88DB46', '#42C4E2', '#C08AF8', '#52BACC', '#F4CE2F', '#6986ED'], border: { width: 0.5, color: 'white' } }}>
                                <MarkersDirective>
                                    <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1"><img style="height:30px;width:30px;display:block;  margin: auto;" src="/nextjs/demos/images/maps/weather-clear.png" alt="Weather clear" /><p>{{:Name}}:{{:Temperature}}°C</p></div>' dataSource={[marker[0]]} />
                                    <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1"><img style="height:30px;width:30px;display:block;  margin: auto;" src="/nextjs/demos/images/maps/weather-clouds.png" alt="Weather cloud"/><p>{{:Name}}:{{:Temperature}}°C</p></div>' dataSource={[marker[1]]} />
                                    <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1"><img style="height:30px;width:30px;display:block;  margin: auto;" src="/nextjs/demos/images/maps/weather-clear.png" alt="Weather clear"/><p>{{:Name}}:{{:Temperature}}°C</p></div>' dataSource={[marker[2]]} />
                                    <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1"><img style="height:30px;width:30px;display:block;  margin: auto;" src="/nextjs/demos/images/maps/weather-rain.png" alt="Weather rain"/><p>{{:Name}}:{{:Temperature}}°C</p></div>' dataSource={[marker[3]]} />
                                    <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1"><img style="height:30px;width:30px;display:block;  margin: auto;" src="/nextjs/demos/images/maps/weather-clear.png" alt="Weather clear"/><p>{{:Name}}:{{:Temperature}}°C</p></div>' dataSource={[marker[4]]} />
                                    <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1"><img style="height:30px;width:30px;display:block;  margin: auto;" src="/nextjs/demos/images/maps/weather-clouds.png" alt="Weather cloud"/><p>{{:Name}}:{{:Temperature}}°C</p></div>' dataSource={[marker[5]]} />
                                </MarkersDirective>
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
            </div>
            <div id="action-description">
                <p>This sample indicates the temperature of various cities of Australia in marker templates.</p>
            </div>
            <div id="description">
                <p>In this example, you can see how to place a template as a marker in the map. Any custom HTML elements can be used as a marker. You can use the autoFill property in the shapeSettings to apply the default palette colors to the shapes.</p>
                <br />
                <p style={{ fontWeight: 500 }}>Injecting Module</p>
                <p>Maps component features are segregated into individual feature-wise modules. To use a marker template, inject the Marker module using the Maps.Inject(Marker) method.</p>
            </div>
        </div>
    )
}
export default MarkerTemplateMaps;