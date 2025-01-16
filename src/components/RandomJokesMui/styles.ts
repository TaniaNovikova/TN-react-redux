import styled from "@emotion/styled"

export const RandomJokesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e4ddb8;
  flex: 1;
  padding: 50px;
`
export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 1000px;
  min-height: 400px;
  padding: 20px;
  background-color: rgb(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const JokesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const JokeText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rebeccapurple;
`
export const LoaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
