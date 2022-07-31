import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { LayoutData } from '../Navigation/types'

import { SiteSettings } from '../../SiteSettings'
import { LayoutSettings } from '../../LayoutSettings'
import Footer from '../Footer/Footer'

import './globals.scss'
import './layout.scss'

const Layout: FC<LayoutData> = () => {
  return (
    <>
        <Navigation
          menuItems = {LayoutSettings.menuItems}
          menuFooterItems = {LayoutSettings.menuFooterItems}
          logo = {SiteSettings.logo}
          siteTitle = {SiteSettings.siteTitle}
          siteSubTitle = {SiteSettings.siteSubTitle}
        />
        <div className='layout-body' >
          <Outlet />
        </div>
        <Footer>
          {LayoutSettings.footerContent}
        </Footer>
    </>
  )
}

export default Layout
