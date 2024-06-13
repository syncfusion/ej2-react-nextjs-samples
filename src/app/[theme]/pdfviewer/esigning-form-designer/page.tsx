'use client';
import { useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import '../pdf.component.css';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ItemDirective, ItemsDirective, SidebarComponent, ToolbarComponent } from '@syncfusion/ej2-react-navigations';

function ESignFormDesigner() {

    let viewer = useRef<PdfViewerComponent>(null);
    var userMenu = useRef<DropDownListComponent>(null);
    let sidebarobj = useRef<SidebarComponent>(null);
    let currentUserColorId: string = 'ff0000';
    let currentUser = useRef<string>('engineer@mycompany.com');
    let borderColor = useRef<string>('2px solid red');
    let userDetails: { [key: string]: Object }[] = [
        { Name: 'Andrew Fuller', Eimg: 'profile2', Mail: 'andrew@mycompany.com', fieldIds: [] },
        { Name: 'Anne Dodsworth', Eimg: 'profile1', Mail: 'anne@mycompany.com', fieldIds: [] },
    ];
    const fields = { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' };

    const dropdownComponent = () => {
        return (
            <div id='e-pv-e-sign-user-field' style={{ width: '200px', height: '37px', left: '0px' }}>
                <div className='e-pv-e-sign-user-dropdown'>
                    <DropDownListComponent ref={userMenu} id='e-pv-e-sign-userMenu' select={userChange} index={0} popupWidth={'218px'} dataSource={userDetails} width={'200px'} fields={fields} itemTemplate={itemTemplate} valueTemplate={valueTemplate} ></DropDownListComponent>
                </div>
            </div>
        );
    }

    const itemTemplate = (data) => {
        return (
            <div style={{ display: 'flex' }}>
                <img className="e-pv-e-sign-empImage" style={{ maxHeight: '35px', marginTop: '7px', marginLeft: '4px', borderRadius: '50%', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}` }}
                    src={'/nextjs/demos/images/pdfviewer/' + data['Eimg'] + '.png'} />
                <div>
                    <div className="e-pv-e-sign-ename" style={{ height: '18px', fontSize: '14px' }}> {data.Name} </div>
                    <div className="e-pv-e-sign-job" style={{ fontSize: '12px' }} > {data.Mail} </div>
                </div>
            </div>
        );
    }

    const valueTemplate = (data) => {
        return (<div className="e-pv-e-sign valueTemplate" style={{ display: 'flex' }}>
            <img className="e-pv-e-sign-value" style={{ borderRadius: '20px', border: borderColor.current }} src={'/nextjs/demos/images/pdfviewer/' + data['Eimg'] + '.png'} height="32px" width="32px" alt="employee" />
            <div>
                <div className="e-pv-e-sign-name" style={{ fontSize: '12px', marginLeft: '16px', alignContent: 'center' }}> {data.Name} </div>
                <div className="e-pv-e-sign-job" style={{ fontSize: '10px', marginLeft: '16px', alignContent: 'center' }}> {data.Mail} </div>
            </div>
        </div>);
    };
   
    const textBox = () => {
        viewer.current.formDesignerModule.setFormFieldMode("Textbox");
    }

    const passWord = () => {
        viewer.current.formDesignerModule.setFormFieldMode("Password");
    }

    const checkBox = () => {
        viewer.current.formDesignerModule.setFormFieldMode("CheckBox");
    }

    const radioButton = () => {
        viewer.current.formDesignerModule.setFormFieldMode("RadioButton");
    }

    const dropDown = () => {
        viewer.current.formDesignerModule.setFormFieldMode("DropDown");
    }

    const listBox = () => {
        viewer.current.formDesignerModule.setFormFieldMode("ListBox");
    }

    const signature = () => {
        viewer.current.formDesignerModule.setFormFieldMode("SignatureField");
    }

    const initial = () => {
        viewer.current.formDesignerModule.setFormFieldMode("InitialField");
    }

    const addFormField = (args: any) => {
        var col = currentUserColorId === 'ff0000' ? 'red' : 'green';
        currentUser.current = (userMenu.current.element as HTMLInputElement).value;
        viewer.current.formDesigner.updateFormField(args.field.id, { backgroundColor: col, opacity: 0.5 } as any);
        if ((userMenu.current.element as HTMLInputElement).value === 'andrew@mycompany.com') {
            viewer.current.formDesigner.updateFormField(viewer.current.retrieveFormFields()[(viewer.current.formFieldCollections).length - 1], { customData:{author :'andrew'} } as any);
        }
        else {
            viewer.current.formDesigner.updateFormField(viewer.current.retrieveFormFields()[(viewer.current.formFieldCollections).length - 1], { customData:{author : 'anne' }} as any);
        }
        var currentUserDetails = userDetails.filter(userDetail => userDetail.Mail === currentUser.current)[0];
        var currentFormField = viewer.current.formFieldCollections.filter(formField => formField.id === args.field.id)[0];
        (currentUserDetails.fieldIds as any).push(currentFormField);
    }

    const userChange = (args: any) => {
        currentUser.current = args.itemData.Mail;
        if (args.itemData.Mail == "andrew@mycompany.com") {
            borderColor.current = '1px solid red';
            currentUserColorId = 'ff0000';
        } else {
            borderColor.current = '1px solid green';
            currentUserColorId = '00ff00';
        }
    }

    const documentLoad = () => {
        viewer.current.designerMode = true;
    }

    const downLoadFile = () => {
        viewer.current.download();
    }

    return (<div>
        <div className='e-pv-e-sign control-section' >
            <div className="e-pv-e-sign-property-sec" >
                <ToolbarComponent id="e-pv-e-sign-toolbar-user-viewer">
                    <ItemsDirective>
                        <ItemDirective template={dropdownComponent} id='e-pv-e-sign-toolbarLeft-userMenu' ></ItemDirective>
                        <ItemDirective prefixIcon='e-icons e-download' text='Download' align='Right' tooltipText="downLoad" id='e-pv-e-sign-save' click={downLoadFile}></ItemDirective>
                    </ItemsDirective>
                </ToolbarComponent>
            </div>
            <div style={{ display: 'flex', position: 'relative' }}>
                <SidebarComponent id="e-pv-e-sign-defaultSidebar" ref={sidebarobj} className="e-pv-e-sign-default-sidebar" width="200px" enableGestures={false}>
                    <div className='e-pv-e-sign-content-wrapper' style={{ marginLeft: '10px', marginTop: '25px' }} >
                        <div className="e-pv-e-sign-user-label" style={{ marginLeft: '12px', fontSize: '16px', marginBottom: '15px', fontWeight: '500px' }}>
                            Fields
                        </div>
                        <div style={{ display: 'flex' }}>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='Signature' onClick={signature}>
                                <span className="e-pv-handwritten-icon e-pv-icon" style={{ fontSize: '18px' }}></span>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Signature</span>
                            </ButtonComponent>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='TextBox' onClick={textBox}>
                                <i className="e-icons e-text-form" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Textbox</span>
                            </ButtonComponent>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='Password' onClick={passWord}>
                                <i className="e-icons e-password" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Password</span>
                            </ButtonComponent>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='CheckBox' onClick={checkBox}>
                                <i className="e-icons e-check-box" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Checkbox</span>
                            </ButtonComponent>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='RadioButton' onClick={radioButton}>
                                <i className="e-icons e-radio-button" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Radio</span>
                            </ButtonComponent>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='DropDown' onClick={dropDown}>
                                <i className="e-icons e-drop-down" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Dropdown</span>
                            </ButtonComponent>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='ListBox' onClick={listBox}>
                                <i className="e-icons e-list-unordered" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Listbox</span>
                            </ButtonComponent>
                            <ButtonComponent className='e-pv-e-sign-form-field-property e-outline' title='Initial' onClick={initial}>
                                <i className="e-icons e-font-name" style={{ fontSize: '18px' }}></i>
                                <span style={{ fontSize: '12px', marginTop: '11px' }}>Initial</span>
                            </ButtonComponent>
                        </div>
                    </div>
                </SidebarComponent>
                <div style={{ width: 'calc(100% - 200px)' }}>
                    <PdfViewerComponent ref={viewer} id="container" enableNavigationToolbar={false} enableToolbar={false} documentPath="https://cdn.syncfusion.com/content/PDFViewer/Fill+and+Sign.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib" serviceUrl='https://services.syncfusion.com/react/production/api/pdfviewer' documentLoad={documentLoad} formFieldAdd={addFormField} downloadFileName='eSign_designMode.pdf' style={{ 'height': '640px' }}>
                        <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]} />
                    </PdfViewerComponent>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This sample enables the design of a PDF form that accommodates signatures from two different users. The form includes distinct fields for each user: when the first user is selected, specific fields can be added that apply only to that user. Upon switching the user via the dropdown menu, new fields can be added for the second user. The fields for each user are distinguishable by different background colors.</p>
        </div>
        <div id="description">            
            <p>
                More information on the PDF Viewer instantiation can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started">
                    documentation section
                </a>.
            </p>
        </div>
    </div>
    );
}
export default ESignFormDesigner;