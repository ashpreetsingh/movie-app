import React,{Component,Fragment} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class dialogBox extends Component{
    constructor(props){
        super(props);
        this.state={
            close:true
        }

    }
    handleClose=()=>{
        this.setState({
            close:false
        })
    }
    render(){
        return(
            <Fragment>
                <Dialog open={this.props.clicked} onClose={this.handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Login
                    </DialogContentText>
                    <TextField autoFocus label="Email Address" type="email" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>Login</Button>
                </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
export default dialogBox