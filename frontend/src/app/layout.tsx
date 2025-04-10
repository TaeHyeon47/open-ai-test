import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/common/MainHeader';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box, CssBaseline } from '@mui/material';
import EnvironmentComponent from '@/EnvironmentComponent';
import { DrawerHeader } from '@/components/common/DrawerHeader';
import { Providers } from '@/redux/provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <EnvironmentComponent>
              <Box sx={{ display: 'flex' }}>
                <MainHeader />
                <CssBaseline />
                <Box
                  component="main"
                  sx={{
                    height: 'calc(100vh)',
                    width: '100%',
                  }}
                >
                  <DrawerHeader />
                  {children}
                </Box>
              </Box>
            </EnvironmentComponent>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
