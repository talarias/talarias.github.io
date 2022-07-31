export class PageParallaxData {
  title!: String
  subtitle?: String
  backgroundImg: any
  children: any
}

export class PageRowData {
  children: any
  variant?: 'bright' | 'dark' | 'fill' | ''
  showBorder?: 'top' | 'bottom' | 'top-bottom' | ''
  showPadding?: Boolean
}
