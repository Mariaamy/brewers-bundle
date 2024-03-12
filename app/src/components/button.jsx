import { styled } from "@mui/material";
import { Button } from "@mui/material";
import { teal, grey } from "@mui/material/colors";


/*
navigate to /visuallib for visualized buttons.

Button overview:
- Primary: Call to action buttons, the most improtant interactions.
- Secondary: Second most important. Like cancel events.
- Unimportant: ...

ref: https://medium.com/appledeveloperacademy-ufpe/buttons-in-ui-design-types-and-best-practices-baefce6d5909
*/

export const PrimaryButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(teal[500]),
    width: "10rem",
    marginTop: "1.5rem",
    backgroundColor: teal[400],
    '&:hover': {
      backgroundColor: teal[700],
    },
}));


export const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[300]),
  width: "10rem",
  backgroundColor: grey[300],
  '&:hover': {
    backgroundColor: grey[500],
  },
}));

export const PrimaryLink = {
    color: teal[400],
    '&:hover': {
      color: teal[700]
    }
}

export const SecondaryLink = {
  color: grey[500],
  '&:hover': {
    color: teal[700]
  }
}