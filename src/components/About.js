import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: '#1d1b1d',
    //'#1d1b1d'''
    borderRadius: 20, // makes cards round

    ...theme.typography.body2,
    //padding: theme.spacing(5),
    //textAlign: 'center',
    // color: theme.palette.text.secondary,
    // ...theme.applyStyles('dark', {
    //   backgroundColor: '#1A2027',
    // }),
  }));

function About() {
    return (
        <Box className="content-section" >
            <Box className="section-header" paddingTop="50px" paddingBottom="25px">
              <Typography variant="h2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
                About
              </Typography>
            </Box>
            <Grid container spacing={1} className="content-cardset-container" >
              <Grid size={{xs: 12, sm: 6, md: 4 }} borderRadius="20px" display="flex" flexDirection="column" backgroundColor='#1d1b1d' > 
              <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents"> 
                <Item height="100%" width="100%">
                  <img src={require('./media/contentimg4.png')} alt="green pattern 1" width="100%" height="100%"></img>
                </Item>
                <Box padding="10px" margin="5%" >
                  <Typography paddingBottom="5px" variant="h5" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
                    &#60; Full Stack Engineering &#62;
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '300', color:"#fff"}}>
                  Learn about the latest web technologies I utilize to build and drive new product features from inception to launch
                  </Typography>
                </Box>
                </Link>

              </Grid>
              <Grid size={{xs: 12, sm: 6, md: 4 }} borderRadius="20px" display="flex" flexDirection="column" backgroundColor='#1d1b1d' >
              <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents">
                <Item height="100%" width="100%">
                  <img src={require('./media/contentimg9.png')} alt="green g pattern 1" width="100%" height="100%"></img>
                </Item>
                <Box padding="10px" margin="5%">
                  <Typography paddingBottom="5px" variant="h5" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
                  &#60; AI Development &#62;
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '300', color:"#fff"}}>
                  New innovations in NLP and Computer Vision excite me - click to see how I apply multimodal methods to provide automated solutions
                  </Typography>
                </Box>
              </Link>
              </Grid>
              <Grid size={{xs: 12, sm: 6, md: 4}} borderRadius="20px" display="flex" flexDirection="column" backgroundColor='#1d1b1d' >
              <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents">  
                <Item height="100%" width="100%">
                  <img src={require('./media/contentimg8.png')} alt="purple 3 pattern 1" width="100%" height="100%"></img>
                </Item>
                <Box padding="10px" margin="5%">
                  <Typography paddingBottom="5px" variant="h5" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
                    &#60; Freelancing &#62; !! Coming soon !!
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '300', color:"#fff"}}>
                    Start designing and launch your personal or business website with a complete service package by me
                  </Typography>
                </Box>
              </Link>
              </Grid>
            </Grid>
            </Box>
    );

}
export default About;