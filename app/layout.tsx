import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'doodle talk — 대화를 목소리로.', description: '대화를 붙여넣고, 나만의 대본을 만들어보세요.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="ko"><body>{children}</body></html>; }
