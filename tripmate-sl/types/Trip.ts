export interface Trip  {
  id?: string
  uid: string;  
  title: string
  startDate: Date
  endDate: Date
  destinations: string[]
  totalBudget?: number
  status: "planned" | "ongoing" | "completed"
  createdAt: Date

}