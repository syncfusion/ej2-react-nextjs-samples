/**
 * Programmatic Zoom sample
 */
'use client';
import { useRef } from "react";
import { MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective, MapsTooltip, Marker, MarkersDirective, MarkerDirective, Zoom } from '@syncfusion/ej2-react-maps';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import PropertyPane from '@/common/property-pane';
import worldMap from '../world-map.json';
import data from './southamerica-country-capitals.json';
let datasource: any = data as any;
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
const ProgrammaticZoomMaps = () => {
    let mapInstance = useRef<MapsComponent>(null);
    const zoomChange = (args: ChangeEventArgs) => {
        mapInstance.current.zoomSettings.shouldZoomInitially = args.checked;
        mapInstance.current.refresh();
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
            <div className='col-lg-9 control-section'>
                <MapsComponent id="maps" load={load} ref={mapInstance} useGroupingSeparator={true} format={"n"} zoomSettings={{ enable: true, mouseWheelZoom: false, pinchZooming: false }} titleSettings={{ text: 'Capitals of South American countries', textStyle: { size: '16px' } }}>
                    <Inject services={[Marker, MapsTooltip, Zoom]} />
                    <LayersDirective>
                        <LayerDirective shapeData={worldMap} shapePropertyPath='name' shapeDataPath='Country' dataSource={datasource.southAmericaCountryCapitals} shapeSettings={{ fill: '#C3E6ED', border: { color: 'black', width: 0.3 } }}>
                            <MarkersDirective>
                                <MarkerDirective visible={true} animationDuration={0} height={20} width={20} shape='Image' imageUrl='/nextjs/demos/images/maps/ballon.png' dataSource={datasource.southAmericaCountryCapitals} tooltipSettings={{ format: '<b>Capital</b> : ${name}<br><b>Country</b> : ${Country}', valuePath: 'name' }}></MarkerDirective>
                            </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
                {/* Source Link */}
                <div style={{ float: 'right', marginRight: '10px' }}>
                    Source:<a href="https://en.wikipedia.org/wiki/List_of_sovereign_states_and_dependent_territories_in_South_America#Sovereign_states" target="_blank">www.wikipedia.com</a>
                </div>
            </div>
            {/* Property Panel */}
            <div className='col-lg-3 property-section'>
                <PropertyPane title='Properties'>
                    <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%', marginBottom: '20px', marginLeft: '-10px' }}>
                      <tbody>
                        <tr style={{ height: "50px" }}>
                            <td style={{ width: "70%" }}>
                                <div className="property-text">Zoom to fit all the makers in maps</div>
                            </td>
                            <td style={{ width: "20%" }}>
                                <div className="col" style={{ paddingTop: '5px', marginTop: '-3px' }}>
                                    <CheckBoxComponent id="zoomCheckBox" change={zoomChange.bind(this)} />
                                </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </PropertyPane>
            </div>
            <div id="action-description">
                <p>This sample visualizes the capitals of all the countries in the South America continent by displaying the markers in their locations.</p>
            </div>
            <div id="description">
                <p>
                    In this example, you can see how to zoom the maps dynamically based on the location of the markers in the map. The map is scaled and the center position is changed based on the markers location. This is achieved by setting true to the <code>shouldZoomInitially</code> property in <code>zoomSettings</code>.
                </p>
                <p>Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.</p>
                <br />
                <p style={{ fontWeight: 500 }}>Injecting Module</p>
                <p>
                    Maps component features are segregated into individual feature-wise modules. To use a data label, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method.
                </p>
            </div>
        </div>
    )
}
export default ProgrammaticZoomMaps;