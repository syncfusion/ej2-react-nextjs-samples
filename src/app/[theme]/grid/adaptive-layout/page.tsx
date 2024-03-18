'use client';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Sort, Group, Edit, Resize, Toolbar, Aggregate, Page, ExcelExport, PdfExport, ColumnChooser, ColumnMenu } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { data } from '../data';
import PropertyPane from '@/common/property-pane';
import './adaptive-layout.css';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { useEffect, useState } from 'react';

function Adaptive(this: any) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(Browser.isDevice);
  }, []);
  let grid: GridComponent;
  let checkboxObj: CheckBoxComponent;
  const toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'];
  const renderingMode: any = 'Vertical';
  const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const groupOptions: GroupSettingsModel = { showGroupedColumn: true };
  const validationRule: Object = { required: true };
  const orderidRules: Object = { required: true, number: true };
  const filterOptions: any = { type: 'Excel' };
  function onChange(e: ChangeEventArgs): void {
    grid.rowRenderingMode = e.checked ? 'Horizontal' : 'Vertical';
    grid.allowGrouping = e.checked;
  };
  function footerSum(props): any {
    return (<span>Sum: {props.Sum}</span>)
  }
  function footerAvg(props): any {
    return (<span>Average: {props.Average}</span>)
  }
  function load(): void {
    (this as any).adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    if ((this as any).pageSettings.pageSizes) {
      document.querySelector('.e-adaptive-demo')?.classList.add('e-pager-pagesizes');
    }
    else {
      document.querySelector('.e-adaptive-demo')?.classList.remove('e-pager-pagesizes');
    }
  }
  function toolbarClick(args: ClickEventArgs): void {
    switch (args.item.id) {
      case grid.element.id + '_pdfexport':
        grid.pdfExport();
        break;
      case grid.element.id + '_excelexport':
        grid.excelExport();
        break;
    }
  }

  return (
    <div className='control-pane'>
      <div className='control-section'>
        <div className="col-md-9 e-bigger e-adaptive-demo">
          {!isMobile ? (
            <div className="e-mobile-layout">
              <div className="e-mobile-content">
                <GridComponent id="adaptivebrowser" dataSource={data} height='100%' ref={(g) => { grid = g }} enableAdaptiveUI={true} rowRenderingMode={renderingMode} allowFiltering={true} allowSorting={true} allowGrouping={false} showColumnChooser={true} showColumnMenu={true} allowPaging={true} groupSettings={groupOptions} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} pageSettings={{ pageCount: 3, pageSizes: true }} load={load} toolbarClick={toolbarClick} allowExcelExport={true} allowPdfExport={true}>
                  <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='180' isPrimaryKey={true} validationRules={orderidRules}></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='180' format='C2' editType='numericedit' validationRules={validationRule} />
                    <ColumnDirective field='CustomerName' headerText='Name' width='180' validationRules={validationRule}></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='180'></ColumnDirective>
                  </ColumnsDirective>
                  <AggregatesDirective>
                    <AggregateDirective>
                      <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Sum' format='C2' footerTemplate={'<span>Sum: ${Sum}</span>'}> </AggregateColumnDirective>
                      </AggregateColumnsDirective>
                    </AggregateDirective>
                  </AggregatesDirective>
                  <Inject services={[Filter, Sort, Group, Edit, Resize, Toolbar, Aggregate, Page, ExcelExport, PdfExport, ColumnChooser, ColumnMenu]} />
                </GridComponent>
              </div>
            </div>
          ) : (
            <GridComponent id="adaptivedevice" dataSource={data} height='100%' ref={(g) => { grid = g }} enableAdaptiveUI={true} rowRenderingMode={renderingMode} allowFiltering={true} allowSorting={true} allowGrouping={false} showColumnChooser={true} showColumnMenu={true} allowPaging={true} groupSettings={groupOptions} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} pageSettings={{ pageCount: 3, pageSizes: true }} load={load} toolbarClick={toolbarClick} allowExcelExport={true} allowPdfExport={true}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='180' isPrimaryKey={true} validationRules={orderidRules}></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='180' format='C2' editType='numericedit' validationRules={validationRule} />
                <ColumnDirective field='CustomerName' headerText='Name' width='180' validationRules={validationRule}></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='180'></ColumnDirective>
              </ColumnsDirective>
              <AggregatesDirective>
                <AggregateDirective>
                  <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' format='C2' footerTemplate={'<span>Sum: ${Sum}</span>'}> </AggregateColumnDirective>
                  </AggregateColumnsDirective>
                </AggregateDirective>
              </AggregatesDirective>
              <Inject services={[Filter, Sort, Group, Edit, Toolbar, Aggregate, Page, ExcelExport, PdfExport, ColumnChooser, ColumnMenu]} />
            </GridComponent>
          )}
        </div>
        <div className='col-md-3 property-section'>
          <PropertyPane title='Properties'>
            <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%', marginBottom: '20px' }}>
              <tbody>
                <tr>
                  <td>
                    <div>Enable horizontal row mode</div>
                  </td>
                  <td>
                    <div>
                      <CheckBoxComponent ref={(scope) => { checkboxObj = scope as CheckBoxComponent; }} change={onChange.bind(this)} ></CheckBoxComponent>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div>
        <div id="action-description">
          <p>This sample demonstrates optimal viewing experience and improve usability on small screens.</p>
        </div>
        <div id='description'>
          <p>
            The <code><a target="_blank" className="code"
              href="https://ej2.syncfusion.com/react/documentation/api/grid/#enableadaptiveui">
              enableAdaptiveUI</a></code> property is used to render the grid filter, sort, edit, pager and toolbars like column chooser, pdf export, excel export, etc... dialogs adaptively and
            <code><a target="_blank" className="code"
              href="https://ej2.syncfusion.com/react/documentation/api/grid/#rowrenderingmode"> rowRenderingMode</a></code>
            property is used to render the grid row elements in the following directions,
          </p>
          <ul>
            <li><code>Horizontal</code> - Renders the grid row elements in the horizontal direction.</li>
            <li><code>Vertical</code> - Renders the grid row elements in the vertical direction.</li>
          </ul>
          <p> In this sample, you can change the row direction by using the properties panel checkbox
          </p>
          <p> In this demo, the column menu feature is only supported for the Grid <code>rowRenderingMode</code> mode as <code>Vertical</code>.
            This feature includes grouping, sorting, autofit, filter, and column chooser feature.
          </p>
          <p>
            More information on the rowRenderingMode configuration can be found in this <a target="_blank"
              href="https://ej2.syncfusion.com/react/documentation/api/grid/#rowrenderingmode"> documentation section</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Adaptive;
