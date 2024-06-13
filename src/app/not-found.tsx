'use client';
import { useEffect } from 'react';
import { base_path } from '@/common/utils';
 
export default function NotFound() {
    useEffect(() => {
        location.pathname = base_path;
    }, []);

    return (
        <div></div>
    )
}