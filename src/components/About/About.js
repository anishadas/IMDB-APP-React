import React from 'react'
import { Avatar, Typography,Box } from '@mui/material'
import profile from '../../assets/profile.jpg'
import profile1 from '../../assets/profile2.png'
import profile2 from '../../assets/profile3.png'
import profile3 from '../../assets/profile4.png'
import logo from '../../assets/imdb.jpg'
import { MyGrid,Item } from './styles'




function About() {
  return (
    <Box sx={{ flexGrow: 1,marginTop:"40px" }}>
      <MyGrid container spacing={2}>
        {/* for the large image with quote */}
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

        {/* grids for all team members */}
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
  )
}

export default About
