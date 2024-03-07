import localFont from 'next/font/local';

export const primaryFont = localFont({
  src: [
    {
      path: '../fonts/FoundersGrotesk-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/FoundersGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/FoundersGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/FoundersGrotesk-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/FoundersGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/FoundersGrotesk-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--primary-font',
});
