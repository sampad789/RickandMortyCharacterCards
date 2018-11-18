import React, { Component } from 'react';
import axios from 'axios';
import url from '../Const/AppConstants';
import ImagerenderCards from '../Views/ImageRenderCards';
import '../App.css';
import NavigationIcon from '@material-ui/icons/Navigation';


import {
	AppBar,
	Toolbar,
	Typography,
    Button,
} from "@material-ui/core/es/index";

class Characters extends Component{
    
constructor(props){
    super();
    this.state= {
        data : [],
        page : 2,
        
    }


}

componentDidMount () {
    axios.get(url).then( (response) => {
                
                this.setState({data:response.data.results})
                console.log(this.state.data);
              })
              .catch( (error) => {
                console.log(error);
              });
             
    }

    fetchmore = () =>{
        axios.get("https://rickandmortyapi.com/api/character/?page= "+ this.state.page +""   ).then( (response) => {
                    
            this.setState({data:response.data.results})
            console.log(this.state.page);
            console.log(this.state.data);
          })
          .catch( (error) => {
            console.log(error);
          });
    
    }
    


handleChange= (e) => {
 e.preventDefault ();
 this.setState((prevState) => {
    return {page: prevState.page + 1}
});
    this.fetchmore();
    window.scrollTo(0, 0);
};






render(){
  const renderCards = this.state.data.map((item,index) =>
    <ImagerenderCards key={index}
    id = {item.id}
    name = {item.name}
   
    image ={item.image}
    gender = {item.gender}
    location ={item.location.name}
    origin = {item.origin.name}
    species ={item.species}
    status = {item.status}
          
    />);
    return (
        <div>
        <div>
            <AppBar  position="static" >
						<Toolbar >
							
                            <span style={{ height: '80px', width: '80px', marginRight: '15px',  }}>
                            <img src = "https://media.giphy.com/media/3o85xuO1siCT147FrG/giphy.gif"  alt="gifs" width="80px" height="80px"/>
                            </span>
							<Typography  variant="h5" color="inherit" align = "center" >
								Rick And Morty Characters </Typography>

                          </Toolbar>

                     </AppBar>
        </div>
        <div className = "main-view">

        

            {renderCards}

            
        </div>
        <div className ="bottom-button">
        <Button variant="extendedFab" aria-label="Delete" onClick={this.handleChange}>
        <NavigationIcon/>
        Show more 
      </Button>
      </div>
        </div>
    )
}


}


export default Characters ;