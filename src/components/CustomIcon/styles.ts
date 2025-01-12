import { styled } from "@mui/material/styles"
import { Theme } from "@mui/material/styles"


export const StyledIcon = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.light, // Цвет фона, берется из темы
    color: theme.palette.primary.contrastText, // Цвет иконки
    width: "60px", 
    height: "60px", 
    borderRadius: "50%", 
    padding: "10px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    border: "2px solid transparent", 
    transition: "background-color 0.3s, border-color 0.3s", 
    "&:hover": {
      backgroundColor: theme.palette.primary.main, 
      borderColor: theme.palette.primary.dark, 
    },
  }))