/**
 * MultiColumnComboBox Grouping Sample
 */
'use client';
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import './grouping.css';
import data from '../dataSource.json';

const Group = () => {
    const fields: object = { text: 'CustomerID', value: 'OrderID', groupBy: 'ShipCountry' };
    return(
        <div className='control-pane'>
            <div className="control-section">
                <div className='control-wrapper'>
                    <div style={{ paddingTop: '60px' }}>
                        <MultiColumnComboBoxComponent type="text" tabIndex={1} id='grouping' dataSource={(data as any).orderDetails} fields={fields} placeholder='Select a country' popupHeight={'230px'} popupWidth={'550px'}>
                            <ColumnsDirective>
                                <ColumnDirective field='OrderID' header='OrderID' width={80}></ColumnDirective>
                                <ColumnDirective field='CustomerID' header='CustomerID' width={80}></ColumnDirective>
                                <ColumnDirective field='Freight' header='Freight' width={80}></ColumnDirective>
                                <ColumnDirective field='ShipPostalCode' header='ShipPostalCode' width={100}></ColumnDirective>
                                <ColumnDirective field='ShipCountry' header='ShipCountry' width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </MultiColumnComboBoxComponent>
                    </div>
                </div>
            </div>

            <div id="action-description">
                <p>This sample demonstrates grouping feature of the MultColumn Combobox component. The MultiColumn ComboBox allows to group the relevant items under a corresponding category by mapping the groupBy field, and allows to load the list items.</p>
            </div>

            <div id="description">
                <p>In this sample, the order data is grouped against <code>ShipCountry</code> column, which illustrates how the orders details are grouped based on its category.</p>
            </div>
        </div>
    );
}
export default Group;
