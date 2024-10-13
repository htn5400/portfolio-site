import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
//import CssBaseline from '@mui/material/CssBaseline';
//import Card from '@mui/material/Card';
//import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// from MUI Grid component documentation
const Item = styled(Card)(({ theme }) => ({
    backgroundColor: 'blue',
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

function Home(){
    return (
        <Box className="home-container" backgroundColor="#141314">
        {/* sx={{ flexGrow: 1 }} */}
        {/* flexGrow: 1 is a CSS Flexbox property. It tells the flex item (the Box component) to take up any remaining space in the flex container.  */}
          <Box className="home-main">


           {/* 
           Header  
           */}
          <Grid container spacing={1} className="header-container"> 
          {/* alignItems="stretch" */}
            <Grid size={{sm: 12, md: 6 }} display="flex" className="title-container"> 
            {/* display="flex" */}
            {/* the view is split into 12, so 6 means half the view */}
              <Item height="100%" className="title-wrapper">
              <Typography variant="h1" sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '7rem', fontWeight: '400', color:"#fff" }}>Huong Nguyen</Typography>                
              <Typography variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontWeight: '200', color:"#fff" }} className="description">Huong N. is a full stack developer who enjoys making kick ass apps. Develop and enjoy beautiful, usable products with Huong's expertise.</Typography>
              <Button href="https://www.linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" variant="contained" sx={ { borderRadius: 28, color:'black', backgroundColor: '#A67AFE', fontFamily: 'Roboto, Arial, sans-serif' }}>Get started</Button>

              </Item>
            </Grid>
            <Grid size={{sm: 12, md: 6 }} display="flex" className="video-container">
              <Item height="100%" width="100%" >
              {/* flex="1" */}
                {/* Create-react-app uses webpack under the hood so make sure you do src correctly */}
                {/* <img src={require('./mommy.jpg')} alt="mommy's lil monster" width="600" height="600"></img> */}
                <video autoPlay muted loop width="100%" height="100%" objectFit="contain" >
                    <source src={require("./materialdesign.mp4")} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
              </Item>
            </Grid>
          </Grid>


          {/* 
          Content 
          */}
          {/* <Box className="home-content-container" display="flex" width="90%" >
            <Box className="home-content-header"  >
              <Typography variant="h2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '380', color:"#fff"}}>News & launches </Typography>
            </Box>
            <Grid container spacing={1} className="content-cardset-container">
              <Grid size={{sm: 12, md: 6 }} display="flex"> 
                <Item height="100%">
                  <Typography>HI</Typography>
                </Item>
              </Grid>
              <Grid size={{sm: 12, md: 6 }} display="flex">
                <Item height="100%">
                  <Typography>THERE</Typography>
                </Item>
              </Grid>
            </Grid>
          </Box> */}




          {/* 
          Footer 
          */}
          </Box>
          <Box className="home-footer"></Box>
        </Box>
      );
}

export default Home;