export interface Trip  {
  id?: string
  title: string
  startDate: Date
  endDate: Date
  destinations: string[]
  totalBudget?: number

  createdAt: Date

}