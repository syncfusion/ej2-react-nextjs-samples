'use client';
import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import './default.css';

const Default = () => {
    return (
        <div className='control-pane'>
            <div className="control-section">
                <div id="default-container">
                    <div className="otp-content">
                        <label htmlFor="numberOtp">Default (Number) OTP Input</label>
                        <OtpInputComponent id="numberOtp" value={"1234"} type='number'></OtpInputComponent>
                    </div>
                    <div className="otp-content">
                        <label htmlFor="textOtp">Text OTP Input</label>
                        <OtpInputComponent id="textOtp" value={"e3c7"} type='text'></OtpInputComponent>
                    </div>
                    <div className="otp-content">
                        <label htmlFor="passwordOtp">Password OTP Input</label>
                        <OtpInputComponent id="passwordOtp" value={"1234"} type='password'></OtpInputComponent>
                    </div>
                </div>
            </div>
            <div id="action-description">
                <p>
                    This sample demonstrates the default functionalities of the OTP Input component. This component provides the user to enter the otp values such that the verification process in login, tickets booking can be done easily.
                </p>
            </div>
            <div id="description">
                <p>
                    This example showcases the usage of the <code>type</code>, and <code>value</code> properties which defines the basic rendering of the OTP Input component. You can just enter the otp values based on the types mentioned.
                </p>
            </div>
        </div>
    )
}
export default Default;
