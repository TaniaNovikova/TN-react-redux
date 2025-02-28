import { createAppSlice } from "../../createAppSlice"
import type { FeedbackStateSlice } from "./types"

export const feedbackInitialState: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackStateSlice) => {
      state.likes = state.likes + 1
    }),
    addDislike: create.reducer((state: FeedbackStateSlice) => {
      state.dislikes = state.dislikes + 1
    }),
    resetLikes: create.reducer(
      (state: FeedbackStateSlice) => feedbackInitialState,
    ),
  }),
  selectors: {
    likes: (state: FeedbackStateSlice) => state.likes,
    dislikes: (state: FeedbackStateSlice) => state.dislikes,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
