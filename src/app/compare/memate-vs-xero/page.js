// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import MemateVsXeroPage from '../../../page-components/memate-vs-xero';

export const metadata = {
  title: 'Compare MeMate vs Xero | Save More, Do Less Accounting',
  description: 'Compare MeMate vs QuickBooks—discover key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  openGraph: {
    title: 'Compare MeMate vs Xero | Save More, Do Less Accounting',
    description: 'Compare MeMate vs Xero key differences, pricing & features, and see why MeMate is the smarter choice for businesses. Explore our solution now!',
  },
}

export default function MemateVsXero() {
  return (
    // <AppWrapper>
      <MemateVsXeroPage /> 
    // </AppWrapper>
  );
}