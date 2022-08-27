export class CardData {
  title?: String
  subTitle?: String | undefined
  backgroundData?: any
  windowFx?: Boolean
  overlay?: Boolean
}

export class CardStyleData {
  WebkitTransform?: String
  background?: String
  backgroundPosition?: String
}

export class MousePos {
  x!: number
  y!: number
}

export class PositionsData {
  angle!: number
  currentMousePosY!: number
  wHeight!: number
  trans1!: string
  trans2!: string
  around1!: string
  around2!: string
  mousePositionX!: number
  mouseFromCenterX!: number
  mouseFromCenterY!: number
}
