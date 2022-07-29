import React from 'react'

import FooterItem from './components/Navigation/FooterItem'

import { SiteSettings } from './SiteSettings'

const menuFooterItems:any = [
    <FooterItem
      key={1}
      title = {'GitHub'}
      subTitle = {SiteSettings.githubUrl}
      url = {SiteSettings.githubUrl}
      logo = {'/github.png'}
      logoAlt = {'GitHub-logo'}
    ></FooterItem>
]

const MenuItems:any = [
]

export const LayoutSettings = {
  menuItems: MenuItems.map((item:any, i:number) => (
    <div key={i}>
      {item}
    </div>
  )),
  menuFooterItems: menuFooterItems.map((item:any, i:number) => (
    <div key={i}>
      {item}
    </div>
  ))
}
