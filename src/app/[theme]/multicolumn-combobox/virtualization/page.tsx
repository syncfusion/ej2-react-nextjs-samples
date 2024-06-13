/**
 * MultiColumnComboBox Virtualization Sample
 */
'use client';
import { MultiColumnComboBoxComponent, GridSettingsModel, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import './virtualization.css';

const Virtual = () => {
    const data: Function = (count: number) => {
        let names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
        let hours = [8, 12, 16];
        let status = ["Pending", "Completed", "In Progress"];
        let designation = ["Engineer", "Manager", "Tester"];
        let result: Object[] = [];
        for (let i = 0; i < count; i++) {
            result.push({
                TaskID: i + 1,
                Engineer: names[Math.floor(Math.random() * names.length)],
                Designation: designation[Math.floor(Math.random() * designation.length)],
                Estimation: hours[Math.floor(Math.random() * hours.length)],
                Status: status[Math.floor(Math.random() * status.length)]
            });
        }
        return result;
    };
    const fields: object = { text: 'Engineer', value: 'TaskID'};
    const gridSettings: GridSettingsModel = { rowHeight: 40, enableAltRow: true, gridLines: 'Horizontal'};
    return(
        <div className='control-pane'>
            <div className="control-section">
                <div className='control-wrapper'>
                    <div style={{ paddingTop: '55px' }}>
                        <MultiColumnComboBoxComponent type="text" tabIndex={1} id='virtual' dataSource={data(150)} enableVirtualization={true} fields={fields} placeholder='Select an enginner' popupHeight={'230px'} popupWidth={'550px'} gridSettings={gridSettings}>
                            <ColumnsDirective>
                                <ColumnDirective field='TaskID' header='Task ID' width={100}></ColumnDirective>
                                <ColumnDirective field='Engineer' header='Engineer' width={100}></ColumnDirective>
                                <ColumnDirective field='Designation' header='Designation' width={100}></ColumnDirective>
                                <ColumnDirective field='Estimation' header='Estimation' width={100}></ColumnDirective>
                                <ColumnDirective field='Status' header='Status' width={100}></ColumnDirective>
                            </ColumnsDirective>
                        </MultiColumnComboBoxComponent>
                    </div>
                </div>
            </div>

            <div id="action-description">
                <p>This example demonstrates the virtualization support of the MultiColumn ComboBox. The component has 150 items bound to it; however, when you open the suggestion list, only few items are loaded based on the popup height, and the remaining items are loaded while scrolling.</p>
            </div>

            <div id="description">
                <p>The MultiColumn ComboBox component supports virtualization, which improves UI performance for large amounts of data. To enable virtualization, set the <code>enableVirtualization</code> property to true. 
                    When virtualization is enabled, MultiColumn ComboBox doesn't render the entire suggestion data source on initial component rendering. It loads the N number of items in the popup on initial rendering and the remaining set number of items will load while scrolling.
                    Virtualization works with both local and remote data.</p>
            </div>
        </div>
    );
}
export default Virtual;
