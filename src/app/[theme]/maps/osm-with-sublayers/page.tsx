'use client';
/**
 * OSM With SubLayer sample
 */
import { MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective, MapsTooltip, Bubble, Zoom } from '@syncfusion/ej2-react-maps';
import * as africaMap from '../africa.json';
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
const OSMSubLayer = () => {
    const load = (args: ILoadedEventArgs): void => {
        // custom code start
        let theme: string = location.pathname.split('/').slice(3)[0];
        theme = theme ? theme : 'Material';
        args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast') as MapsTheme;
        // custom code end
    };
    return (
        <main><div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section row'>
                <div className='col-md-12'>
                    <MapsComponent id="maps" load={load} titleSettings={{ text: 'Location of Africa continent in the World map', textStyle: { size: '16px' } }} zoomSettings={{ enable: true }}>
                        <Inject services={[Bubble, MapsTooltip, Zoom]} />
                        <LayersDirective>
                            <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png" />
                            <LayerDirective type='SubLayer' animationDuration={0} shapeData={africaMap} shapeSettings={{ fill: '#5100a3', opacity: 0.4 }} />
                        </LayersDirective>
                    </MapsComponent>
                </div>
            </div>
            <div style={{ float: 'right' }}>
                <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
            </div>
            <br />
            {/* Source Link */}
            <div style={{ float: 'right', marginRight: '10px' }}>
                Source:<a href="https://www.whatarethe7continents.com/biggest-largest-smallest-continents/" target="_blank">Seven Continents</a>
            </div>
        </div>
            <section id="action-description" aria-label="Description of Maps sample">
                <p>This sample visualizes the Africa continent location in the World map. Africa continent is rendered in sublayer, on the OpenStreetMap.</p>
            </section>
            <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
                <p>In this example, you can see how to render geometric layers as sublayer on the OpenStreetMap. Rendered the outline of Africa continent using GeoJSON data on the top of the OSM map.</p>
                <br />
                <p style={{ fontWeight: 500 }}>Injecting Module</p>
                <p>
                    Maps component features are segregated into individual feature-wise modules. To use zooming feature, inject the Zoom module using the <code>Maps.Inject(Zoom)</code> method.
                </p>
            </section>
        </main>
    )
}
export default OSMSubLayer;