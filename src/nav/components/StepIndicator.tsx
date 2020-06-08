import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "70%",
    flexGrow: 1,
    background: "transparent",
  },

});

export default function StepIndicator() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={null
      }
      backButton={null
      }
    />
  );
}