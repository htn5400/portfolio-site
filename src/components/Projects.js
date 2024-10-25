import * as React from 'react';
import Paper from '@mui/material/Paper';
import Carousel from 'react-material-ui-carousel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Projects() {
    const projects = [
        {
            name: "Full Stack Project",
            description: "React, JavaScript ES6, Node, Express, MongoDB, Socket.IO, AWS S3",
            imgsrc: "./media/contentimg4.png"
        },
        {
            name: "Live Chat Messenger",
            description: "NextJS, Firebase, Chakra UI",
            imgsrc: "./media/contentimg5.png"
        },
        {
            name: "Interactive AI",
            description: "ML tools including PyTorch, Tensorflow, Scikit-Learn",
            imgsrc: "./media/contentimg6.png"
        },
        {
            name: "Entertainment social media",
            description: "Journal for media that has chemically altered my brain, using TikTok and Twitter Display APIs",
            imgsrc: "./media/contentimg7.png"
        }
      ]

    return (
        <Box className="projects-content" >
              <Box className="projects-header" paddingTop="50px" paddingBottom="25px">
                <Typography  variant="h2" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
                  Project directory 
                </Typography>
              </Box>
              <Carousel className="projectsCarousel" interval="3500" duration="600" navButtonsAlwaysVisible="True">
                {
                  projects.map( (project, i) => <ProjectItem key={i} project={project} /> )
                }
              </Carousel>
            </Box>
    );

}

function ProjectItem(props)
{
    return (
        <Paper sx={{ backgroundColor: '#1d1b1d', borderRadius:"20px" }} >
            {/* Learned about template literals. In this case, I am using to interpolate variables and expressions into strings. */}
            <img src={require(`${props.project.imgsrc}`)} alt={props.project.name} width="100%" height="100%"></img>
            <Typography  variant="h5" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '400', color:"#fff"}}>
              {props.project.name}
            </Typography>
            <Typography  variant="body1" sx={{ fontFamily: 'Roboto, Arial, sans-serif',  fontWeight: '270', color:"#fff"}}>
              {props.project.description}
            </Typography>

            <Button 
              href="https://www.linkedin.com/in/htn5400" target="_blank" 
              rel="noopener noreferrer" variant="contained" 
              sx={ { borderRadius: 28, color:'black', backgroundColor: '#A67AFE', fontFamily: 'Roboto, Arial, sans-serif' }}>
                Check it out!
            </Button>

        </Paper>
    )
}
export default Projects;