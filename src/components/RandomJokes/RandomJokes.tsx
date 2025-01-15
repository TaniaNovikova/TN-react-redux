import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  JokeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeText,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceActions,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import { v4 } from "uuid"
import { jokeData } from "../../store/redux/randomJokes/types"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(
    randomJokesSliceSelectors.jokeData,
  )

  console.log(`error: ${error}`)

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const deleteJokes = () => {
    dispatch(randomJokesSliceActions.deleteAllJokes())
  }

  const randomJokes = data.map((randomJoke: jokeData, index: number) => {
    const deleteJoke = () => {
      dispatch(randomJokesSliceActions.deleteJoke(randomJoke.id))
    }

    return (
      <div key={v4()}>
        <JokeText>{`${index + 1}. ${randomJoke.setup}-${randomJoke.punchline}`}</JokeText>
        <button onClick={deleteJoke}>Delete joke</button>
      </div>
    )
  })
  
  return (
    <RandomJokesWrapper>
      <JokeCard>
        <Button name="GET JOKES" onClick={getJoke} />
        {status === "loading" && <Spinner />}
        <JokesContainer>{randomJokes}</JokesContainer>
        <Button name="DELETE JOKES" onClick={deleteJokes} />
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
