import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CodeIcon from '@mui/icons-material/Code';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';



function NavBar() {
 
  return (
    <AppBar position="sticky" color="white">
            <Grid container spacing={5} className="navbar-container" margin="30px" paddingTop="10px" justifyContent="center">
              <Grid display="flex" flexDirection="column"  alignItems="center">
                <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents" color="white">
                  <RoofingOutlinedIcon />
                  <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 'smaller', fontWeight: '400', color:"#fff" }}>
                    Home
                  </Typography>  
                </Link>
              </Grid>
              {/* <InfoRoundedIcon/> */}
              <Grid display="flex" flexDirection="column"  alignItems="center">
                <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents" color="white">
                  <InfoOutlinedIcon/>
                  <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 'smaller', fontWeight: '400', color:"#fff" }}>
                    About
                  </Typography>  
                </Link>
              </Grid>
              <Grid display="flex" flexDirection="column"  alignItems="center">
                <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents" color="white">
                  <CodeIcon/>
                  <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 'smaller', fontWeight: '400', color:"#fff" }}>
                    Projects
                  </Typography>  
                </Link>
              </Grid>
              <Grid display="flex" flexDirection="column"  alignItems="center">
                <Link href="https://linkedin.com/in/htn5400" target="_blank" rel="noopener noreferrer" underline="none" display="contents" color="white">
                  <WorkOutlineOutlinedIcon/>
                  <Typography sx={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 'smaller', fontWeight: '400', color:"#fff" }}>
                    Work
                  </Typography>  
                </Link>
              </Grid>
            </Grid>
          </AppBar>
  );
}
export default NavBar;
