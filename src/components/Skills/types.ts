
export class SkillItem {
  title!: String
  percent!: number
  subtitle?: String
  description?: String
}

export class SkillsData {
  showFilter?: boolean
  items!: SkillItem[]
}
