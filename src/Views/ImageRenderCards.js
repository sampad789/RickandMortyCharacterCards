import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
     
    width: 400,
    margin: 10,
  },
  media: {
    height: 500,
  },
};

function ImageRenderCards(props) {
    const { classes } = props;
    
    return (
      <Card className={classes.card} >
        <CardActionArea>
        
        <CardMedia
          component="img"
          title={props.name}
          image = {props.image.toString()} 
         
        />
        
         
          <CardContent>
          <Typography component="h1">
            Name: {props.name}
        </Typography>
        <Typography>
            Gender: {props.gender}
</Typography>
<Typography>
            Location: {props.location}
</Typography>
<Typography>
            Origin: {props.origin}
</Typography>
<Typography>
            Species : {props.species}
</Typography>
<Typography>
            Status : {props.status}
</Typography>
           
           
       
            
          </CardContent>
        </CardActionArea>
        
      </Card>
    );
  }
  

  ImageRenderCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageRenderCards);