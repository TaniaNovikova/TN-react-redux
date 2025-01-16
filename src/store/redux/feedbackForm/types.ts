
export interface FeedbackFormData {
  name: string
  email: string
  id: number
}

export interface FeedbackFormSliceState {
  data: []
  error: any
  status: "default" | "loading" | "success" | "error"
}
