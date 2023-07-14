import React from 'react'
import { Avatar, Typography, styled, Paper, Box, Grid } from '@mui/material'
import profile from '../../assets/profile.jpg'
import profile1 from '../../assets/profile2.png'
import profile2 from '../../assets/profile3.png'
import profile3 from '../../assets/profile4.png'
import logo from '../../assets/imdb.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MyGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 0,
  width: "100%"
})
function About() {
  return (
    <Box sx={{ flexGrow: 1,marginTop:"40px" }}>
      <MyGrid container spacing={2}>
        <MyGrid item xs={12} style={{marginBottom:"40px"}}>
          <Item style={{ width: "80%" }}>
            <Box
              component="img"
              sx={{
                height: 150,
                width: "100%",
              }}
              md={{ width: 1000 }}
              alt="The house from the offer."
              src={logo}
            />
            <Typography variant="h6" gutterBottom style={{ padding: "10px 0 0 12px" }}>
              " No good movie is too long and no bad movie is short enough."
            </Typography>
          </Item>
        </MyGrid>
        <MyGrid item xs={2} style={{flexDirection:"column"}}>

          <Avatar alt="Remy Sharp" src={profile} sx={{ height: '100px', width: '100px' }} />
          <Typography variant="subtitle2" gutterBottom style={{padding:"10px 0 0 12px"}}>
            Tapan Kumar - Marketing Head
          </Typography>
        </MyGrid>
        <MyGrid item xs={2} style={{ flexDirection: "column" }}>

          <Avatar alt="Remy Sharp" src={profile1} sx={{ height: '100px', width: '100px' }} />
          <Typography variant="subtitle2" gutterBottom style={{ padding: "10px 0 0 12px" }}>
            Jamy Forling - Co-Founder
          </Typography>
        </MyGrid>
        <MyGrid item xs={2} style={{ flexDirection: "column" }}>
          <Avatar alt="Remy Sharp" src={profile2} sx={{ height: '100px', width: '100px' }} />
          <Typography variant="subtitle2" gutterBottom style={{ padding: "10px 0 0 12px" }}>
            Anisha Das - Co-Founder
          </Typography>
        </MyGrid>
        <MyGrid item xs={2} style={{ flexDirection: "column" }}>
          <Avatar alt="Remy Sharp" src={profile3} sx={{ height: '100px', width: '100px' }} />
          <Typography variant="subtitle2" gutterBottom style={{ padding: "10px 0 0 12px" }}>
            Md Rayes - Lead HR
          </Typography>
        </MyGrid>
      </MyGrid>
    </Box>
    // <MyPaper elevation={3}>
    //   <Box p={2}
    //     component="img"
    //     sx={{
    //       height: 150,
    //       // width: 1000,
    //       // maxHeight: { xs: 233, md: 167 },
    //       // maxWidth: { xs: 350, md: 250 },
    //     }}
    //     md={{width:1000}}
    //     alt="The house from the offer."
    //     src={logo}
    //   />
    //   {/* <MyList sx={{ bgcolor: 'background.paper', display: "flex" }}>
    //     <ListItem style={{ width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center" }}>
    //       <ListItemAvatar>
    //         <Avatar alt="Remy Sharp" src={profile} sx={{ height: '130px', width: '130px' }} />
    //       </ListItemAvatar>
    //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //     </ListItem>
    //     <ListItem style={{ width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center" }}>
    //       <ListItemAvatar>
    //         <Avatar alt="Remy Sharp" src={profile1} sx={{ height: '130px', width: '130px' }} />
    //       </ListItemAvatar>
    //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //     </ListItem>
    //     <ListItem style={{ width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center" }}>
    //       <ListItemAvatar>
    //         <Avatar alt="Remy Sharp" src={profile2} sx={{ height: '130px', width: '130px' }} />
    //       </ListItemAvatar>
    //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //     </ListItem>
    //     <ListItem style={{ width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center" }}>
    //       <ListItemAvatar>
    //         <Avatar alt="Remy Sharp" src={profile3} sx={{ height: '130px', width: '130px' }} />
    //       </ListItemAvatar>
    //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
    //     </ListItem>

    //   </MyList> */}
    // </MyPaper>

  )
}

export default About
