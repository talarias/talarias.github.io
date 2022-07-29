export class FooterItemData {
  title!: string
  url!: string
  logo: any
  logoAlt: string | undefined
  subTitle!: string
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
  menuFooterItems!: FooterItemData[]
  logo: any
  siteTitle!: string
  siteSubTitle!: string
}

export class MenuData {
  menuItems: any
  menuFooterItems!: FooterItemData[]
}
