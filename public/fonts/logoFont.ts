import localFont from 'next/font/local';

export const logoFont = localFont({
    src:[{path:'./Orbitron/Orbitron-ExtraBold.woff2', weight:'700'}],
    variable:'--font-logo',
    display:'swap',
    preload:true
});