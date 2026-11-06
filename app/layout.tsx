import type { ReactNode } from 'react';

export const metadata = {
  title: 'Automatic PDF Download',
  description: 'Download a PDF automatically when visiting the homepage',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body style={{ margin: 0 }}>{children}</body></html>;
}
