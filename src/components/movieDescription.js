import React,{Component, Fragment} from 'react';
import Nav from "./common/navbar"
import Grid from "@material-ui/core/Grid"
import Card from "./movieComponent"
import Data from "../content/index.js"
import Fade from "@material-ui/core/Fade"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DescriptionCard from "./descriptionComponent"
import Zoom from "@material-ui/core/Zoom"


class Description extends Component{
    constructor(props){
        super(props);
        this.state={
            description:{},
            fade:true
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        let filteredArray=Data.movie.filter((data,key)=>{
            return data.id===id
        })
        this.setState({
            description:filteredArray[0]
        })
    }
    render(){

        return(
            <Fragment>
                <Nav />
                <Fade in={this.state.fade} timeout={{enter:1200}}>
                    
                    <img src={this.state.description.bg} width='100%' ></img>
               
                    
               
                </Fade>
                <Zoom in={this.state.fade} timeout={{enter:1200}}>
                <Grid container justify="center" style={{marginTop:"-40%"}}>
                <DescriptionCard data={this.state.description} />
                
                </Grid>
                </Zoom>
                 
            </Fragment>
        )
    }
    
}
export default Description