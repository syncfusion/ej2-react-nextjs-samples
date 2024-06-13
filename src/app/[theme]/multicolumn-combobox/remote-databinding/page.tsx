/**
 * MultiColumnComboBox Remote Databinding Sample
 */
'use client';
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import './remote-databinding.css';
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2/data';

const Remote = () => {
    const dataSource: DataManager = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Employees',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    const fields:object = { text: 'FirstName', value: 'EmployeeID' };
    const query: Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
    
    return(
        <div className='control-pane'>
            <div className="control-section">
                <div className='control-wrapper'>
                    <div style={{ paddingTop: '60px'}}>
                        <MultiColumnComboBoxComponent tabIndex={1} id='remote' dataSource={dataSource} fields={fields} allowFiltering={true} query={query} placeholder='Select a name' popupHeight={'230px'} popupWidth={'480px'}>
                            <ColumnsDirective>
                                <ColumnDirective field='EmployeeID' header='Employee ID' width={120}></ColumnDirective>
                                <ColumnDirective field='FirstName' header='Name' width={130}></ColumnDirective>
                                <ColumnDirective field='Designation' header='Designation' width={120}></ColumnDirective>
                                <ColumnDirective field='Country' header='Country' width={90}></ColumnDirective>
                            </ColumnsDirective>
                        </MultiColumnComboBoxComponent>
                    </div>
                </div>
            </div>

            <div id="action-description">
                <p>This sample demonstrates the remote data-binding support in the MultiColumn ComboBox.</p>
            </div>

            <div id="description">
                <p>The MultiColumn ComboBox loads the data remote data services through the <code>dataSource</code> property. It supports the data type of <code>array</code> or <code>DataManager</code>.</p>
                <p>The DataManager, that act as an interface between service endpoint and MultiColumn ComboBox will require the following minimal
                    information to interact with the service endpoint properly.
                </p>
                <ul>
                    <li><code>DataManager{'->'}url</code> - Defines the service endpoint to fetch data.</li>
                    <li><code>DataManager{'->'}adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for
                        remote binding.</li>
                </ul>
                <p>The adaptor is responsible for processing response and request from/to the service endpoint.
                    <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to interact with particular
                    service endpoints. They are:</p>
                <ul>
                    <li><code>UrlAdaptor</code> - Use this to interact any remote services.</li>
                    <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
                    <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
                    <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
                    <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
                </ul>
                <p>In this sample, remote data is bound to a collection of employees data as an instance of <code>DataManager</code></p>
            </div>
        </div>
    );
}
export default Remote;
