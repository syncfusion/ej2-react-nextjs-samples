'use client';
import { useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import '../pdf.component.css';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

function ESigningPdfForms() {

    let viewer = useRef<PdfViewerComponent>(null);
    let userMenu = useRef<DropDownListComponent>(null);
    let dialogInstance = useRef<DialogComponent>(null);
    let btnElement = useRef<ButtonComponent>(null);
    let currentUser = useRef<string>('anne@mycompany.com');
    let status = useRef<boolean>(false);
    let preventChange = useRef<boolean>(false);
    let borderColor = useRef<string>('2px solid green');
    let finishedBackground = useRef<string>('#daeaf7ff');
    let opacityValue = useRef<string>('0.5');
    let anneBackground = useRef<string>('#00800060');
    let andrewBackground = useRef<string>('#ff000060');
    let buttons = [
        {
            click: dlgButtonClick,
            buttonModel: {
                content: 'OK',
                isPrimary: true,
            }
        }
    ];
    let userDetails: { [key: string]: Object }[] = [
        { Name: 'Anne Dodsworth', Eimg: 'profile1', Mail: 'anne@mycompany.com', fieldIds: [] },
        { Name: 'Andrew Fuller', Eimg: 'profile2', Mail: 'andrew@mycompany.com', fieldIds: [] },
    ];

    const fields = { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' };
    const dropdownComponent = () => {
        return (
            <div id='e-pv-e-sign-user-field' style={{ width: '245px', height: '37px', left: '0px' }}>
                <div className='e-pv-e-sign-user-dropdown' >
                    <DropDownListComponent ref={userMenu} id='userMenu' select={userChange} index={0} popupWidth={'215px'} dataSource={userDetails} width={'200px'} fields={fields} itemTemplate={itemTemplate} valueTemplate={valueTemplate} ></DropDownListComponent>
                </div>
            </div>
        );
    }

    const itemTemplate = (data) => {
        return (
            <div style={{ display: 'flex' }}>
                <img
                    className="e-pv-e-sign-empImage"
                    style={{ maxHeight: '35px', marginTop: '7px', marginLeft: '4px', borderRadius: '50%', border: `1px solid ${data.Mail === 'andrew@mycompany.com' ? 'red' : 'green'}` }}
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

    const buttonComponent = () => {
        return (<ButtonComponent ref={btnElement} id='e-pv-e-sign-finishbtn' cssClass="e-outline" onClick={finishSigning} created={btnCreated}>Finish Signing</ButtonComponent>);
    }

    const btnCreated = () => {
        btnElement.current.disabled = true;
    }

    const finishSigning = () => {
        viewer.current.serverActionSettings.download = "FlattenDownload";
        viewer.current.download();
        viewer.current.serverActionSettings.download = "Download";
    }

    const downloadEnd = (args: any) => {
        viewer.current.load(args.downloadDocument, null);
        btnElement.current.disabled = true;
        userMenu.current.enabled = false;
    }

    const updateUserFormField = () => {
        var otherFormFieldDetails = viewer.current.formFieldCollections.filter(formField => (formField.customData as any)?.author === "andrew");
        var currentFormFieldDetails = viewer.current.formFieldCollections.filter(formField => (formField.customData as any)?.author === "anne");
        if (currentUser.current === 'anne@mycompany.com') {
            otherFormFieldDetails.forEach(field => {
                if (field.value !== '') {
                    const mainFieldUpdateData = {
                        backgroundColor: finishedBackground.current,
                        opacity: opacityValue.current,
                        isReadOnly: true
                    };

                    viewer.current.formDesigner.updateFormField(field, mainFieldUpdateData as any);

                    currentFormFieldDetails.forEach(currentField => {
                        const currentFieldUpdateData = {
                            backgroundColor: anneBackground.current,
                            opacity: opacityValue.current,
                            isReadOnly: true
                        };

                        viewer.current.formDesigner.updateFormField(currentField, currentFieldUpdateData as any);
                    });
                }
                const otherUserField = document.getElementById(field.id + '_content_html_element');
                if (otherUserField) {
                    const currentFormField = viewer.current.formFieldCollections.find(formField => formField.id === field.id);
                    if (currentFormField.type !== 'DropDown' && otherUserField) {
                        if (!currentFormField.value) {
                            viewer.current.formDesignerModule.updateFormField(currentFormField, { visibility: 'hidden' } as any);
                        }
                    } else {
                        if (currentFormField.value.length !== 0 && otherUserField) {
                            viewer.current.formDesignerModule.updateFormField(currentFormField, { visibility: 'hidden' } as any);
                        }
                    }
                }
            });
        }
        else {
            validation(currentFormFieldDetails);
            if (!status.current) {
                currentFormFieldDetails.forEach(field => {
                    const currentFieldUpdateData = {
                        backgroundColor: finishedBackground.current,
                        opacity: opacityValue.current,
                        isReadOnly: true
                    };
                     viewer.current.formDesigner.updateFormField(field, currentFieldUpdateData as any);

                    otherFormFieldDetails.forEach(otherField => {
                        const otherFieldUpdateData = {
                            backgroundColor: andrewBackground.current,
                            opacity: opacityValue.current,
                            isReadOnly: false
                        };

                        viewer.current.formDesigner.updateFormField(otherField, otherFieldUpdateData as any);
                    });
                });
                otherFormFieldDetails.forEach(field => {
                    const otherUserField = document.getElementById(field.id + '_content_html_element');
                    if (otherUserField) {
                        viewer.current.formDesignerModule.updateFormField(field, { visibility: 'visible' } as any);
                    }
                });
            }
        }
    }

    function dlgButtonClick(): void {
        status.current = false;
        dialogInstance.current.hide();
    }

    const validation = (args: any) => {
        var errorMessage = "Required Field(s): ";
        var forms = args;
        var flag = false;
        var isAllFieldFilled = true;
        var radioGroupName = "";

        for (var i = 0; i < forms.length; i++) {
            var text = "";

            if (forms[i].type.toString() == "Checkbox" && forms[i].isChecked == false) {
                text = forms[i].name;
                isAllFieldFilled = false;
            }
            else if (forms[i].type == "RadioButton" && flag == false) {
                radioGroupName = forms[i].name;
                if (forms[i].isSelected == true)
                    flag = true;
            }
            else if (forms[i].type.toString() != "Checkbox" && forms[i].type != "RadioButton" && (forms[i].value === "" || ((typeof args.newValue === 'string') && args.newValue === ""))) {
                text = forms[i].name;
                isAllFieldFilled = false;
            }
            else if (forms[i].type.toString() == "DropdownList" && forms[i].value.length == 0) {
                text = forms[i].name;
                isAllFieldFilled = false;
            }
            if (text != "") {
                if (errorMessage == "Required Field(s): ") {
                    errorMessage += text;
                }
                else {
                    errorMessage += ", " + text;
                }
            }

        }
        if (!flag && radioGroupName != "") {
            if (errorMessage == "Required Field(s): ")
                errorMessage += radioGroupName;
            else
                errorMessage += ", " + radioGroupName;
            isAllFieldFilled = false;
        }
        if (errorMessage != "Required Field(s): ") {
            status.current = true;
            dialogInstance.current.content = errorMessage;
            dialogInstance.current.show();
            preventChange.current = true;
        }
        else {
            status.current = false;
            preventChange.current = false;

        }
    }

    const fieldChange = (args: any) => {
        var errorMessage = "Required Field(s): ";
        var forms = viewer.current.formFieldCollections;
        var flag = false;
        var isAllFieldFilled = true;
        var radioGroupName = "";
        for (var i = 0; i < forms.length; i++) {
            var text = "";
            {
                if (forms[i].type.toString() == "Checkbox" && forms[i].isChecked == false) {
                    text = forms[i].name;
                    isAllFieldFilled = false;
                }
                else if (forms[i].type == "RadioButton" && flag == false) {
                    radioGroupName = forms[i].name;
                    if (forms[i].isSelected == true)
                        flag = true;
                }
                else if (forms[i].type.toString() != "Checkbox" && forms[i].type != "RadioButton" && (forms[i].value === "" || ((typeof args.newValue === 'string') && args.newValue === ""))) {
                    text = forms[i].name;
                    isAllFieldFilled = false;
                }
                else if (forms[i].type.toString() == "DropdownList" && forms[i].value.length == 0) {
                    text = forms[i].name;
                    isAllFieldFilled = false;
                }
                if (text != "") {
                    if (errorMessage == "Required Field(s): ") {
                        errorMessage += text;
                    }
                    else {
                        errorMessage += ", " + text;
                    }
                }
            }
        }
        if (!flag && radioGroupName != "") {
            if (errorMessage == "Required Field(s): ")
                errorMessage += radioGroupName;
            else
                errorMessage += ", " + radioGroupName;
            isAllFieldFilled = false;
        }
        if (isAllFieldFilled) {
            btnElement.current.disabled = false;
        } else {
            btnElement.current.disabled = true;
        }
    }
    const userChange = (args: any) => {
        currentUser.current = args.itemData.Mail;
        if (args.itemData.Mail == "andrew@mycompany.com") {
            borderColor.current = '1px solid red';

        } else {
            borderColor.current = '1px solid green';
        }
        updateUserFormField();
        if (preventChange.current) {
            args.cancel = true;
        }
    }

    const documentLoad = () => {
        viewer.current.designerMode = false;
        updateUserFormField();
    } 

    return (<div>
        <div>
            <div className='e-pv-e-sign control-section'>
                <ToolbarComponent id="e-pv-e-sign-toolbar-user-viewer">
                    <ItemsDirective>
                        <ItemDirective template={dropdownComponent} ></ItemDirective>
                        <ItemDirective align='Right' template={buttonComponent} ></ItemDirective>
                    </ItemsDirective>
                </ToolbarComponent>
                <PdfViewerComponent ref={viewer} id="container" enableNavigationToolbar={false} enableToolbar={false} enableFormDesignerToolbar={false} documentPath="https://cdn.syncfusion.com/content/pdf/eSign_filling.pdf" resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib" serviceUrl='https://services.syncfusion.com/react/production/api/pdfviewer' downloadFileName='eSign_filling.pdf' documentLoad={documentLoad} formFieldPropertiesChange={fieldChange} downloadEnd={downloadEnd} style={{ 'height': '640px' }}>
                    <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]} />
                </PdfViewerComponent>
                <div id='e-pv-e-sign-dialog-target'>
                    <DialogComponent ref={dialogInstance} minHeight='50px' isModal={true} width='350px' buttons={buttons} visible={status.current} target='#e-pv-e-sign-dialog-target'></DialogComponent>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This sample enables two different users to sign the document. The first user must fill out and sign their designated fields, which are visible only to them. Once the first user has completed their section, the second user can be selected to fill out and sign their own fields. After both users have signed, the document can be finalized.</p>
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
export default ESigningPdfForms;