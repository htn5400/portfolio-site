import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import Link from '@mui/material/Link';
//import Paper from '@mui/material/Paper';
//import Carousel from 'react-material-ui-carousel';

//import NavBar from './NavBar';
import Footer from './Footer';
import About from './About'
import Projects from './Projects';


// const useStyles = makeStyles(() => ({
//   navbar: {
//     height: "10vh",
//     width: "50vw",
//     // backgroundColor: "#1d1b1d"
//     color: "#1d1b1d"
//   },
// }));

// from MUI Grid component documentation
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

function Home(){
    // const classes = useStyles();

    
    return (
      
        <Box className="home-container" backgroundColor="#141314" display="flex" flexDirection="row">
        {/* sx={{ flexGrow: 1 }} */}
        {/* flexGrow: 1 is a CSS Flexbox property. It tells the flex item (the Box component) to take up any remaining space in the flex container.  */}

        {/* 
        LEFT NAV BAR 
        */}
        {/* <Box flexGrow={0} backgroundColor="#1d1b1d">
          <NavBar />
        </Box> */}

        {/* 
        MAIN CONTENT AREA 
        */}
          <Box className="home-main" >


           {/* 
           Header  
           */}
          <Grid container spacing={1} className="header-container" margin="10px" paddingTop="10px"> 
          {/* alignItems="stretch" */}
            <Grid size={{sm: 12, md: 6 }} display="flex" className="title-container" > 
            {/* display="flex" */}
            {/* the view is split into 12, so 6 means half the view */}
              <Item height="100%" className="title-wrapper" >
              <Typography padding="20px" variant="h1" sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: '7rem', fontWeight: '400', color:"#fff" }}>
                Huong Nguyen
              </Typography>                
              <Typography padding="20px" variant="h6" sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontWeight: '200', color:"#fff" }} className="description">
                Huong N. is a software engineer who enjoys making kick ass apps. Develop and enjoy beautiful, usable products with Huong's expertise.
              </Typography>
              <Button href="https://www.linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" variant="contained" sx={ { borderRadius: 28, color:'black', backgroundColor: '#A67AFE', fontFamily: 'Roboto, Arial, sans-serif' }}>Linkedin</Button>

              </Item>
            </Grid>
            <Grid size={{sm: 12, md: 6 }} display="flex" className="video-container">
              <Item height="100%" width="100%" >
              {/* flex="1" */}
                {/* Create-react-app uses webpack under the hood so make sure you do src correctly */}
                {/* <img src={require('./mommy.jpg')} alt="mommy's lil monster" width="600" height="600"></img> */}
                <video autoPlay muted loop width="100%" height="100%" objectfit="contain" >
                    <source src={require("./media/materialdesign.mp4")} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
              </Item>
            </Grid>
          </Grid>


          {/* 
          Content 
          */}
          <Box className="home-content-container" width="90%" margin="auto" padding="20px">
            <About/>
          </Box>





          {/* Extra Content */}
          <Box className="projects" width="90%" margin="auto" padding="20px" >
            <Projects/>
          </Box>
          

          {/* Contact Form */}
          <Box className="contact" width="90%" margin="auto" padding="20px" >
            <Box className="contact-header" paddingTop="50px" paddingBottom="25px">
                <Typography  variant="h2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
                  Get in touch
                </Typography>
              </Box>
          </Box>
          


          {/* 
          Footer 
          */}
          < Footer/>          
          </Box>
        </Box>
      );
}



export default Home;