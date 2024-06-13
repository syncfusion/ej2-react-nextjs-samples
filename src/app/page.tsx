'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import LeftPane from '@/common/left-pane';
import Content, { processDeviceDependables, selectDefaultTab } from '@/common/component-content';
import {
  Browser, select, enableRipple, selectAll, closest, Animation,
  createElement, L10n, setCulture, setCurrencyCode, loadCldr
} from '@syncfusion/ej2-base';
import { SidebarComponent, EventArgs } from '@syncfusion/ej2-react-navigations';
import { useRouter, usePathname } from 'next/navigation';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Popup } from '@syncfusion/ej2-react-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as searchJson from '@/common/search-index.json';
import { DataManager, DataUtil, Query } from '@syncfusion/ej2-data';
import { ListBase } from '@syncfusion/ej2-react-lists';
import * as elasticlunr from '@/common/lib/elasticlunr';
import { Locale } from '@/common/locale-string';
import { base_path } from '@/common/utils';
import * as numberingSystems from '@/common/cldr-data/supplemental/numberingSystems.json';
import * as currencyData from '@/common/cldr-data/supplemental/currencyData.json';
import * as deCultureData from '@/common/cldr-data/main/de/all.json';
import * as arCultureData from '@/common/cldr-data/main/ar/all.json';
import * as swissCultureDate from '@/common/cldr-data/main/fr-CH/all.json';
import * as enCultureData from '@/common/cldr-data/main/en/all.json';
import * as chinaCultureData from '@/common/cldr-data/main/zh/all.json';

/**
 * SB Popups.
 */
let switcherPopup: Popup;
let searchPopup: Popup;
let settingsPopup: Popup;
let searchInstance: any;
let settingElement: HTMLElement;

let headerThemeSwitch: HTMLElement;
let prevAction: string;

let cultureDropDown!: DropDownListComponent;
let currencyDropDown!: DropDownListComponent;

/**
 * default theme on sample loaded
 */
export let selectedTheme: string;
export const themeCollection: string[] = ['material3', 'bootstrap5', 'fluent2', 'tailwind', 'highcontrast', 'fluent'];

let themeList: HTMLElement;

/**
 * constant for search operations
 */
let searchEle: any;
let inputele: any;
let searchOverlay: Element;
let searchButton: Element;
let resetSearch: Element
export let setResponsiveElement: Element;

/**
 * constant to process the sample url
 */
const urlRegex: RegExp = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
const sampleRegex: RegExp = /#\/(([^\/]+\/)+[^\/\.]+)/;
const sbArray: string[] = ['angular', 'react', 'typescript', 'javascript', 'aspnetcore', 'aspnetmvc', 'vue', 'blazor'];
const sbObj: { [index: string]: string } = { 'angular': 'angular', 'react': 'react', 'typescript': '', 'javascript': 'javascript', 'vue': 'vue', 'blazor': 'blazor' };

/**
 * SB Switch Link Updation
 */
export function setSbLink(): void {
  let href: string = '#/' + location.pathname.split('/').slice(3).join('/');
  let link: string[] = href.match(urlRegex) as string[];
  let sample: string[] = href.match(sampleRegex) as string[];
  for (let sb of sbArray) {
    let ele: HTMLFormElement = (select('#' + sb) as HTMLFormElement);
    if (sb === 'aspnetcore' || sb === 'aspnetmvc') {
      ele.href = sb === 'aspnetcore' ? 'https://ej2.syncfusion.com/aspnetcore/' : 'https://ej2.syncfusion.com/aspnetmvc/';

    } else if (sb === 'blazor') {
      ele.href = 'https://blazor.syncfusion.com/demos/';
    } else {
      ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) :
        ('https://ej2.syncfusion.com/')) + (sbObj[sb] ? (sb + '/') : '') +
        'demos/#/' + (sample ? (sample[1] + (sb !== 'typescript' ? '' : '.html')) : '');
    }
  }
}

export default function Home({ children, theme
}: {
  children: React.ReactNode, theme: string
}) {

  const router = useRouter();
  let routeName: string = usePathname();
  let isRenderDescription: boolean = true;
  let themeSwitcherPopup: Popup;
  let leftToggle: Element;
  let sbRightPane: HTMLElement;
  let sbContentOverlay: HTMLElement;
  let sbBodyOverlay: HTMLElement;
  let sbHeader: HTMLElement;
  let sidebar: SidebarComponent;
  let settingSidebar: SidebarComponent;
  let description = useRef(null);
  let actionDescription = useRef(null);
  let openedPopup: any = useRef(null);
  let themeDropDown = useRef<DropDownListComponent>(null);
  let themeModeDropDown = useRef<DropDownListComponent>(null);
  let searchInstance: any;
  let mobileOverlay: Element;

  const themesModeData: { [key: string]: Object }[] = [
    { Id: 'Light', display: 'Light Mode' },
    { Id: 'Dark', display: 'Dark Mode' }
  ];

  const themesData: { [key: string]: Object }[] = [
    { Id: 'material3', display: 'Material 3' },
    { Id: 'bootstrap5', display: 'Bootstrap 5' },
    { Id: 'fluent2', display: 'Fluent 2' },
    { Id: 'tailwind', display: 'Tailwind CSS' },
    { Id: 'highcontrast', display: 'High Contrast' },
    { Id: 'fluent', display: 'Fluent' }
  ];

  const cultureData: { [key: string]: Object }[] = [
    { Id: 'en', display: 'English' },
    { Id: 'de', display: 'German - Germany*' },
    { Id: 'fr-CH', display: 'French - Switzerland*' },
    { Id: 'ar', display: 'Arabic*' },
    { Id: 'zh', display: 'Chinese - China*' }
  ];

  const dropdownFields: object = { text: 'display', value: 'Id' };

  const currencySettings: { [key: string]: Object }[] = [
    { Id: 'USD', display: 'USD' },
    { Id: 'EUR', display: 'EUR' },
    { Id: 'AED', display: 'AED' },
    { Id: 'CHF', display: 'CHF' },
    { Id: 'CNY', display: 'CNY' }
  ];

  /**
  * Mobile View.
  */
  let isMobile: boolean = false;
  /**
   * tablet mode
   */
  let isTablet: boolean = false;
  /**
   * PC mode
   */
  let isPc: boolean = false;
  /**
   * Resize event handler
   */
  let resizeManualTrigger: boolean = false;

  const matchedCurrency: { [key: string]: string } = {
    'en': 'USD',
    'de': 'EUR',
    'ar': 'AED',
    'zh': 'CNY',
    'fr-CH': 'CHF'
  };
  let isDeviceSideBar: boolean = Browser.isDevice || isMobile;

  if (typeof document != 'undefined') {
    isMobile = window.matchMedia('(max-width:550px)').matches;
    isTablet = window.matchMedia('(min-width:600px) and (max-width: 850px)').matches;
    isPc = window.matchMedia('(min-width:850px)').matches;
    mobileOverlay = select('.sb-mobile-overlay');
    settingElement = select('.sb-setting-btn') as HTMLElement;
    headerThemeSwitch = document.getElementById('header-theme-switcher') as HTMLElement;
    selectedTheme = theme;
    themeList = document.getElementById('themelist') as HTMLElement;
    searchEle = select('#search-popup');
    inputele = select('#search-input');
    searchOverlay = select('.e-search-overlay');
    searchButton = document.getElementById('sb-trigger-search') as Element;
    setResponsiveElement = select('.setting-responsive');
    resetSearch = select('.sb-reset-icon');
    /**
    * load elastic lunr
    */
    (elasticlunr as any).clearStopWords();
    searchInstance = (elasticlunr as any).Index.load(searchJson);
  }

  enableRipple((selectedTheme && selectedTheme.indexOf('material') !== -1) || !selectedTheme);

  useEffect(() => {
    const themeMode: HTMLElement = document.getElementById('theme-mode') as HTMLElement;
    if (!isMobile) {
      (document.querySelector('#dark-light-content') as HTMLElement).classList.remove('sb-hide');
      themeMode.classList.add('sb-hide');
    } else {
      const mobileModeIcon: HTMLElement = document.getElementById('mobile-mode-icon') as HTMLElement;
      themeMode.classList.remove('sb-hide');
      if (selectedTheme.includes('highcontrast')) {
        themeMode.classList.add('hidden');
      }
      if (selectedTheme.includes('-dark')) {
        mobileModeIcon.classList.add('pane-light-theme');
      }
      else {
        mobileModeIcon.classList.add('pane-dark-theme');
      }
    }
    setCulture('en');
    let newYear: number = new Date().getFullYear();
    let copyRight: HTMLElement = select('.sb-footer-copyright') as HTMLElement;
    copyRight.innerHTML = "Copyright © 2001 - " + newYear + " Syncfusion Inc.";
    select('#sb-toggle-left').setAttribute('aria-expanded', !Browser.isDevice);
    /**
    * Mouse or touch setting
    */
    let switchText: string = localStorage.getItem('ej2-switch') || 'mouse';
    if (Browser.isDevice || window.screen.width <= 850) {
      switchText = 'touch';
    }
    (themeList.querySelector('.active') as HTMLElement).classList.remove('active');
    (themeList.querySelector('#' + selectedTheme.replace('-dark', '')) as HTMLElement).classList.add('active');
    (themeList.querySelector('#' + selectedTheme.replace('-dark', '')) as HTMLElement).setAttribute('aria-current', 'true');
    let themeSwitchBtn: HTMLElement = document.querySelector('.sb-themeswitch-btn') as HTMLElement;
    if (selectedTheme) {
      selectedTheme.includes('highcontrast') ? themeSwitchBtn.classList.add('hidden') : themeSwitchBtn.classList.remove('hidden');
      (themeSwitchBtn.querySelector('.sb-icons') as HTMLElement).className = 'sb-icons';
      (themeSwitchBtn.querySelector('.sb-icons') as HTMLElement).classList.add(selectedTheme.includes('-dark') ? 'dark-theme' : 'light-theme');
      (themeSwitchBtn.querySelector('.theme-text') as HTMLElement).innerHTML = selectedTheme.includes('-dark') ? 'LIGHT' : 'DARK';
    }
    loadCldr(numberingSystems, chinaCultureData, enCultureData, swissCultureDate, currencyData, deCultureData, arCultureData);
    L10n.load(Locale);
    changeMouseOrTouch(switchText);
    overlay();
    renderSbPopups();
    setSbLink();
    bindEvents();
    removeOverlay();
  }, []);

  useEffect(() => {
    leftToggle = select("#sb-toggle-left");
    /**
     * Mobile View
     */
    if (isMobile) {
      select(".sb-left-pane-footer").appendChild(select(".sb-footer-left"));
      select("#left-sidebar")?.ej2_instances[0].hide();
      leftToggle.classList.remove("toggle-active");
    }
    /**
     * Tab View
     */
    if (isTablet || (Browser.isDevice && isPc)) {
      leftToggle.classList.remove("toggle-active");
      select(".sb-right-pane").classList.add("control-fullview");
    }
    if (isRenderDescription) {
      let sbAct = select('.sb-action-description');
      let sbDesc = select('.description-section');
      sbAct.innerHTML = '';
      sbDesc.innerHTML = '';
      let act = select('#action-description');
      let desc = select('#description');
      (actionDescription.current as any).appendChild(act as any);
      (description.current as any).appendChild(desc as any);
      isRenderDescription = false;
    }
  }, [routeName]);

  function removeOverlay(): void {
    sbRightPane = select('.sb-right-pane') as HTMLElement;
    sbContentOverlay = select('.sb-content-overlay') as HTMLElement;
    sbHeader = select('#sample-header') as HTMLElement;
    sbBodyOverlay = select('.sb-body-overlay') as HTMLElement;
    sbContentOverlay.classList.add('sb-hide');
    sbRightPane.classList.remove('sb-right-pane-overlay');
    sbHeader.classList.remove('sb-right-pane-overlay');
    mobNavOverlay(false);
    if (!sbBodyOverlay.classList.contains('sb-hide')) {
      sbBodyOverlay.classList.add('sb-hide');
    }
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (!isMobile) {
      sbRightPane.scrollTop = 0;
    }
    setTimeout(() => {
      if (cultureDropDown.value == 'ar') {
        changeRtl(true);
      }
    });
  }

  function overlay(): void {
    sbHeader = select('#sample-header') as HTMLElement;
    sbBodyOverlay = select('.sb-body-overlay') as HTMLElement;
    sbHeader.classList.add('sb-right-pane-overlay');
    sbBodyOverlay.classList.remove('sb-hide');
  }

  /**
 * Set Mouse or Touch on page load
 */
  function changeMouseOrTouch(str: string): void {
    let activeEle: HTMLElement = setResponsiveElement?.querySelector('.active') as HTMLElement;
    if (activeEle) {
      activeEle.classList.remove('active');
    }
    if (str === 'mouse') {
      document.body.classList.remove('e-bigger');
    } else {
      document.body.classList.add('e-bigger');
    }
    (setResponsiveElement?.querySelector('#' + str) as HTMLElement)?.classList.add('active');
  }

  function sampleOverlay(): void {
    sbRightPane = select('.sb-right-pane') as HTMLElement;
    sbContentOverlay = select('.sb-content-overlay') as HTMLElement;
    sbHeader = select('#sample-header') as HTMLElement;
    sbHeader.classList.add('sb-right-pane-overlay');
    sbRightPane.classList.add('sb-right-pane-overlay');
    mobNavOverlay(true);
    sbContentOverlay.classList.remove('sb-hide');
  }

  function mobNavOverlay(isOverlay: boolean): void {
    if (Browser.isDevice) {
      let mobileFoorter: HTMLElement = select('.sb-mobilefooter') as HTMLElement;
      if (isOverlay) {
        mobileFoorter.classList.add('sb-right-pane-overlay');
      } else {
        mobileFoorter.classList.remove('sb-right-pane-overlay');
      }
    }
  }

  /**
 * Render Sample Browser Popups
 */
  function renderSbPopups(): void {
    switcherPopup = new Popup(document.getElementById('sb-switcher-popup') as HTMLElement, {
      relateTo: select('.sb-header-text-right') as HTMLElement, position: { X: 'left' },
      collision: { X: 'flip', Y: 'flip' },
      offsetX: 0,
      offsetY: -15,
    });
    themeSwitcherPopup = new Popup(document.getElementById('theme-switcher-popup') as HTMLElement, {
      offsetY: 2,
      zIndex: 10012,
      relateTo: select('.theme-wrapper') as HTMLElement, position: { X: 'left', Y: 'bottom' },
      collision: { X: 'flip', Y: 'flip' }
    });
    themeSwitcherPopup.hide();
    searchPopup = new Popup(searchEle, {
      offsetY: 5,
      relateTo: inputele, position: { X: 'left', Y: 'bottom' }
      , collision: { X: 'flip', Y: 'flip' }
    });
    settingsPopup = new Popup(document.getElementById('settings-popup') as HTMLElement, {
      offsetY: 5,
      zIndex: 10012,
      relateTo: settingElement as HTMLElement,
      position: { X: 'right', Y: 'bottom' },
      collision: { X: 'flip', Y: 'flip' }
    });
    if (!isMobile) {
      settingSidebar = select('#right-sidebar').ej2_instances[0] as SidebarComponent;
      settingSidebar.hide();
      settingsPopup.hide();
    } else {
      select('.sb-mobile-preference').appendChild(select('#settings-popup'));
    }
    searchPopup.hide();
    switcherPopup.hide();
  }

  function onCultureChange(args: any): void {
    let value: string = args;
    currencyDropDown.value = matchedCurrency[value];
    setCulture(value);
    if (value == 'ar') {
      changeRtl(true);
    } else {
      changeRtl(false);
    }
  }

  function changeRtl(isShow: boolean): void {
    let elementlist: any = selectAll('.e-control', document.getElementById('control-content') as HTMLElement);
    for (let control of elementlist) {
      let eleinstance: Object[] = (control as any).ej2_instances;
      if (eleinstance) {
        for (let instance of eleinstance) {
          (instance as any).enableRtl = isShow;
        }
      }
    }
  }

  /**
  * Mobile Overlay 
  */
  function toggleMobileOverlay(): void {
    if (!select('.sb-left-pane').classList.contains('sb-hide')) {
      toggleLeftPane();
    }
    if (!select('.sb-mobile-right-pane').classList.contains('sb-hide')) {
      toggleRightPane();
    }
  }

  /**
   * toggle search overlay
   */
  function toggleSearchOverlay(): void {
    sbHeaderClick('closePopup', true);
    inputele.value = '';
    searchPopup.hide();
    searchOverlay.classList.remove('sb-hide');
    searchButton.classList.add('active');
    if (!searchOverlay.classList.contains('sb-hide')) {
      inputele.focus();
    }
  }

  function bindEvents(): void {
    (document.getElementById('sb-switcher') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      sbHeaderClick('changeSampleBrowser');
    });
    select('.sb-header-text-right').addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      sbHeaderClick('changeSampleBrowser');
    });
    headerThemeSwitch.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      sbHeaderClick('changeTheme');
    });
    themeList.addEventListener('click', changeTheme);
    document.addEventListener('click', () => sbHeaderClick('closePopup'));
    settingElement.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      sbHeaderClick('toggleSettings');
    });
    (searchButton as HTMLElement).addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      toggleSearchOverlay();
    });
    (document.getElementById('settings-popup') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    });
    inputele.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    });
    inputele.addEventListener('keyup', onsearchInputChange);
    (setResponsiveElement as HTMLElement).addEventListener('click', setMouseOrTouch);
    mobileOverlay.addEventListener('click', toggleMobileOverlay);
    select('.sb-header-settings').addEventListener('click', viewMobilePrefPane);
    (resetSearch as HTMLElement).addEventListener('click', resetInput);

    (document.getElementById('switch-sb') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
      let target: Element = closest(e.target as any, 'li');
      if (target) {
        let anchor: any = target.querySelector('a');
        if (anchor) {
          anchor.click();
        }
      }
    });

    /**
    * resize event
    */
    window.addEventListener('resize', processResize);
    select('.sb-right-pane').addEventListener('click', () => {
      if (isTablet && isLeftPaneOpen()) {
        toggleLeftPane();
      }
    });

    searchEle.addEventListener('click', (e: MouseEvent) => {
      let curEle: Element = closest(e.target as any, 'li');
      if (curEle && curEle.classList.contains('e-list-item')) {
        let tcontent: any = select('.e-text-content', curEle);
        inputele.value = '';
        searchPopup.hide();
        searchOverlay.classList.add('e-search-hidden');
        selectDefaultTab();
        router.push('/' + theme + '/' + tcontent.getAttribute('data'));
        sampleOverlay();
      }
    });
  }

  /**
 * Resize event processing
 */
  function processResize(): void {
    sidebar = select('#left-sidebar').ej2_instances[0] as SidebarComponent;
    let toggle: boolean = sidebar.isOpen;
    isMobile = document.body.offsetWidth <= 550;
    isTablet = document.body.offsetWidth >= 550 && document.body.offsetWidth <= 850;
    if (isTablet) {
      resizeManualTrigger = false;
    }
    if (resizeManualTrigger || (isMobile && select('#right-sidebar').classList.contains('sb-hide'))) {
      return;
    }
    isPc = document.body.offsetWidth >= 850;
    processDeviceDependables();
    let rightPane: Element = select('.sb-right-pane');
    let footer: Element = select('.sb-footer-left');
    let pref: Element = select('#settings-popup');
    if (toggle && !isPc) {
      toggleLeftPane();
    }
    if (isMobile || isTablet) {
      (sidebar as any).target = null;
      sidebar.showBackdrop = true;
      sidebar.closeOnDocumentClick = true;
      if (isTablet) {
        select('.sb-footer').appendChild(footer);
      }
      if (!(footer as any).parentElement.classList.contains('sb-left-pane-footer')) {
        select('.sb-left-pane-footer').appendChild(footer);

      }
      if (!(pref as any).parentElement.classList.contains('sb-mobile-preference')) {
        select('.sb-mobile-preference').appendChild(pref);
      }
      settingsPopup.show();
    }
    if (isPc) {
      sidebar.target = (document.querySelector('.sb-content ') as HTMLElement)
      sidebar.showBackdrop = false;
      sidebar.closeOnDocumentClick = false;
      if ((footer as any).parentElement.classList.contains('sb-left-pane-footer')) {
        select('.sb-footer').appendChild(footer);
      }

      if (isPc && !Browser.isDevice) {
        if (isVisible('.sb-left-pane')) {
          rightPane.classList.remove('control-fullview');
        }

      }
      if ((pref as any).parentElement.classList.contains('sb-mobile-preference')) {
        settingSidebar = select('#right-sidebar').ej2_instances[0] as SidebarComponent;
        select('#sb-popup-section').appendChild(pref);
        settingSidebar.hide();
        settingsPopup.hide();
      }
      let mobilePropPane: Element = select('.sb-mobile-prop-pane .property-section');
      if (mobilePropPane) {
        select('.control-section').appendChild(mobilePropPane);
      }
    }
    if (!select('.sb-mobile-right-pane').classList.contains('sb-hide')) {
      toggleRightPane();
    }
    if (isVisible('.sb-mobile-overlay')) {
      removeMobileOverlay();
    }
  }

  function isVisible(elem: string): boolean {
    return !select(elem).classList.contains('sb-hide');
  }

  function removeMobileOverlay(): void {
    select('.sb-mobile-overlay').classList.add('sb-hide');
  }

  /**
  * Storing the mouse action
  */
  function setMouseOrTouch(e: any): void {
    let ele: Element = closest(e.target as HTMLElement, '.sb-responsive-items');
    let switchType: string = ele.id;
    changeMouseOrTouch(switchType);
    sbHeaderClick('closePopup');
    localStorage.setItem('ej2-switch', switchType);
    location.reload();
  }

  /**
  * search input change
  */
  function onsearchInputChange(e: KeyboardEvent): void {
    if (e.keyCode === 27) {
      toggleSearchOverlay();
    }
    let searchString: string = (e.target as any).value;
    (document.getElementById('search-input-wrapper') as HTMLElement).setAttribute('data-value', searchString);
    if (searchString.length <= 2) {
      searchPopup.hide();
      return;
    }
    let val: any = [];
    val = searchInstance.search(searchString, {
      fields: {
        component: { boost: 1 },
        name: { boost: 2 }
      },
      expand: true,
      boolean: 'AND',
    });
    let value: any = [];
    if (Browser.isDevice) {
      for (let file of val) {
        if (file.doc.hideOnDevice !== true) {
          value = value.concat(file);
        }
      }
    }
    let searchValue = Browser.isDevice ? value : val;
    if (searchValue.length) {
      let data: DataManager = new DataManager(searchValue);
      let controls: any = data.executeLocal(new Query().take(10).select('doc'));
      let controlsAccess: any = [];
      for (let cont of controls) {
        controlsAccess.push(cont.doc);
      }
      let ds: any = DataUtil.group(controlsAccess, 'component');
      let dataSource: { [key: string]: Object }[] & Object[] = [];
      for (let j: number = 0; j < ds.length; j++) {
        let itemObj: any = ds[j].items;
        let field: string = 'name';
        let grpItem: { [key: string]: Object } = {};
        let hdr: string = 'isHeader';
        grpItem[field] = ds[j].key;
        grpItem[hdr] = true;
        grpItem.items = itemObj;
        dataSource.push(grpItem);
        for (let k: number = 0; k < itemObj.length; k++) {
          dataSource.push(itemObj[k]);
        }
      }
      let ele: any = ListBase.createList(createElement, dataSource, {
        fields: { id: 'uid', groupBy: 'component', text: 'name' },
        template: '<div class="e-text-content e-icon-wrapper" data="${path}" aria-label="${path}" uid="${uid}">' +
          '<span class="e-list-text" role="list-item">' +
          '${name}</span></div>',
        groupTemplate:
          '${if(items[0]["component"])}<div class="e-text-content"><span class="e-search-group">${items[0].component}</span>' +
          '</div>${/if}'
      });
      searchPopup.element.innerHTML = '';
      highlight(searchString, ele);
      searchPopup.element.appendChild(ele);
      searchPopup.show();
    } else {
      searchPopup.element.innerHTML = '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>';
      searchPopup.show();
    }
  }

  function highlight(searchString: string, listElement: any): void {
    let regex: RegExp = new RegExp(searchString.split(' ').join('|'), 'gi');
    let contentElements: any[] = selectAll('.e-list-item .e-text-content .e-list-text', listElement);
    for (let i: number = 0; i < contentElements.length; i++) {
      let spanText: any = select('.sb-highlight');
      if (spanText) {
        contentElements[i].innerHTML = contentElements[i].text;
      }
      contentElements[i].innerHTML = contentElements[i].innerHTML.replace(regex, (matched: string) => {
        return '<span class="sb-highlight">' + matched + '</span>';
      });
    }
  }

  function resetInput(arg: MouseEvent): void {
    arg.preventDefault();
    arg.stopPropagation();
    (document.getElementById('search-input') as HTMLInputElement).value = '';
    (document.getElementById('search-input-wrapper') as HTMLElement).setAttribute('data-value', '');
    searchPopup.hide();
  }


  /**
  * Header Click Event Handling
  */
  function sbHeaderClick(action: string, preventSearch?: boolean): void {
    let isPopupOpen: boolean = true;
    if (openedPopup.current && !openedPopup.current.element.classList.contains('e-popup-close')) {
      openedPopup.current.hide(new Animation({ name: 'FadeOut', duration: 300, delay: 0 }));
      isPopupOpen = false
    }
    if (preventSearch !== true && !searchOverlay.classList.contains('sb-hide')) {
      searchOverlay.classList.add('sb-hide');
      searchButton.classList.remove('active');
    }
    let curPopup!: Popup;
    switch (action) {
      case 'changeSampleBrowser':
        switcherPopup = select('#sb-switcher-popup').ej2_instances[0] as Popup;
        curPopup = switcherPopup;
        break;
      case 'changeTheme':
        headerThemeSwitch.classList.toggle('active');
        curPopup = themeSwitcherPopup;
        break;
      case 'toggleSettings':
        settingElement.classList.toggle('active');
        (themeDropDown.current as any).index = themeCollection.indexOf(selectedTheme);
        curPopup = settingsPopup;
        break;
    }
    if (action === 'closePopup') {
      headerThemeSwitch.classList.remove('active');
      settingElement.classList.remove('active');
    }
    if (curPopup && (isPopupOpen || (!isPopupOpen && (curPopup.element.id !== openedPopup.current.element.id)))) {
      curPopup.show(new Animation({ name: 'FadeIn', duration: 400, delay: 0 }));
      openedPopup.current = curPopup;
    }
    prevAction = action;
  }

  const homeClick = () => {
    (document.getElementById('sb-home') as HTMLElement).click();
  };


  function resizeFunction(): void {
    if (!isMobile && !isTablet) {
      resizeManualTrigger = true;
      setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 200);
    }
  }

  function toggleLeftPane(): void {
    isMobile = document.body.offsetWidth <= 550;
    select('#left-sidebar').classList.remove('sb-hide');
    leftToggle = select("#sb-toggle-left");
    sidebar = select('#left-sidebar').ej2_instances[0] as SidebarComponent;
    let reverse: boolean = sidebar?.isOpen;
    leftToggle.setAttribute('aria-expanded', (!reverse).toString());
    if (!reverse) {
      leftToggle.classList.add('toggle-active');

    } else {
      leftToggle.classList.remove('toggle-active');
    }
    if (sidebar) {
      reverse = sidebar.isOpen;
      if (reverse) {
        sidebar.hide();
        if (!isMobile && !isTablet) {
          resizeManualTrigger = true;
        }
      } else {
        sidebar.show();
        resizeManualTrigger = true;
      }
    }
  }

  function closeRightSidebar(args: EventArgs): void {
    let targetEle: HTMLElement | null = args.event ? args.event.target as HTMLElement : null;
    if (targetEle && targetEle.closest('.e-popup')) args.cancel = true;
  }

  /**
  * Theme change function
  */

  function changeTheme(e: MouseEvent): void {
    let target: Element = e.target as HTMLElement;
    target = closest(target, 'li');
    let themeName: string = target.id;
    const newTheme = (selectedTheme.includes('-dark') && !themeName.includes('highcontrast')) ? (themeName + '-dark') : themeName;
    switchTheme(newTheme);
  }

  function switchTheme(str: string): void {
    if (str === selectedTheme) {
      return;
    }
    let sbBodyOverlay = select('.sb-body-overlay') as HTMLElement;
    if (sbBodyOverlay.classList.contains('sb-hide')) {
      sbBodyOverlay.classList.remove('sb-hide');
    }
    let setResponsiveElement: Element = select('.setting-responsive');
    localStorage.setItem('ej2-switch', select('.active', setResponsiveElement).id);
    location.pathname = base_path + '/' + str + '/' + location.pathname.split('/').slice(4).join('/');
  }

  /**
  * Mobile Right pane toggle functions
  */
  function toggleRightPane(): void {
    (themeDropDown.current as any).index = themeCollection.indexOf(selectedTheme);
    select('#right-sidebar').classList.remove('sb-hide');
    if (isMobile) {
      settingSidebar = select('#right-sidebar').ej2_instances[0] as SidebarComponent;
      settingSidebar?.toggle();
    }

  }
  function viewMobilePrefPane(): void {
    select('.sb-mobile-prop-pane').classList.add('sb-hide');
    select('.sb-mobile-preference').classList.remove('sb-hide');
    toggleRightPane();
  }

  function viewMobilePropPane(): void {
    select('.sb-mobile-preference').classList.add('sb-hide');
    select('.sb-mobile-prop-pane').classList.remove('sb-hide');
    toggleRightPane();
  }

  function isLeftPaneOpen(): boolean {
    sidebar = select('#left-sidebar').ej2_instances[0] as SidebarComponent;
    return sidebar?.isOpen;
  }

  const handleButton = () => {
    const isDark = selectedTheme.includes('-dark');
    const isNewThemeDark = isDark ? selectedTheme.replace('-dark', '') : (selectedTheme + '-dark');
    switchTheme(isNewThemeDark);
  }

  function changeThemeMode(e: any): void {
    const mode = e.value;
    if (mode === 'Dark' && !selectedTheme.includes('highcontrast')) {
      switchTheme(selectedTheme + '-dark');
    }
    else {
      switchTheme(selectedTheme.replace('-dark', ''))
    }
  }

  return (
    <>
      <SidebarComponent id='left-sidebar' width={isDeviceSideBar ? '280px' : '282px'} showBackdrop={isDeviceSideBar}
        closeOnDocumentClick={isDeviceSideBar} enableGestures={false} change={resizeFunction} ref={(t: SidebarComponent) => { sidebar = t as SidebarComponent; }}
        target={isDeviceSideBar ? undefined : '.sb-content'}>
        <div className='sb-left-pane e-view'>
          <div className="sb-left-pane-header">
            <div className="sb-header-top">
              <div className="sb-ej2">
                <div className="sb-mobile-logo"></div>
                <div className="sb-name">Essential JS 2</div>
              </div>
            </div>
          </div>
          <div className="sb-home" onClick={homeClick}>
            <div className="sb-home-link sb-icons sb-icon-Home"></div>
            <div className="sb-home-text">
              <span>HOME</span>
            </div>
            <a id="sb-home" href="https://ej2.syncfusion.com/home/react.html" aria-label="Sample home page"></a>
          </div>
          <div id="left-pane-component">
            <LeftPane theme={theme} sampleOverlay={sampleOverlay} toggleLeftPane={toggleLeftPane} isLeftPaneOpen={isLeftPaneOpen} />
          </div>
          <div className='sb-left-pane-footer'>
            <div className="sb-mobile-header-buttons">
              <a href='https://www.syncfusion.com/react-ui-components' target="_blank" aria-label="About Syncfusion React UI Components - Opens in a new window">
                <div className="sb-mobile-header-about">
                  About</div>
              </a>
              <a href='https://www.syncfusion.com/downloads/react' target="_blank" aria-label="Pricing for Syncfusion React UI Components - Opens in a new window"><div className="sb-mobile-header-price">Pricing</div></a>
            </div>
          </div>
        </div>
      </SidebarComponent>

      <SidebarComponent id='right-sidebar' ref={(t: SidebarComponent) => { settingSidebar = t as SidebarComponent; }} position='Right' width='282' zIndex='1003' showBackdrop={true} type='Over'
        closeOnDocumentClick={true} close={closeRightSidebar}>
        <div className="sb-mobile-right-pane">
          <div className="sb-mobile-preference sb-hide"></div>
          <div id="mobile-pane" className="sb-mobile-prop-pane sb-hide">
          </div>
          <div className="sb-mobile-right-pane-close sb-icons"></div>
        </div>
      </SidebarComponent>

      <div className="sample-browser e-view">
        <div className="sb-mobile-overlay sb-hide"></div>
        <div id='sample-header' className="sb-header e-view" role="banner">
          <div className='sb-header-left sb-left sb-table'>
            <div className='sb-header-item sb-table-cell'>
              <div id="sb-toggle-left" onClick={toggleLeftPane} onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && toggleLeftPane()} role="button" tabIndex={0} className="sb-slide-nav sb-icons toggle-active sb-icon-Hamburger" aria-label="Toggle controls navigation list"></div>
            </div>
            <div className='sb-header-item sb-table-cell'>
              <div id='sb-header-text' className='e-sb-header-text'>
                <span className='sb-header-text-left'>Essential Studio for </span>
                <span className='sb-header-text-right'>Next.js</span>
              </div>
            </div>
            <div className='sb-header-item sb-table-cell sb-lang-toggler-wrapper'>
              <span id='sb-switcher' className='sb-lang-toggler sb-icons sb-icon-Dropdown'
                role="button" aria-label="Sample Browser Switcher" aria-haspopup="dialog"
                onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && sbHeaderClick('changeSampleBrowser')} tabIndex={0}></span>
            </div>
          </div>
          <div className='sb-header-right sb-right sb-table'>
            <div className="sb-header-item sb-table-cell">
              <div id="header-theme-switcher" className="theme-wrapper"
                role="button" aria-label="Opens choose theme popup" aria-haspopup="dialog"
                onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && sbHeaderClick('changeTheme')} tabIndex={0}>
                <div id="sb-theme-text" className="sb-theme-text">
                  <span className="sb-header-text-left">CHOOSE THEME</span>
                </div>
                <div className="sb-theme-switcher-wrapper">
                  <span id="sb-theme-switcher" className="sb-theme-switch sb-icons sb-icon-Dropdown"></span>
                </div>
              </div>
            </div>
            <div className="sb-table-cell sb-hide" id="dark-light-content">
              <button className="sb-themeswitch-btn" onClick={handleButton}>
                <span className="sb-icons light-theme"></span>
                <span className="theme-text">DARK</span>
              </button>
            </div>
            <div className="sb-table-cell sb-theme-splitter sb-download-splitter"></div>
            <div className='sb-header-item sb-table-cell sb-search-wrapper'>
              <div className="sb-search-btn" id='sb-trigger-search'
                role="button" aria-label="Opens Search Input" aria-controls="search-popup"
                onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && toggleSearchOverlay()} tabIndex={0}>
                <span className='sb-settings sb-icons sb-icon-Search'></span>
              </div>
            </div>
            <div className='sb-header-item sb-table-cell sb-settings-wrapper'>
              <div className='sb-setting-btn' role="button" aria-label="Opens settings popup" aria-haspopup="dialog"
                onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && sbHeaderClick('toggleSettings')} tabIndex={0}>
                <span className='sb-settings sb-icons sb-icon-Settings-Preferences'></span>
              </div>
            </div>
            <div className="sb-header-item sb-table-cell  sb-header-settings sb-icons"></div>
            <div className="sb-header-splitter sb-download-splitter"></div>
            <div className='sb-header-item sb-table-cell sb-download-wrapper'>
              <Link href="https://www.syncfusion.com/downloads/react" target="_blank" aria-label="Free Trial - Opens in a new window">
                <button id='download-now' type='button' className='sb-download-btn'>
                  <span className="sb-download-text">FREE TRIAL</span>
                </button>
              </Link>
            </div>
          </div>

        </div>
        <div id='sb-popup-section' className='sb-popups'>
          <div id='sb-switcher-popup' role="dialog" aria-label="Essential JS2 Sample Browser List" className='sb-switch-popup'>
            <ul id='switch-sb' role="list">
              <li className='sb-current' role="listitem">Next.js</li>
              <li role="listitem">
                <a id='react'>React</a>
              </li>
              <li role="listitem">
                <a id='angular'>Angular</a>
              </li>
              <li role="listitem">
                <a id='typescript'>JavaScript</a>
              </li>
              <li role="listitem">
                <a id='javascript'>JavaScript (ES5)</a>
              </li>
              <li role="listitem">
                <a id='aspnetcore'>ASP.NET Core</a>
              </li>
              <li role="listitem">
                <a id='aspnetmvc'>ASP.NET MVC</a>
              </li>
              <li role="listitem">
                <a id='vue'>Vue</a>
              </li>
              <li role="listitem">
                <a id='blazor'>Blazor</a>
              </li>
            </ul>
          </div>
          <div id='theme-switcher-popup' className='sb-theme-popup'>
            <ul id="themelist" className="options" role="list">
              <li className='e-list' id="material3" role="listitem">
                <span className='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                <span className="switch-text">Material 3</span>
              </li>
              <li className="e-list" id="bootstrap5" role="listitem">
                <span className='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                <span className="switch-text">Bootstrap 5</span>
              </li>
              <li className="e-list active" id="fluent2" role="listitem">
                <span className='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                <span className="switch-text">Fluent 2</span>
              </li>
              <li className="e-list" id="tailwind" role="listitem">
                <span className='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                <span className="switch-text">Tailwind CSS</span>
              </li>
              <li className="e-list" id="highcontrast" role="listitem">
                <span className='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                <span className="switch-text">High Contrast</span>
              </li>
              <li className="e-list" id="fluent" role="listitem">
                <span className='sb-icons sb-theme-select sb-icon-icon-selection'></span>
                <span className="switch-text">Fluent</span>
              </li>
              <div className="sb-theme-studio"><a target="_blank" href="https://ej2.syncfusion.com/themestudio/?theme=material" aria-label="Go to Theme Studio (Opens in a new window)">Go to Theme Studio</a></div>
            </ul>
          </div>
          <div id='settings-popup' className='sb-setting-popup'>
            <div className='sb-setting-header'>
              <span> Preferences
              </span>
            </div>
            <div className='sb-setting-content'>
              <div className='sb-setting-item sb-setting-theme-section'>
                <div className='setting-label'>
                  <div className='sb-icons sb-setting-icons sb-icon-Palette'></div>
                  <div className='sb-setting-text'>Theme Selection</div>
                </div>
                <div className='setting-content  setting-theme-change'>
                  <DropDownListComponent id="sb-setting-theme" ref={themeDropDown} title="Theme Selection" placeholder="Select a theme"
                    className='sb-setting-theme-select' dataSource={themesData} fields={dropdownFields}
                    change={(e: any) => {
                      selectedTheme?.includes('-dark') && !e.value.includes('highcontrast') ? switchTheme(e.value + '-dark') :
                        switchTheme(e.value);
                    }}
                    index={themeCollection.indexOf(selectedTheme?.split('-')[0])} />
                </div>
              </div>
              <div className='sb-setting-item sb-responsive-section'>
                <div className='setting-label' role="presentation">
                  <div className='sb-icons sb-setting-icons sb-icon-Responsive'></div>
                  <div className='sb-setting-text'>Mode Selection</div>
                </div>
                <div className='setting-content btn-group setting-responsive'>
                  <button id='touch' className="sb-responsive-items set-border-radious-touch"
                    role="button" aria-label="Select touch mode" onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setMouseOrTouch(event)} tabIndex={0}>Touch</button>
                  <button id='mouse' className="sb-responsive-items set-border-radious-mouse"
                    role="button" aria-label="Select mouse mode" onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && setMouseOrTouch(event)} tabIndex={0}>Mouse</button>
                </div>
              </div>
              <div className="sb-setting-item sb-hide" id="theme-mode">
                <div className="theme-mode-label">
                  <div className="sb-icons " id="mobile-mode-icon"></div>
                  <div className='mode-label'>Theme Modes</div>
                </div>
                <div className="sb-theme-option">
                  <DropDownListComponent id="sb-theme-mode" ref={themeModeDropDown} title="Theme Modes"
                    className='sb-setting-theme-select' dataSource={themesModeData} fields={dropdownFields}
                    index={selectedTheme?.includes('-dark') ? 1 : 0}
                    change={(e: any) => { changeThemeMode(e); }} />
                </div>
              </div>
              <div className='sb-setting-item sb-setting-culture'>
                <div className='setting-label'>
                  <div className='sb-icons sb-setting-icons sb-icon-Localization'></div>
                  <div className='sb-setting-text'>Localization</div>
                </div>
                <div className='setting-content'>
                  <DropDownListComponent id='sb-setting-culture' className='sb-setting-culture-select' title='Culture Selection' placeholder='Select a Culture'
                    dataSource={cultureData} ref={(t: DropDownListComponent) => { cultureDropDown = t; }} fields={dropdownFields} index={0}
                    change={(e: any) => { onCultureChange(e.value); }} >
                  </DropDownListComponent>
                </div>
                <div className="sb-setting-translate">
                  <span>* Translated by Google Translator</span>
                </div>
              </div>
              <div className='sb-setting-item sb-setting-currency'>
                <div className='setting-label'>
                  <div className='sb-icons sb-setting-icons sb-icon-Currency'></div>
                  <div className='sb-setting-text'>Currency</div>
                </div>
                <div className='setting-content'>
                  <DropDownListComponent ref={(t: DropDownListComponent) => { currencyDropDown = t; }} title='Currency Selection' placeholder='Select a Currency'
                    id='sb-setting-currency' className='sb-setting-currency-content' dataSource={currencySettings} fields={dropdownFields} index={0}
                    change={(e: any) => { setCurrencyCode(e.value); }}></DropDownListComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sb-content e-view">
          <div className='sb-right-pane e-view' id='right-pane'>
            <div className="sb-content-overlay">
              <div className="sb-loading">
                <svg className="circular" height="40" width="40">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={6} strokeMiterlimit={10} />
                </svg>
              </div>
            </div>
            <div className='sb-desktop-wrapper'>
              <div id='component-name' className='sb-component-name sb-rightpane-padding'>
                <h1 className='sb-sample-text' aria-level={1} role="heading">Data Grid</h1>
              </div>
              <div id='sample-bread-crumb' className='sb-bread-crumb sb-rightpane-padding' role="presentation" aria-disabled="true">
                <div className='sb-bread-crumb-text'>
                  <div className='category-text bread-ctext'> </div>
                  <div className='category-seperator sb-icons sb-icon-Next seperator'> </div>
                  <div className='component  bread-ctext'></div>
                  <div className="component-seperator sb-icons  sb-icon-Next seperator"> </div>
                  <div className='crumb-sample '></div>
                </div>
              </div>
              <div className='sb-action-description sb-rightpane-padding' ref={actionDescription}>
              </div>
              <div id='tab-component'>
                <Content theme={theme} removeOverlay={removeOverlay} viewMobilePropPane={viewMobilePropPane} sampleOverlay={sampleOverlay}>{children}</Content>
              </div>
              <div className='description-section sb-rightpane-padding' ref={description}>
              </div>
              <div className="post-wrapper">
                <div id='post-image' className="post-img">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="col-sm-12">
                        <div id="post-banner-head" className="post-header">Transform your Next.js web apps today with Syncfusion React components</div>
                      </div>
                      <div className="col-sm-12 cnt-area">
                        <div className="content-area">
                          <div className="post-cnt-pt">
                            <div className="post-cnt-icon click-icon sb-icons sb-icon-icon-selection"></div>
                            <div className="cnt-text">80+ high-performance and responsive UI components</div>
                          </div>
                          <div className="post-cnt-pt">
                            <div className="post-cnt-icon click-icon sb-icons sb-icon-icon-selection"></div>
                            <div className="cnt-text">Dedicated support</div>
                          </div>
                          <div className="post-cnt-pt">
                            <div className="post-cnt-icon click-icon sb-icons sb-icon-icon-selection"></div>
                            <div className="cnt-text">Hassle-free licensing</div>
                          </div>
                        </div>
                        <Link href="https://www.syncfusion.com/downloads/react" aria-label="Try it for free" legacyBehavior>
                          <a style={{ color: '#ffff', textDecoration: 'none' }}>
                            <div className="free-trial">TRY IT FOR FREE</div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sb-footer">
                <div className="sb-footer-left">
                  <div className="sb-footer-links">
                    <a href="https://ej2.syncfusion.com/react/documentation" target="_blank" aria-label="Documentation link (opens in a new window)">
                      <div className="sb-footer-link">Documentation</div>
                    </a>
                    <a href="https://www.syncfusion.com/forums/react-js2" target="_blank" aria-label="Forum link (opens in a new window)">
                      <div className="sb-footer-link">Forum</div>
                    </a>
                    <a href="https://syncfusion.com/blogs" target="_blank" aria-label="Blog link (opens in a new window)">
                      <div className="sb-footer-link">Blog</div>
                    </a>
                    <a href="https://www.syncfusion.com/kb" target="_blank" aria-label="Knowledge base (opens in a new window)">
                      <div className="sb-footer-link">Knowledge Base</div>
                    </a>
                  </div>
                  <div className="sb-footer-copyright"></div>
                </div>
                <div className="sb-footer-logo">
                  <a href="https://www.syncfusion.com" target="_blank" aria-label="Syncfusion - Opens in a new window">
                    <div className="sb-footer-logo-icon"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sb-body-overlay e-view">
            <div className="sb-loading">
              <svg className="circular" height="40" width="40">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth={6} strokeMiterlimit={10} />
              </svg>
            </div>
          </div>
          <div className="e-search-overlay sb-hide">
            <div className='sb-search-input' id='search-input-wrapper' data-value=''>
              <input type='text' className="e-icons" id='search-input' placeholder="Search here..." />
              <span className='e-icons sb-reset-icon'></span>
              <span className='e-icons  sb-search-icon'></span>
            </div>
            <div id='search-popup' className='sb-search-result'></div>
          </div>
          <div className='sb-mobilefooter e-view sample-navigation' id='mobile-footer'>
            <ButtonComponent id='mobile-prev-sample' aria-label="Navigate to previous sample" type='button' className="sb-navigation-prev sb-left" iconCss='sb-icons sb-icon-Previous' cssClass='e-flat'>
              PREVIOUS
            </ButtonComponent>
            <ButtonComponent id='mobile-next-sample' aria-label="Navigate to next sample" type='button' className="sb-navigation-next sb-right"
              iconCss='sb-icons sb-icon-Next' cssClass='e-flat' iconPosition='Right'>
              NEXT
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  )
}
