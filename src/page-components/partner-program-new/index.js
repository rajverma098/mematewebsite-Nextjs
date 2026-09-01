'use client'
import React from 'react'
import Layout from '../../layout';
import PartnerProgramComponentNew from '../../components/partner-program-new';
import AppWrapper from '../../components/AppWrapper';
const PartnerProgramPageNew = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <PartnerProgramComponentNew/>
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default PartnerProgramPageNew;
