'use client';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Sort, Filter, Edit, Toolbar, EditSettingsModel, ToolbarItems, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from '../data';

function Localbinding() {
    const filterSettings: FilterSettingsModel = { type: 'Excel' };
    const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true};
    const customeridRule: Object = { required: true, minLength: 5};
    const freightRule: Object = { required: true, min: 0};
    const orderidRules: Object = { required: true, number: true };
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageCount: 5 }} allowSorting={true} allowFiltering={true} filterSettings={filterSettings} editSettings={editSettings} toolbar={toolbar}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={customeridRule}></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' editType='datepickeredit'/>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' validationRules={freightRule} editType='numericedit'/>
                        <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='130' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'  editType='dropdownedit'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Edit, Toolbar]} />
                </GridComponent>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the way of data binding Grid component with JavaScript object array (local data source).
                </p>
            </div>
            <div id='description'>
                <p>
                    The Grid supports data binding. The  <code><a target='_blank' className='code'
                        href='https://ej2.syncfusion.com/react/documentation/api/grid#datasource'>
                        dataSource</a></code> property can be assigned either with the array of JavaScript objects or instance of  <code><a target='_blank' className='code'
                            href='https://ej2.syncfusion.com/documentation/api/data/dataManager/'>
                            datamanager</a></code>.
                </p>
                <p>
                    Grid component features are segregated into individual feature-wise modules. </p>

                <p>
                    More information on the dataBinding feature configuration can be found in this
                    <a target='_blank' href='https://ej2.syncfusion.com/react/documentation/grid/data-binding.html#local-data'> documentation section</a>.
                </p>
            </div>
        </div>
    )
}
export default Localbinding;