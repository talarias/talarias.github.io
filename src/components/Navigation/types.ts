export class FooterItemData {
  title!: any
  url!: any
  logo: any
  logoAlt: any
  subTitle!: any
}

export type NavigationDataOld = {
    menuItems: any
    menuFooterItems: FooterItemData[]
    logo: any
    siteTitle: string
    siteSubTitle: string
}

export class NavigationData {
  menuItems: any
  menuFooterItems: FooterItemData[] | any
  logo: any
  siteTitle!: string
  siteSubTitle!: string
}

export class MenuData {
  menuItems: any
  menuFooterItems: any
}

export class MenuItemData {
  title!: string
  url!: string
  logo: any
  logoAlt!: string
}

export class LayoutData {
}
