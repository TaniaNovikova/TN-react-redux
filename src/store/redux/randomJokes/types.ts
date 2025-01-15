export interface RandomJokesSliceState {
  data: jokeData[]
  error: any
  status: "default" | "loading" | "success" | "error"
}

export interface jokeData {
  id: string
  setup: string
  punchline: string
}
