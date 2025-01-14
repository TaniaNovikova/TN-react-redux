import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import RefreshIcon from "@mui/icons-material/Refresh"
import ReplayIcon from "@mui/icons-material/Replay"

import FeedbackImg from "../../assets/kandinsky-download-1736642259845.png"
import {
  FeedbackContainer,
  FeedbackResultContainer,
  ImgWrapper,
  LikeDislikeContainer,
  ResetContainer,
  Result,
  StyledButton,
  StyledImg,
} from "./styles"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "../../store/redux/feedback/feedbackSlice"

import CustomIcon from "../CustomIcon/CustomIcon"

function Feedback() {
  const dispatch = useAppDispatch()

  const likes = useAppSelector(feedbackSliceSelectors.likes)
  console.log(likes)

  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)
  console.log(dislikes)

  const addLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }
  const addDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }
  const resetResults = () => {
    dispatch(feedbackSliceActions.resetLikes())
  }

  return (
    <FeedbackContainer>
      <ResetContainer>
        <StyledButton onClick={resetResults}>
          <CustomIcon icon={RestartAltIcon} />
        </StyledButton>
      </ResetContainer>
      <ImgWrapper>
        <StyledImg src={FeedbackImg} />
      </ImgWrapper>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <StyledButton onClick={addLike}>
            <CustomIcon icon={ThumbUpIcon} />
          </StyledButton>
          <Result isLike>{likes}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <StyledButton onClick={addDislike}>
            <CustomIcon icon={ThumbDownIcon} />
          </StyledButton>
          <Result isLike={false}>{dislikes}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
    </FeedbackContainer>
  )
}

export default Feedback
