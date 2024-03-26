import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Promtopia',
  description: 'Your AI promt collections',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gardient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
