# Next.js Sample Browser

A Next.js sample browser has been implemented to demonstrate the seamless compatibility and easy integration of Syncfusion React components. It is built using the Next.js framework, which provides server-side rendering and generates static websites for React applications.

Explore the Syncfusion Next.js sample browser [here](https://ej2.syncfusion.com/nextjs/demos/).

## Adding your component and sample folder

* In the Next.js sample browser, we utilize the built-in [app router](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) for sample navigation. Therefore, it's necessary to create a folder for each control in the "src/app/[theme]/" location. For instance, if you're adding a grid control, create a folder named "grid" in the "src/app/[theme]/" location.

* Inside the "grid" folder, establish a separate folder for each sample. For instance, to add a default sample, create a folder named "default" within the "src/app/[theme]/grid/" location. Then include the sample, ensuring that the sample file is named **page.tsx**.

```
src
  └── app
      └── [theme]
          └── grid
              └── default
                  └── page.tsx
                  adaptive-layout
                    └── page.tsx
```

> Do not use whitespace at any cause in folder’s name. Use “-” instead of space.

## Adding the sample code

Add the sample component `page.tsx` file to the sample folder. The following steps need to be considered when creating a sample:

 * Add the `use client` directive at the top of the file to render our components on the client side.
 * Ensure that the sample tag is enclosed within the "control-section" div.
 * For all samples, a description needs to be added. Place the sample description within a div tag with the id set to **description**.

```javascript
'use client';
// Add your import statements here

const Default = () => {
  return (
    <div className='control-pane'>
      <div className='control-section'>
        {/* sample component tags */}
      </div>
      <div id="description">
        {/* sample description */}
      </div>
    </div>
  );
};

export default Default;
```
Refer this [sample](https://github.com/syncfusion/ej2-nextjs-react-samples/blob/master/src/app/%5Btheme%5D/grid/default/page.tsx) for example sample component.

## Adding property section

To add  the "property pane”  in the sample, use the `PropertyPane` tag from "@/common/property-pane". Configure your sample properties as like below code snippet.

```
import PropertyPane from '@/common/property-pane';

<PropertyPane title='Properties'>
                <table id="property" title="Properties" className='property-panel-table' style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>
                            <div className="col-md-4" style={{ paddingTop: "8px" }}>
                                GridLines
                    </div>
                        </td>
                        <td style={{ width: '70%', paddingRight: '10px' }}>
                            <div>
                                <select id="ddl" name="ddl" onChange={this.change.bind(this)} className="form-control" style={{ padding: "6px" }} ref={d => this.dropElement = d}>
                                    <option value="default">Default</option>
                                    <option value="both">Both</option>
                                    <option value="none">None</option>
                                    <option value="horizontal">Horizontal</option>
                                    <option value="vertical">Vertical</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </PropertyPane>

```
Refer the [PropertyPane sample](https://github.com/syncfusion/ej2-nextjs-react-samples/blob/master/src/app/%5Btheme%5D/grid/adaptive-layout/page.tsx) for propertyPane example.

**Fields Description:**

 * _path :_ Specifies the sample router path. Path must be same as "componentName/sampleFolderName".
  
 * _component :_ Specifies the name of the sample component.
  
 * _name :_ Specifies the sample name to be displayed.
  
 * _order :_ Specifies the order in which sample to be displayed.
  
 * _category :_ Specifies the sample category.

> set **hideOnDevice** as true if you want to hide a sample in devices.

## Configure Sample List

* Create a file called config.tsx in the control folder. For instance, if you're adding a grid control, create a file named "config.tsx" in the "src/app/[theme]/grid/" location.

* Add your sampleOrder array in the config file as like below

```js
export const GridSampleOrder: Object = [
  { 
    'path': 'grid/default', 
    'component': 'Default', 
    'name': 'Default Functionalities', 
    'order': '01', 
    'description': 'This demo for Essential JS 2 grid component shows the default rendering of the grid component with minimum configuration.', 
    'category': 'Data Grid', 
    'api': '{"GridComponent":["columns","dataSource"] }' 
    }
];
```

* By default, it displays the component sample alone in the source tab content. If you want to display multiple files, such as a styles file in the source tab, you can add the path and display name in the `soruceFiles` property to the `config.tsx` file, which is placed for the corresponding component. We need to add a '/' forward slash initially with basePath in the sourceFiles path value, like below:

```js
  {
    'path': 'grid/overview', 'component': 'OverView', 'name': 'Overview', 
    'sourceFiles': [
        { 'displayName': 'overview.tsx', 'path': '/nextjs/demos/src/grid/overview/page.tsx' 
        }, 
        { 'displayName': 'overview.css', 'path': '/nextjs/demos/src/grid/overview/grid-overview.css' 
        }
    ]
  }
```

* Add your samples in `samplelist.tsx` located in “/src/common” folder.

 1. Import your sampleOrder array from the component config file.
 2. Add your samples in samplesList as like below

```js
import { GridSampleOrder } from '@/app/[theme]/grid/config';

export let samplesList: any = [

    {
        'name': 'Grid', 'category': 'Grids', 'order': '02', 'path': 'grid', 'samples': GridSampleOrder
    }
];
```

## Adding your control dependency

Add your dependency in `package.json` file inside the dependencies.

> Here, '\*' Specifies that install the latest published package from the online. '\*' is recommended for Syncfusion packages.

```
"dependencies": {
        "@syncfusion/ej2-react-grids": "*"
},
```

## Adding Images

* Add your images in the `public/images` folder. For instance, if you're adding a grid control, create a folder named "grid" in the "public/images" location. Then add your images to the "grid" folder.

```
public
  └── images
      └── grid
          └── grid-overview.png
```

* You can utilize the [Next.js Image component](https://nextjs.org/docs/pages/api-reference/components/image) to render the images in the sample. Refer to the below code snippet to display the image in the sample.

```js
import Image from 'next/image';

function Default() {
  return (
    <div>
      <Image src="/nextjs/demos/images/grid/grid-overview.png" alt="Grid Overview" width={500} height={300} />
    </div>
  );
}
```

* If you don't want to set the width and height of the image in the element, import the image and set the src value without specifying width and height.

```js
import Image from 'next/image';
import emptyRecordImage from '@/images/grid/emptyRecordTemplate.svg';

function Default() {
  return (
    <div>
      <Image src={emptyRecordImage} alt="Empty Record" />
    </div>
  );
}
```

## Installing

Use the below command to install all dependent packages.

```
npm install
```

## Build and Run in Development Mode

To run the sample browser in development mode, use the following command. This command will hot-reload the sample changes in the browser, so you don't need to rerun the command after making changes to the sample files.

```
npm run dev
```
> If you are adding new samples or components, you need to rerun this command to generate locale, and common sample configurations.

## Build and Run in Production Mode

Use the commands below to build the sample browser in production mode. These commands compile the source files and run the sample browser faster in the browser. If you make any changes to the sample file, you need to run the commands below again.

```
npm run build

npm run start
```