import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import data from './data'
import {Link} from 'react-router-dom'

export default function RecipeReviewCard() {


  return (
    <div style={{minHeight:"100vh"}} id="Service">
        <h1 data-aos="flip-left" style={{margin:"20px",textAlign:"center"}}>OUR SERVICE</h1>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
    {
        data.map((item)=>{
            return(
                <>
                <Card sx={{ maxWidth: 345,margin:'20px' }}  data-aos={item.class}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {item.name.substring(0,1)}
          </Avatar>
        }
        title={item.name}
        subheader="Service Avaliable"
      />
      <CardMedia
        component="img"
        height="194"
        image={item.Image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to={"/View/"+item.name}>View</Link>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
                </>
            )
        })
    }
    </div>
    </div>
  );
}
