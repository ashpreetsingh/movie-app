import React,{Component, Fragment} from 'react';
import Nav from "./common/navbar"
import Grid from "@material-ui/core/Grid"
import Card from "./movieComponent"
import Data from "../content/index.js"
import Fade from "@material-ui/core/Fade"
import Carousel from "./carousel"
import bg from "../content/images/web-bg.jpg"

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
        <div style={{background:`url(${bg})`}}>
            
            <Nav />
           <Grid container justify="center" alignItems="center"  >
               <Carousel />
        </Grid>
        <Grid container justify="center" alignItems="center"  >
               <h2 style={{color:"white"}}>Latest picks<hr/></h2>
        </Grid>
            <Fade in={true} timeout={{enter:500, exit:500}}>
                
            <Grid container justify="center" alignItems="center"  >
            
            

            
            
                
                    {
                        Data.movie.map((data)=>
                        {return(
                            <Grid item md={3} style={{margin:'1%'}} >

                                <Card data={data} handleClick={this.handleClick}  />
                            </Grid>
                        )})
                    }
                   
                </Grid>
                
                </Fade>
                
        
               
         
        </div>
        ) 
}
    
}
export default Home