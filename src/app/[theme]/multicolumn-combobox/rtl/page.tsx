/**
 * MultiColumnComboBox RTL Sample
 */
'use client';
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import './rtl.css';
import data from '../dataSource.json';

const RTL = () => {

    const fields: object = { text: 'Name', value: 'Designation' };
    return (
        <div className='control-pane'>
            <div className="control-section">
                <div className='control-wrapper'>
                    <div style={{ paddingTop: '60px' }}>
                        <MultiColumnComboBoxComponent type="text" tabIndex={1} id='rtl' dataSource={(data as any).empList} fields={fields} placeholder='Select an employee' popupHeight={'230px'} width={'550px'} enableRtl={true}>
                            <ColumnsDirective>
                                <ColumnDirective field='Eimg' header='Employee ID' width={140}></ColumnDirective>
                                <ColumnDirective field='Name' header='Employee Name' width={140}></ColumnDirective>
                                <ColumnDirective field='Designation' header='Designation' width={140}></ColumnDirective>
                                <ColumnDirective field='Country' header='Country' width={100}></ColumnDirective>
                            </ColumnsDirective>
                        </MultiColumnComboBoxComponent>
                    </div>
                </div>
            </div>

            <div id="action-description">
                <p>This example demonstrates the RTL support in the MultiColumn ComboBox.</p>
            </div>

            <div id="description">
                <p>The MultiColumn ComboBox has built-in support to enable the right-to-left (RTL) text direction when the <code>enableRtl</code> property is enabled.</p>
            </div>
        </div>
    );
}
export default RTL;
