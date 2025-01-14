import styled from "@emotion/styled"

interface ResultProps {
  isLike: boolean
}

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  padding: 40px;
  background-color: rgb(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
`

export const ImgWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
`
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
export const FeedbackResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: fit-content;
`

export const Result = styled.div<ResultProps>`
  min-width: 70px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: ${({ isLike }) => (isLike ? "#2c80a5" : "#9bb489")};
`

export const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
`
export const ResetContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
