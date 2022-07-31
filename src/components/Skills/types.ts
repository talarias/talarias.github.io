
export class SkillItem {
  title!: String
  percent!: number
}

export class SkillsData {
  showFilter?: boolean
  items!: SkillItem[]
}
