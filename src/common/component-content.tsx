'use client';
import { useEffect, useState } from 'react';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'
import { TabComponent } from '@syncfusion/ej2-react-navigations';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { Ajax, Browser, createElement, detach, select, SanitizeHtmlHelper } from '@syncfusion/ej2-base';
import { useRouter, usePathname } from 'next/navigation';
import { category, apiList } from './sample-config';
import Link from 'next/link';
import { setSelectList } from './left-pane';

let tabContentToolbar: Element;
let hash: string[];
let sourceTab!: TabComponent;
let srcTab!: TabComponent;

/**
 * Prevent Tab Swipe Function
 */
function preventTabSwipe(e: any): void {
    if (e.isSwiped) {
        e.cancel = true;
    }
}

declare global {
    interface Window {
        apiList: any;
    }
};

/**
* copy clipboard function
*/
function copyCode() {
    let copyElem = select('#sb-source-tab .e-item.e-active .sb-src-code');
    let textArea: HTMLTextAreaElement = createElement('textArea') as HTMLTextAreaElement;
    textArea.textContent = copyElem.textContent.trim();
    document.body.appendChild(textArea);
    (textArea as HTMLTextAreaElement).select();
    document.execCommand('copy');
    detach(textArea);
    select('.copy-tooltip').ej2_instances[0].close();
}

export function processDeviceDependables(): void {
    if (Browser.isDevice || location.pathname.indexOf('pdfviewer') !== -1) {
        select('.sb-desktop-setting')?.classList.add('sb-hide');
    } else {
        select('.sb-desktop-setting')?.classList.remove('sb-hide');
    }
}

/**
 * Default Source Tab Selection
 */
export function selectDefaultTab(): void {
    if (sourceTab) {
        sourceTab.selectedItem = 0;
    }
    if (srcTab) {
        srcTab.selectedItem = 0;
    }
}

function Content({
    children, theme, removeOverlay, sampleOverlay, viewMobilePropPane
}: {
    children: React.ReactNode, theme: string, removeOverlay: Function, sampleOverlay: Function, viewMobilePropPane: Function
}) {
    const router = useRouter();
    let pathName = usePathname();
    let [apiGridData, setApiGridData] = useState([]);
    let [sourceTabItems, setSourceTabItems] = useState([]);
    let isMobile: boolean;
    //Regex for removing hidden
    const reg: RegExp = /.*custom code start([\S\s]*?)custom code end.*/g;
    const propRegex: RegExp = /-3/;

    function selectDefaultTab(): void {
        if (sourceTab) {
            sourceTab.selectedItem = 0;
        }
        if (srcTab) {
            srcTab.selectedItem = 0;
        }
    }

    useEffect(() => {
        select('#mobile-next-sample').addEventListener('click', onNextButtonClick);
        select('#mobile-prev-sample').addEventListener('click', onPrevButtonClick);
        selectDefaultTab();
        (window as Window).apiList = apiList;
        /**
         * Sample Control Name change
         */
        let sampleNameElement: Element;
        sampleNameElement = select('#component-name>.sb-sample-text');
        let controlElem: Element = select('[control-name="' + pathName.split('/')[2].toLowerCase() + '"]');
        let controlName: string = controlElem ? controlElem.getAttribute('name') as string : toInitiaUpper(hash[2]);
        sampleNameElement.innerHTML = controlName as string;
        sampleNameElement.setAttribute('title', controlName as string);

        /**
         * Bread Crumb
         */
        let catRegex = /(-| )/g;
        let sampleName;
        let categoryName;
        let curObj: any = category[pathName.split('/')[2]][pathName.split('/')[3]];
        categoryName = toInitiaUpper(curObj.category);
        sampleName = curObj.name;
        let categoryFlag: boolean = new RegExp(categoryName.replace(catRegex, ''), 'i').test(controlName.replace(catRegex, ''));
        let breadCrumbComponent: Element = select('.sb-bread-crumb-text>.category-text') as Element;
        let breadCrumSeperator: HTMLElement = select('.category-seperator') as HTMLElement;
        let breadCrumbSubCategory: HTMLElement = select('.sb-bread-crumb-text>.component') as HTMLElement;
        let breadCrumbSample: Element = select('.sb-bread-crumb-text>.crumb-sample');
        breadCrumbComponent.innerHTML = controlName;
        if (!categoryFlag) {
            breadCrumbSubCategory.innerHTML = categoryName;
            breadCrumbSubCategory.style.display = '';
            breadCrumSeperator.style.display = '';
        } else {
            breadCrumbSubCategory.style.display = 'none';
            breadCrumSeperator.style.display = 'none';
        }
        breadCrumbSample.innerHTML = sampleName;
        let title: HTMLElement = select('title') as HTMLElement;
        title.innerHTML = controlName + ' · ' + sampleName + ' · Syncfusion Next.js React UI Components';
        renderSourceTabContent();
        setNavButtonState();
        propertyPanelSettings();
        checkApiTableDataSource();
        setSelectList();
        removeOverlay();
    }, [pathName]);

    function toInitiaUpper(str: string) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    function checkApiTableDataSource() {
        if (!select('#content-tab').ej2_instances) {
            return;
        }
        let data = window.apiList[pathName.split('/').slice(2).join('/')] || [];
        if (!data.length) {
            select('#content-tab').ej2_instances[0].hideTab(2);
            setApiGridData([]);
        }
        else {
            select('#content-tab').ej2_instances[0].hideTab(2, false);
            setApiGridData(data);
        }
    }

    function onNextButtonClick(): void {
        selectDefaultTab();
        hash = location.pathname.split('/');
        let currentIndex: number = (window as any).sampleOrder.indexOf(hash.slice(4).join('/'));
        let nextList: string = (window as any).sampleOrder[currentIndex + 1];
        if (currentIndex !== -1) {
            router.push('/' + theme + '/' + nextList);
            sampleOverlay();
        }
        setSelectList();
    }
    function onPrevButtonClick(): void {
        selectDefaultTab();
        hash = location.pathname.split('/');
        let currentIndex: number = (window as any).sampleOrder.indexOf(hash.slice(4).join('/'));
        let prevList: string = (window as any).sampleOrder[currentIndex - 1];
        if (currentIndex !== -1) {
            router.push('/' + theme + '/' + prevList);
            sampleOverlay();
        }
        setSelectList();
    }

    /**
    * Sample Navigation
    */
    function toggleButtonState(id: string, state: boolean): void {
        let ele: HTMLButtonElement = document.getElementById(id) as HTMLButtonElement;
        if (ele) {
            let mobileEle: HTMLButtonElement = document.getElementById('mobile-' + id) as HTMLButtonElement;
            ele.disabled = state;
            mobileEle.disabled = state;
            if (state) {
                mobileEle.classList.add('e-disabled');
                ele.classList.add('e-disabled');
            } else {
                mobileEle.classList.remove('e-disabled');
                ele.classList.remove('e-disabled');
            }
        }
    }

    function setNavButtonState(): void {
        let curIndex: number = (window as any).sampleOrder.indexOf(location.pathname.split('/').slice(4).join('/'));
        let sampleLength: number = (window as any).sampleOrder.length - 1;
        if (curIndex === sampleLength) {
            toggleButtonState('next-sample', true);
        } else {
            toggleButtonState('next-sample', false);
        }
        if (curIndex === 0) {
            toggleButtonState('prev-sample', true);
        } else {
            toggleButtonState('prev-sample', false);
        }
    }

    function tabRendered(): void {
        let sampleNavigation: string = '<div class="sb-custom-item sample-navigation"><button id="prev-sample" role="tab" aria-label="Navigate to previous sample" class="sb-navigation-prev">' +
            '<span class="sb-icons sb-icon-Previous"></span></button><button id="next-sample" role="tab" aria-label="Navigate to next sample" class="sb-navigation-next">' +
            '<span class="sb-icons sb-icon-Next"></span></button></div>';
        let contentToolbarTemplate: string = sampleNavigation + '<div class="sb-icons sb-mobile-setting "></div>';

        tabContentToolbar = createElement('div', { className: 'sb-content-toolbar', innerHTML: contentToolbarTemplate });
        select('#sb-content-header').appendChild(tabContentToolbar);

        /**
         * code for copyToolTip
         */

        let previous: Tooltip = new Tooltip({
            content: 'Previous Sample'
        });
        previous.appendTo('#prev-sample');

        let next: Tooltip = new Tooltip({
            content: 'Next Sample'
        });
        select('#right-pane').addEventListener('scroll', function () {
            next.close();
            previous.close();
        });
        next.appendTo('#next-sample');
        select('#next-sample').addEventListener('click', onNextButtonClick);
        select('#prev-sample').addEventListener('click', onPrevButtonClick);
        select('.sb-mobile-setting').addEventListener('click', viewMobilePropPane);
        setNavButtonState();
        propertyPanelSettings();
    }

    function propertyPanelSettings(): void {
        let propBorder: HTMLElement;
        if (!select('.sb-property-border')) {
            propBorder = createElement('div', { className: 'sb-property-border' });
            select('.sb-sample-content-area').firstChild.appendChild(propBorder);
        }
        if (select('.sb-desktop-setting'))
            processDeviceDependables();
        let propPanel: Element = select('#control-content .property-section');
        propBorder = select('.sb-property-border');
        if (propPanel) {
            propPanel.classList.remove('sb-hide');
            if (propRegex.test(propPanel.className)) {
                propBorder.classList.add('sb-prop-md-3');
                propBorder.classList.remove('sb-prop-md-4');
            } else {
                propBorder.classList.add('sb-prop-md-4');
                propBorder.classList.remove('sb-prop-md-3');
            }
            propBorder.classList.remove('sb-hide');
        } else {
            propBorder.classList.add('sb-hide');
        }
        let mobileSetting: Element = select('.sb-mobile-setting');
        isMobile = window.matchMedia('(max-width:550px)').matches;
        if (isMobile && mobileSetting) {
            if (propPanel) {
                propPanel.classList.add('sb-hide');
                mobileSetting.classList.remove('sb-hide');
            } else {
                select('.sb-mobile-setting').classList.add('sb-hide');
            }
        }
    }

    function dynamicTab(e: any) {
        let blockEle: HTMLElement = select('#sb-source-tab > .e-content > #e-content-sb-source-tab_' + e.selectedIndex);
        let codeEle = blockEle.children[0];
        if (srcTab) {
            let sourceFile = srcTab.items[e.selectedIndex];
            codeEle.innerHTML = (sourceFile as any).data;
            codeEle.innerHTML = codeEle.innerHTML.replace(reg, '');
            highlightCode(codeEle, (sourceFile as any).properties.content.split('.')[1]);
            setTimeout(() => {
                let sbTabOverlay = select('.sb-tab-overlay');
                sbTabOverlay.classList.add('sb-hide');
            }, 300);
        }
    }

    function highlightCode(codeEle: any, fileType: any) {
        const types: { [key: string]: string } = {
            'tsx': 'text/typescript-jsx',
            'jsx': 'text/jsx',
            'css': 'text/css',
            'js': 'javascript',
            'json': 'application/json'
        };
        const parentEle = codeEle.parentNode;
        if (!parentEle.querySelector('.sb-src-code') && typeof window !== 'undefined') {
            const textELe = document.createElement('textarea');
            textELe.classList.add("sb-src-code");
            textELe.innerHTML = codeEle.innerHTML;
            parentEle.replaceChild(textELe, codeEle);
            (window as any).CodeMirror.fromTextArea(document.querySelector(`#${(parentEle as HTMLElement).id} .sb-src-code`), {
                mode: `${types[fileType]}`,
                theme: `${theme.includes('-dark') || theme === 'highcontrast' ? 'mbo' : 'default'}`
            });
        }
    }

    function dynamicTabCreation(obj: any) {
        let blockEle = obj.element.querySelector('#e-content' + obj.tabId + '_' + obj.selectedItem).children[0];
        let sourceFile = obj.items[obj.selectedItem];
        blockEle.innerHTML = sourceFile.data;
        blockEle.innerHTML = blockEle.innerHTML.replace(reg, '');
        highlightCode(blockEle, sourceFile.properties.content.split('.')[1]);
    }

    function changeTab(args: any): void {
        if (args.selectedIndex === 1) {
            srcTab.items = sourceTabItems as any;
            srcTab.refresh();
            dynamicTabCreation(srcTab);
        }
        if (args.selectedItem && args.selectedItem.innerText === 'DEMO') {
            let demoSection = document.getElementsByClassName('sb-demo-section')[0];
            if (demoSection) {
                let elementList = demoSection.getElementsByClassName('e-control e-lib');
                for (let i = 0; i < elementList.length; i++) {
                    let instance = (elementList[i] as any).ej2_instances;
                    if (instance && instance[0] && typeof instance[0].refresh === 'function') {
                        instance[0].refresh();
                    }
                    if (instance && instance[0] && instance[0].getModuleName() !== 'DashboardLayout')
                        break;
                }
            }
        }
    }

    function sourceFileList(node: any) {
        for (let samples of node.curViewDS) {
            if (samples.path == pathName.split('/').slice(2).join('/')) {
                return samples.sourceFiles;
            }
        }
    }

    function generatePath(path: string): { path: string, displayName: string }[] {
        let splitPath = path.split('/')[3];
        let tsx = [{ path: `/nextjs/demos/src/${path.split('/').slice(2).join('/')}/page.tsx`, displayName: `${splitPath}.tsx` }];
        return tsx;
    }

    function getStringWithOutDescription(code: any, descRegex: any) {
        var lines = code.split('\n');
        var desStartLine = null;
        var desEndLine = null;
        var desInsideDivCnt = 0;
        for (var i = 0; i < lines.length; i++) {
            var curLine = lines[i];
            if (desStartLine) {
                if (/<div/g.test(curLine)) {
                    desInsideDivCnt = desInsideDivCnt + 1;
                }
                if (desInsideDivCnt && /<\/div>/g.test(curLine)) {
                    desInsideDivCnt = desInsideDivCnt - 1;
                }
                else if (!desEndLine && /<\/div>/g.test(curLine)) {
                    desEndLine = i + 1;
                }
            }
            if (descRegex.test(curLine)) {
                desStartLine = i;
            }
        }
        if (desEndLine && desStartLine) {
            lines.splice(desStartLine, desEndLine - desStartLine);
        }
        return lines.join('\n');
    }


    function renderSourceTabContent() {
        let sourcePromise = [];
        let sObj: object[] = [];
        let sampleListFile = select('#controlList').ej2_instances[0];
        let sourceFiles = sourceFileList(sampleListFile) || generatePath(pathName);
        for (let sourceFile of sourceFiles) {
            sourcePromise.push((new Ajax(sourceFile.path, 'GET', false)).send());
            sObj.push({
                header: { text: sourceFile.displayName },
                data: '',
                content: sourceFile.displayName
            });
        }
        Promise.all(sourcePromise).then((results) => {
            results.forEach((value, index) => {
                let sampleContent = value.toString();
                sampleContent = getStringWithOutDescription(sampleContent, /(\'|\")action-description/g);
                sampleContent = getStringWithOutDescription(sampleContent, /(\'|\")description/g);
                sampleContent = sampleContent.replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                (sObj[index] as any).data = sampleContent;
            });
            setSourceTabItems(sObj as never[]);
        });
        if (Browser.isDevice) {
            if ((window as any).sampleOrder.indexOf(pathName.split('/').slice(2).join('/')) == -1) {
                let toastObj = new ToastComponent({
                    position: {
                        X: 'Right'
                    }
                });
                let hideLocation = pathName.split('/')[2];
                toastObj.appendTo('#sb-home');
                setTimeout(() => {
                    toastObj.show({
                        content: `${hideLocation} component not supported in mobile device`
                    });
                }, 200);
                router.push('/' + theme + '/grid/overview');
            }
        }
    }

    function template(props: any) {
        return (
            <Link href={'https:' + props.link} target="_blank">{props.name}</Link>
        )
    }

    function templateDescription(props: any) {
        return (
            <div className='sb-sample-description'>
                <div className='sb-api-content' dangerouslySetInnerHTML={{ __html: SanitizeHtmlHelper.sanitize(props.description) }}></div>
            </div>
        )
    }

    return (
        <TabComponent id='content-tab' className='sb-content-tab' selecting={preventTabSwipe} selected={changeTab} ref={t => (sourceTab as any) = t} created={tabRendered}>
            <div id="sb-content" className='sb-content-section'>
                <div id='sb-content-header' className="e-tab-header sb-content-tab-header">
                    <div>
                        <span className="sb-icons sb-icon-Demo"></span>
                        <span className="sb-tab-title"> DEMO </span>
                    </div>
                    <div>
                        <span className="sb-icons sb-icon-Code"></span>
                        <span className="sb-tab-title"> SOURCE </span>
                    </div>
                    <div>
                        <span className="sb-icons sb-icon-API"></span>
                        <span className="sb-tab-title"> API </span>
                    </div>
                </div>

                <div className="e-content sb-sample-content-area">
                    <div>
                        <div className='sb-demo-section'>
                            <div className="control-fluid">
                                <div className="container-fluid">
                                    <div id="control-content">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='sb-source-section'>
                            <div className="sb-tab-overlay sb-hide">
                                <div className="sb-loading">
                                    <svg className="circular" height="40" width="40">
                                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="6" strokeMiterlimit="10" />
                                    </svg>
                                </div>
                            </div>
                            <TabComponent id='sb-source-tab' className="sb-source-code-section" headerPlacement='Top' selected={dynamicTab}
                                ref={t => srcTab = (t as TabComponent)}
                                selecting={preventTabSwipe}>
                            </TabComponent>
                            <TooltipComponent className="copy-tooltip" content='Copied to clipboard' position='BottomCenter' opensOn='Click' onClick={copyCode} closeDelay={500}>
                                <div className="e-icons copycode"></div>
                            </TooltipComponent>
                        </div>
                    </div>
                    <div>
                        <GridComponent id='api-grid' dataSource={apiGridData}>
                            <ColumnsDirective>
                                <ColumnDirective field='name' headerText='name' template={template} width='180' textAlign='Center'></ColumnDirective>
                                <ColumnDirective field='type' headerText='Type' width='180' ></ColumnDirective>
                                <ColumnDirective field='description' headerText='Description' template={templateDescription} width='200' />
                            </ColumnsDirective>
                        </GridComponent>
                    </div>

                </div>
            </div>
        </TabComponent>
    )
}

export default Content