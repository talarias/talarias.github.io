import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import { LayoutData } from '../Navigation/types'

import { SiteSettings } from '../../SiteSettings'
import { LayoutSettings } from '../../LayoutSettings'

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
        <Outlet />
    </>
  )
}

export default Layout
