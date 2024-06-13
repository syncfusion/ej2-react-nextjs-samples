/**
 * MultiColumnComboBox Default functionality Sample
 */
'use client';
import { MultiColumnComboBoxComponent, ChangeEventArgs, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import { useState } from 'react';
import PropertyPane from '@/common/property-pane';
import '../default.css';
import data from '../dataSource.json';

const Default = () => {
    const [value, setValue] = useState("1001");
    const [text, setText] = useState("France");

    const valueChange = (args: ChangeEventArgs) => {
        setValue(args.itemData === null ? 'null' : args.itemData.value);
        setText(args.itemData === null ? 'null' : args.itemData.text);
    }
    return(
        <div className='control-pane'>
            <div className='control-section'>
                <div className="col-lg-8">
                    <div className="control-wrapper">
                        <div style={{ paddingTop: '50px'}}>
                            <MultiColumnComboBoxComponent tabIndex={1} id="default" dataSource={(data as any).orderDetails} fields={{text: 'ShipCountry', value: 'OrderID' }} popupHeight={'230px'} popupWidth={'470px'} placeholder='Select the country' allowFiltering={true} gridSettings={{ rowHeight: 40, enableAltRow: true, gridLines: 'Horizontal'}} value={value} text={text} change={ (args) => valueChange(args) }>
                                <ColumnsDirective>
                                    <ColumnDirective field='OrderID' header='Order ID' width={70}></ColumnDirective>
                                    <ColumnDirective field='CustomerID' header='Customer ID' width={80}></ColumnDirective>
                                    <ColumnDirective field='Freight' header='Freight' width={60}></ColumnDirective>
                                    <ColumnDirective field='ShipCountry' header='Ship Country' width={80}></ColumnDirective>
                                </ColumnsDirective>
                            </MultiColumnComboBoxComponent>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 property-section">
                    <PropertyPane title='Properties'>
                        <table id="property" title="Properties" style={{ width: '100%', margin: '10px' }}>
                            <tbody>
                                <tr>
                                    <td className="left-side">Value</td>
                                    <td>:<span id='value' className="right-side">{value}</span></td>
                                </tr>
                                <tr>
                                    <td className="left-side">Text</td>
                                    <td>:<span id='text' className="right-side">{text}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </PropertyPane>
                </div>
            </div>

            <div id="action-description">
                <p>This sample demonstrates the default functionalities of the MultiColumn ComboBox. The <code>MultiColumn ComboBox</code> component allows the user to select an item from a list while displaying multiple columns of data simultaneously.</p>
            </div>

            <div id="description">
                <p>In the above sample, type any character in the MultiColumn ComboBox element or click the dropdown icon to choose an item from the <code>options</code> list.
                    The selected item's <code>value</code> and <code>text</code> property values will be shown in the property panel.</p>
            </div>
        </div>
    );
}
export default Default;