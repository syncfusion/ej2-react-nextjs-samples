'use client';
import React from 'react';
import { createPortal } from 'react-dom';
import { Browser } from '@syncfusion/ej2-base';


export default function PropertyPane({ title, children, isDevice = Browser.isDevice }: { title: string; children?: React.ReactNode, isDevice?: boolean }) {
  let mobilePane!: HTMLElement;
  let isMobile: boolean = false;
  if (typeof document !== 'undefined') {
    mobilePane = document.getElementById('mobile-pane') as HTMLElement;
    isMobile = window.matchMedia('(max-width:550px)').matches;
  }

  return ( isDevice && isMobile ? createPortal(
    <div className="property-panel-section">
      <div className="property-panel-header">
        {title}
      </div>
      <div className="property-panel-content">
        {children}
      </div>
    </div>
    , mobilePane) : <div className="property-panel-section">
        <div className="property-panel-header">
          {title}
        </div>
        <div className="property-panel-content">
          {children}
        </div>
      </div>
  );
};

