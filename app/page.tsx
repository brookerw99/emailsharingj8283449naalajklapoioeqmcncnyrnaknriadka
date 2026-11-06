'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const triggered = useRef(false);

  useEffect(() => {
    if (triggered.current) return;
    triggered.current = true;

    const link = document.createElement('a');
    link.href = '/api/download';
    link.download = 'document.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return null;
}
