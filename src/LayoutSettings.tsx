import React from 'react'

import FooterItem from './components/Navigation/FooterItem'
import MenuItem from './components/Navigation/MenuItem'

import { SiteSettings } from './SiteSettings'

const menuFooterItems:any = [
    <FooterItem
      key={1}
      title = {'GitHub'}
      subTitle = {SiteSettings.githubUrl}
      url = {SiteSettings.githubUrl}
      logo = {'/github.png'}
      logoAlt = {'GitHub-logo'}
    />
]

const MenuItems:any = [
  <MenuItem
    key={1}
    title={'Über mich'}
    url={''}
    logo={false}
    logoAlt={''}
  />,
  <MenuItem
    key={2}
    title={'Title'}
    url={''}
    logo={'https://avatars.githubusercontent.com/u/53948891?v=4'}
    logoAlt={''}
  />
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
