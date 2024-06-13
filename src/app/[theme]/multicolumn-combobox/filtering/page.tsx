/**
 * MultiColumnComboBox Filtering Sample
 */
'use client';
import { MultiColumnComboBoxComponent, FilteringEventArgs, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import './filtering.css';
import data from '../dataSource.json';
import { Query } from '@syncfusion/ej2-data';

const Filter = () => {
    const filtering = (e: FilteringEventArgs) => {
        let query: Query = new Query();
        query = (e.text !== '') ? query.where('ShipCountry', 'startswith', e.text, true) : query;
        e.updateData((data as any).orderDetails, query);
    };
    const fields: object = { text: 'ShipCountry', value: 'OrderID' };
    return(
        <div className='control-pane'>
            <div className="control-section">
                <div className='control-wrapper'>
                    <div style={{ paddingTop: '60px' }}>
                        <MultiColumnComboBoxComponent type="text" tabIndex={1} id='filtering' dataSource={(data as any).orderDetails} allowFiltering={true} fields={fields} placeholder='Select a country' popupHeight={'200px'} popupWidth={'500px'} filtering={filtering}>
                            <ColumnsDirective>
                                <ColumnDirective field='OrderID' header='Order ID' width={100}></ColumnDirective>
                                <ColumnDirective field='CustomerID' header='Customer ID' width={100}></ColumnDirective>
                                <ColumnDirective field='Freight' header='Freight' width={100}></ColumnDirective>
                                <ColumnDirective field='ShipCountry' header='Ship Country' width={100}></ColumnDirective>
                            </ColumnsDirective>
                        </MultiColumnComboBoxComponent>
                    </div>
                </div>
            </div>

            <div id="action-description">
                <p>This sample demonstrates the built-in support to filter the datasource when <code>allowFiltering</code>is enabled in the MultiColumn ComboBox.</p>
            </div>

            <div id="description">
                <p>
                    In this sample, the order data is filtered based on <code>ShipCountry</code> column, which illustrates how order details are filtered dynamically based on typed characters. 
                </p>
                <p>This sample illustrates that, query the data source and pass the resulted data when characters are typed in the search box triggers the <code>filtering</code>
                    event, you can filter down the data source and return the resulted data to MultiColumn ComboBox via <code> updateData</code>method to display its list items.</p>
            </div>
        </div>
    );
}
export default Filter;
