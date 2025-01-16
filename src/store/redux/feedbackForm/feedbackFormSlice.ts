import { createAppSlice } from "../../createAppSlice"
import { FeedbackFormSliceState } from "./types"

const feedbackFormInitialState: FeedbackFormSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const feedbackFormSlice = createAppSlice({
  name: "FEEDBACK_FORM",
  initialState: feedbackFormInitialState,
  reducers: create=>({}),
  selectors: {}
})
export const feedbackFormSliceActions = feedbackFormSlice.actions
export const feedbackFormSliceSelectors = feedbackFormSlice.selectors
