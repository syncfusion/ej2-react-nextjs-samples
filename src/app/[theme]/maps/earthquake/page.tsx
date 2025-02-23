/**
 * Earthquake sample
 */

'use client';
import { MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective, Zoom, Marker, MarkersDirective, MarkerDirective } from '@syncfusion/ej2-react-maps';
import asiaMap from '../asia.json';
const SAMPLE_CSS = `
    .pulse-css {
        width: 20px;
        height: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        background:#E94430;
        position: relative;
    }
    .pulse-css:before, .pulse-css:after {
        content: '';
        width: 20px;
        height: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        background-color: #E94430;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transform: scale(0.5);
        transform-origin: center center;
        animation: pulse-me 3s linear infinite;
    }
    .pulse-css:after {
        animation-delay: 2s;
    }
    @keyframes pulse-me {
        0% {
        transform: scale(0.5);
        opacity: 0;
        }
        50% {
        opacity: 0.3;
        }
        70% {
        opacity: 0.1;
        }
        100% {
        transform: scale(5);
        opacity: 0;
        }
    }`;
let marketTemp: string = '<div id="template"> <div class="pulse-container"><div class="pulse-box"><div class="pulse-css"></div></div></div></div>';
const EarthquakeMaps = () => {
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
                    <MapsComponent id="maps" loaded={onMapsLoad} load={load} zoomSettings={{ enable: false, zoomFactor: 7 }} mapsArea={{ background: '#AEE2FA' }} titleSettings={{ text: '7.6 Magnitude earthquake strikes Sumatra - 2009', textStyle: { size: '18px' } }} centerPosition={{ latitude: 1.5053645409602877, longitude: 105.14038085937499 }}>
                        <Inject services={[Zoom, Marker]} />
                        <LayersDirective>
                            <LayerDirective shapeData={asiaMap} shapePropertyPath='name' shapeDataPath='name' shapeSettings={{ fill: '#FFFDCF', border: { color: '#3497C3', width: 0.5 } }}>
                                <MarkersDirective>
                                    <MarkerDirective visible={true} height={100} width={100} animationDuration={0} template={marketTemp} dataSource={[{ latitude: 1.625758360412755, longitude: 106.5693359375 }]} />
                                </MarkersDirective>
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
                {/* Source Link */}
                <div style={{ float: 'right', marginRight: '10px' }}>
                    Source:<a href="https://en.wikipedia.org/wiki/2009_Sumatra_earthquakes" target="_blank">en.wikipedia.org</a>
                </div>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the earth quack occurred in Sumatra, Indonesia in the year 2009.</p>
            </div>
            <div id="description">
                <p>In this example, you can see how to render a custom HTML element as marker and place it on a specific location.</p>
                <br />
                <p style={{ fontWeight: 500 }}>Injecting Module</p>
                <p>
                    Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject <code>Marker</code> module using <code>Maps.Inject(Marker)</code> method.
                </p>
            </div>
        </div>
    )
}
export default EarthquakeMaps;