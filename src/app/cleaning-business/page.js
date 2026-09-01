// 'use client';

// import AppWrapper from '../../components/AppWrapper';
import CleaningBusinessPage from '../../page-components/cleaning-business';

export const metadata = {
  title: 'Cleaning Business | AI-Driven SaaS Growth Partners | MeMate',
  description: 'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  openGraph: {
    title: 'Cleaning Business | AI-Driven SaaS Growth Partners | MeMate',
    description: 'Join MeMate’s partner program to grow revenue, get exclusive benefits & support. Partner with us for success— apply now and start earning and growing with us.',
  },
  alternates: {
    canonical: 'https://memate.com.au/cleaning-business',
  },
}


export default function CleaningBusiness() {
  return (
    // <AppWrapper>
      <CleaningBusinessPage />  
    // </AppWrapper>
  );
}