import React from 'react'
import { List, ListItem, Avatar, Typography, ListItemAvatar, ListItemText, styled } from '@mui/material'

const MyList = styled(List)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform:"translate(-50%,-50%)",
})

function About() {
  return (
    <MyList sx={{  bgcolor: 'background.paper'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/I/41jLBhDISxL._AC_UF1000,1000_QL80_.jpg" sx={{ width: 150, height: 150 }} />
        </ListItemAvatar>
        <ListItemText
          primary="My IMDB Cart"
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: 'medium',
            letterSpacing: 1,
            paddingTop: 2,
            paddingLeft:2,
          }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                The cart displays all kinds of content like movies in all languages, series, podcasts,etc.Add the movie to your cart and watch them anytime you want.
              </Typography>
            </React.Fragment>
          }
          secondaryTypographyProps={{
            fontWeight: 'medium',
            letterSpacing: 0,
            paddingTop: 2,
            paddingLeft: 2,
          }}
        />
      </ListItem>
    </MyList>
  )
}

export default About
