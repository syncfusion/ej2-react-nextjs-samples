'use client';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { employeeData } from '../data';
import '../sample.css';
import { base_path } from '@/common/utils';

function ColumnTemplate() {
    function gridTemplate(props: any): any {
        var src = base_path + '/images/grid/' + props.EmployeeID + '.png';
        return (<div className='image'>
            <img src={src} alt={props.EmployeeID} />
        </div>);
    }
    const template: any = gridTemplate;
    const filterSettings: FilterSettingsModel = { type: 'Excel' };
    
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent dataSource={employeeData} width='auto' height='359' allowSorting={true} allowFiltering={true} filterSettings={filterSettings}>
                    <ColumnsDirective>
                        <ColumnDirective headerText='Employee Image' width='180' template={template} textAlign='Center' />
                        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right' />
                        <ColumnDirective field='FirstName' headerText='Name' width='120' />
                        <ColumnDirective field='Title' headerText='Title' width='170' />
                        <ColumnDirective field='HireDate' headerText='Hire Date' width='135' format='yMd' textAlign='Right' />
                        <ColumnDirective field='ReportsTo' headerText='Reports To' width='120' textAlign='Right' />
                    </ColumnsDirective>
                    <Inject services={[Sort, Filter]} />
                </GridComponent>
            </div>
            <div id="action-description">
                <p>This sample demonstrates usage of template columns in Grid.
                    In this sample, we have shown custom images in the Employee
                    Image column.
                </p>

            </div>
            <div id='description'>
                <p>
                    The Grid provides a way to use a custom layout for each cell using column template feature. The
                    <code><a target="_blank" className="code"
                        href="https://ej2.syncfusion.com/react/documentation/api/grid/column/#template">columns-&gt;template
                    </a></code> property accepts the template for the cell.
                </p>
                <p>
                    In this demo, using column template, we have presented <strong>Employee Image</strong> column as template column.
                </p>

            </div>
        </div>
    )
}
export default ColumnTemplate;