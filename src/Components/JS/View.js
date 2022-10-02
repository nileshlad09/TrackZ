import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BiMapPin } from 'react-icons/bi'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function View() {
    const params = useParams();
    const name = params.name;
  return (
    <>
    <h3 style={{textAlign:"center",color:"brown",marginTop:"5px",fontWeight:"500"}}>{name}</h3>
    <div style={{marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"10px", }}>
    <Card sx={{ maxWidth:"100%",marginTop:"20px" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{display:"flex",alignItems:"center",justifyContent:"left",flexWrap:"wrap" }}>
          Nikhil Adhare
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kalyan<BiMapPin/>
        </Typography>
        <Typography gutterBottom variant="p"  color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">4.5/5</Button>
        <Link to="/ProfileService"><Button size="small">Profile</Button></Link>
        <Stack direction="row" spacing={2} style={{marginLeft:"10px"}}>
      <Button variant="outlined" color="error">
        Alert
      </Button>
    </Stack>
      </CardActions>
    </Card>
     <Card sx={{  maxWidth:"100%",marginTop:"20px" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{display:"flex",alignItems:"center",justifyContent:"left",flexWrap:"wrap" }}>
          Sanchit Gharge
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Thane<BiMapPin/>
        </Typography>
        <Typography gutterBottom variant="p"  color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">4.5/5</Button>
        <Link to="/ProfileService"><Button size="small">Profile</Button></Link>
        <Stack direction="row" spacing={2} style={{marginLeft:"10px"}}>
      <Button variant="outlined" color="error">
        Alert
      </Button>
    </Stack>
      </CardActions>
    </Card>
    <Card sx={{  maxWidth:"100%",marginTop:"20px" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{display:"flex",alignItems:"center",justifyContent:"left",flexWrap:"wrap" }}>
         Ved Dhahale
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Kalyan<BiMapPin/>
        </Typography>
        <Typography gutterBottom variant="p"  color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">4.5/5</Button>
        <Link to="/ProfileService"><Button size="small">Profile</Button></Link>
        <Stack direction="row" spacing={2} style={{marginLeft:"10px"}}>
      <Button variant="outlined" color="error">
        Alert
      </Button>
    </Stack>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
