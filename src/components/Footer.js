import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';


function Footer() {
    return (
        <Box className="home-footer" marginTop="100px">
            <svg aria-hidden="true" width="100%" height="10" >
              <pattern id="a" width="91" height="10" patternUnits="userSpaceOnUse">
                <g clipPath="url(#clip0_2426_11367)">
                  <path 
                    d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" strokeLinecap="square">
                  </path>
                </g>
              </pattern>
              <rect width="100%" height="100%" fill="url(#a)"></rect>
            </svg>
            <Grid container spacing={1} className="footer-grid">
              <Grid size={{sm: 12, md: 6 }} display="flex" >
                <Typography variant="body2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '300', color:"#fff"}}>
                  Copyright
                </Typography>
              </Grid>
              <Grid size={{sm: 12, md: 6 }} display="flex" >
                <Typography variant="body2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '300', color:"#fff"}}>
                  Links
                </Typography>
              </Grid>
            </Grid>
          </Box>
    );
}

export default Footer;