/**
 * ComboBox Grouping and Icons Samples
 */
'use client';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import './icons.css';
import data from '../dataSource.json';

const Grouping = () => {
    const temp: string = 'vegetableData';
    //define the data with category
    const vegetableData: { [key: string]: Object }[] = data[temp];
    // map the groupBy field with Category column
    const groupFields: Object = { groupBy: 'Category', text: 'Vegetable', value: 'Id' };
    const tempData: string = 'socialMedia';
    //define the data with icon class
    const socialMediaData: { [key: string]: Object }[] = data[tempData];
    // map the iconCss field with Class column
    const iconFields: Object = { text: 'SocialMedia', value: 'Id', iconCss: 'Class' };
    return (
        <div className='control-pane'>
            <div className='control-section' id='comboIcon'>
                <div className='col-lg-6'>
                    <div id="group">
                        <h4>Grouping</h4>
                        <ComboBoxComponent id="grouping" dataSource={vegetableData} fields={groupFields} placeholder="Select a vegetable" popupHeight="220px" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div id="icon">
                        <h4>Icons</h4>
                        <ComboBoxComponent id="icons" dataSource={socialMediaData} fields={iconFields} placeholder="Select a social media" popupHeight="220px" />
                    </div>
                </div>
            </div>
            <div id="action-description">
                <p>This sample demonstrates the grouping and icons supports of the ComboBox. Type a character in the ComboBox element or click on the drodown icon to choose an item from the categorized list/icons list.</p>
            </div>
            <div id="description">
                <p>The ComboBox allows to group the relevant items under a corresponding category by mapping the <code>groupBy</code> field, and allows to load the list items with icons.</p>
                <p>The grouping sample illustrates how the vegetables are grouped based on its category.</p>
                <p>The second ComboBox is populated with icons that is rendered by mapping the <code>iconCss</code> field.</p>
                <p> More information on the grouping feature configuration can be found in the
                    <a href="http://ej2.syncfusion.com/react/documentation/combo-box/grouping.html" target="_blank"> documentation section</a>.
                </p>
            </div>
        </div>
    );
}
export default Grouping;