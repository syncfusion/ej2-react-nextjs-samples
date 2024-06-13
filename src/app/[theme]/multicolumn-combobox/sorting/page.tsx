/**
 * MultiColumnComboBox Sorting Sample
 */
'use client';
import { MultiColumnComboBoxComponent, SortOrder, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import '../default.css';
import data from '../dataSource.json';

const Sort = () => {
    const fields: object = { text: 'OrderID', value: 'CustomerID' };
    return(
        <div className='control-pane'>
            <div className="control-section">
                <div className='control-wrapper'>
                    <div style={{ paddingTop: '60px' }}>
                        <MultiColumnComboBoxComponent type="text" tabIndex={1} id='sorting' dataSource={(data as any).orderDetails} fields={fields} placeholder='Select a order ID' popupHeight={'230px'} popupWidth={'450px'} allowSorting={true} sortOrder={SortOrder.Ascending} sortType='MultiColumn'>
                            <ColumnsDirective>
                                <ColumnDirective field='OrderID' header='Order ID' width={100}></ColumnDirective>
                                <ColumnDirective field='CustomerID' header='Customer ID' width={110}></ColumnDirective>
                                <ColumnDirective field='Freight' header='Freight' width={90}></ColumnDirective>
                                <ColumnDirective field='ShipCountry' header='Ship Country' width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </MultiColumnComboBoxComponent>
                    </div>
                </div>
            </div>

            <div id="action-description">
                <p>This example demonstrates the sorting support of the MultiColumn ComboBox.</p>
            </div>

            <div id="description">
                <p>In this sample, you can click the column header to sort/unsort the column any field can be selected from the Fields dropdown list and its order can be changed to display headers either in ascending or descending order. It can be enabled using the <code>allowSorting</code> property and it can be configured using order options inside the <code>sortOrder</code> in the MultiColumn combobox.</p>
            </div>
        </div>
    );
}
export default Sort;