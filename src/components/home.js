import React,{Component, Fragment} from 'react';
import Nav from "./common/navbar"
import Grid from "@material-ui/core/Grid"
import Card from "./movieComponent"
import Data from "../content/index.js"
import Fade from "@material-ui/core/Fade"

class Home extends Component {
    constructor(props){
        super(props);
      this.state={
          
      }
    }
    
    handleClick=(i)=>{
        

        this.props.history.push(`/description/${i}`)
    }
    render(){
        return(
        <Fragment>
            
            <Nav />
         
            <Fade in={true} timeout={{enter:500, exit:500}}>
            <Grid container justify="center" alignItems="center" style={{backgroundColor:'#080808'}} >
                
                    {
                        Data.movie.map((data)=>
                        {return(
                            <Grid item md={5} style={{margin:'1%'}} onMouseEnter={this.handleHover} onMouseOut={this.handleHover}>

                                <Card data={data} hover={this.state.hover} handleClick={this.handleClick}  />
                            </Grid>
                        )})
                    }
                </Grid>
                
                </Fade>
                
        
               
         
        </Fragment>
        ) 
}
    
}
export default Home