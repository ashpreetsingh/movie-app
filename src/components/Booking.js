import React, {Fragment, useEffect} from "react";
import Container from "@material-ui/core/Container";
import Movietrailer from './movietrailer';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cinemadetail from './cinemadetail';
import Seatinterface from './seat/seatInterface';
import Data from "../content/index.js"

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select the cinema', 'Select the seats', 'Payment'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Cinemadetail/>;
    case 1:
      return <Seatinterface/>;
    case 2:
      return 'Payment Gateway';
    default:
      return 'Uknown stepIndex';
  }
}

function Booking(props) {
  console.log(props)
    useEffect(() => {
    let id=props.match.params.id;
    let filteredArray=Data.movie.filter((data,key)=>{
        return data.id===id
    })
    console.log(filteredArray[0].trailer);
  });

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <Fragment>
      <Container maxWidth="lg">
                <iframe
                    src={trailer}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
                    height="350vh"
                    />
      </Container>
      <h1>FF9</h1>
      <Container maxWidth="md">
      <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
      </Container>
    </Fragment>
  );
}

export default Booking;
