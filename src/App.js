import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 4,
          p: 11,
          width: 450,
          height: 140,
          background: ' #feb47b',
        },
      }}
    >
   

      <Paper elevation={3}>
      <CardActions>
      <Typography size="small" variant="h3" component="div" sx={{ mb:1 }}>
      BASIC INFORMATION
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
        CAREER OBJECTIVE
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1}}>
      EDUCATIONAL DETAILS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      SOFT<br/> SKILLS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1}}>
      IT<br/> SKILLS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
       INDUSTRIAL TRAINING
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>




      <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1}}>
      INTRENSHIP DETAILS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={1} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
        PROJECTS DETAILS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }} >Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      ACHIEVEMENTS DETAILS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mt: -4 }}>
       EXTRA CURRICULAR ACTIVITIES
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained" sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      YOUR STRENGTHS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      YOUR <br/>HOBBIES
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      AREA OF IMPROVEMENT
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>



    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      YOUR CERTIFICATIONS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
      GOVERMENT IDENTIFICATION
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>
    
    <Paper elevation={3}>
      <CardActions>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
     SOCIAL MEDIA DETAILS
      </Typography>
      </CardActions>
      <Button size="medium"  elevation={9} variant="contained"  sx={{ ml: 40.5 }}>Fill DETAILS</Button>
    </Paper>


      
    </Box>
  );
}