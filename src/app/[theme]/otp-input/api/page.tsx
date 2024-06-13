'use client';
import { useState, FormEvent } from 'react';
import { OtpInputComponent, NumericTextBoxComponent, OtpInputEventArgs } from '@syncfusion/ej2-react-inputs';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import PropertyPane from '@/common/property-pane';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './api.css';

const Default = () => {
    const [otpTextboxValue, setOtpValue] = useState("5201");
    const [separator, setSeparator] = useState("-");
    const [placeholder, setPlaceholder] = useState("X");
    const [length, setLength] = useState(4);
    const [disabled, setDisabled] = useState(false);
    const [validationValue, setValidationvalue] = useState("");
    const [modeValue, setModevalue] = useState("outlined");

    const modeData: { [key: string]: Object }[] = [
        { Mode: 'outlined', Text: 'Outlined' },
        { Mode: 'underlined', Text: 'Underlined' },
        { Mode: 'filled', Text: 'Filled' }
    ];
    const fields: object = { value: 'Mode', text: 'Text' };
    const validationData: { [key: string]: Object }[] = [
        { Status: '', Text: 'None' },
        { Status: 'e-success', Text: 'Success' },
        { Status: 'e-warning', Text: 'Warning' },
        { Status: 'e-error', Text: 'Error' }
    ];
    const validationFields: object = { value: 'Status', text: 'Text' };

    function OtpValueChange(args: OtpInputEventArgs): void{
        setOtpValue(args.value as string);
    }

    function TextBoxValueChanged(args: FormEvent<HTMLInputElement>): void{
        setOtpValue((args.target as HTMLInputElement).value);
    }

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className="col-lg-8">
                    <div id="otp-container">
                        <OtpInputComponent id="basicOtp" separator={separator} placeholder={placeholder} value={otpTextboxValue} disabled={disabled} length={length} cssClass={validationValue} stylingMode={modeValue} input={OtpValueChange} ></OtpInputComponent>
                    </div>
                </div>
                <div className="col-lg-4 property-section">
                    <PropertyPane title='Properties'>
                        <table id="property" title="Properties"  className='property-panel-table' >
                            <tbody>
                                <tr>
                                    <td className="property-styles">Styling Mode</td>
                                    <td>
                                        <DropDownListComponent id="otp-stylingMode" dataSource={modeData} fields={fields} value={modeValue} change={(args) => setModevalue(args.value)}> </DropDownListComponent>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="otpvalue" className="property-styles"> OTP Value </label></td>
                                    <td> <input id="otpvalue" className='e-input' value={otpTextboxValue} maxLength={length} onInput={TextBoxValueChanged}/></td>
                                </tr>
                                <tr>
                                    <td className="property-styles">Validation Status</td>
                                    <td>
                                        <DropDownListComponent id="otp-validation" dataSource={validationData} fields={validationFields} value={validationValue} change={(args) => setValidationvalue(args.value)}> </DropDownListComponent>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="plcaeholder" className="property-styles"> PlaceHolder </label></td>
                                    <td> <input id="placeholder" className='e-input' value={placeholder} maxLength={length} onInput={(args) => setPlaceholder((args.target as HTMLInputElement).value)} /> </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="separator" className="property-styles"> Separator </label></td>
                                    <td> <input id="separator" className='e-input' value={separator} maxLength={1} onInput={(args) => setSeparator((args.target as HTMLInputElement).value)}/> </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="length" className="property-styles"> Length </label></td>
                                    <td> <NumericTextBoxComponent id="length" min={1} max={10} value={length} change={(args) => setLength(args.value)}> </NumericTextBoxComponent> </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="disabled" className="property-styles"> Disabled </label></td>
                                    <td> <SwitchComponent id="disabled" checked={disabled} change={(args) => setDisabled(args.checked)}> </SwitchComponent> </td>
                                </tr>
                            </tbody>
                        </table>
                    </PropertyPane>
                </div>

                <div id="action-description">
                    <p>
                        This sample demonstrates the properties available in the the OTP Input component.
                    </p>
                </div>
                <div id="description">
                    <p>
                        This example showcases the usage of the <code>stylingMode</code>, <code>placeholder</code>, <code>separator</code>, <code>value</code>, <code>cssClass</code>, <code>length</code>, and <code>disabled</code> properties in the OTP Input component.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Default;
