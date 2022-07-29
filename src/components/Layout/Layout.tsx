import React, { FC } from 'react'

import { SiteSettings } from '../../SiteSettings'
import { LayoutSettings } from '../../LayoutSettings'

import Navigation from '../Navigation/Navigation'
import { LayoutData } from '../Navigation/types'

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
    </>
  )
}

export default Layout
