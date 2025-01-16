import {
  JokeCard,
  RandomJokesWrapper,
  JokeText,
  LoaderWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceActions,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import { v4 } from "uuid"
import { jokeData } from "../../store/redux/randomJokes/types"
import { Button, List, ListItem, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import GoogleLoader from "../GoogleLoader/GoogleLoader"



function RandomJokesMui() {
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
      <ListItem key={v4()}>
        <IconButton color="error" onClick={deleteJoke}>
          <DeleteIcon />
        </IconButton>
        <JokeText>{`${index + 1}. ${randomJoke.setup}-${randomJoke.punchline}`}</JokeText>
      </ListItem>
    )
  })

  return (
    <RandomJokesWrapper>
      <JokeCard>
        <LoaderWrapper>
          {status !== "loading" && (
            <Button variant="contained" onClick={getJoke}>
              GET JOKES
            </Button>
          )}
          {status === "loading" && <GoogleLoader />}
        </LoaderWrapper>
        <List>{randomJokes}</List>

        <Button
          variant="contained"
          color="error" 
          onClick={deleteJokes}
          startIcon={<DeleteIcon />} 
        >
          DELETE ALL JOKES
        </Button>
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokesMui
