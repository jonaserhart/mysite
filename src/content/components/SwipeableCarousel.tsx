import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Loading from '../../gql/components/Loading';
import Error from '../../gql/components/Error';
import parseContent from '../../gql/functions/parseContent';
import SiteContent from './SiteContent';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {makeStyles, MobileStepper} from '@material-ui/core';
import {MainPage} from "./MainPage";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "70%",
    flexGrow: 1,
    background: "transparent",
    height: "unset"
  },

});

export default function SwipeableCarousel() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [lastScroll, setLastScroll] = React.useState(0);
  const [imageLoading, setImageLoading] = React.useState(false);

  const handleStepChange = React.useCallback((step: number, numOfSteps: number) => {

    if (step >= numOfSteps) return;
    if (step < 0) return;

    setActiveStep(step);
  }, [setActiveStep])

  const handleImageLoaded = React.useCallback( () => {
    setImageLoading(!imageLoading);
  },[])

  const handleScroll = React.useCallback((event, stepNo) => {
    let now = new Date().getTime()

    if ((now - lastScroll) <= 500) return;
    if (event.deltaY >= 0.0)
      handleStepChange(activeStep + 1, stepNo)
    if (event.deltaY <= 0.0)
      handleStepChange(activeStep - 1, stepNo)
    setLastScroll(now);
  }, [activeStep, lastScroll, setLastScroll])

  const query = gql`
  {
    contents {
      index
      href
      title
      description
      backgroundOverlay {
        css
      }
      background {
        url
      }
      hrefPicture {
        url
      }
    }
  }
  `

  const classes = useStyles();
  const { loading, error, data } = useQuery(query);

  if (loading) return <Loading />
  if (error) return <Error />

  const contentList = parseContent(data);

  return (
    <div className="carousel" onWheel={e => handleScroll(e, contentList.length + 1)}>
      <div className="nextButton">

      </div>
      <SwipeableViews
          className="sw"
          axis={"x"}
          index={activeStep}
          onChangeIndex={(step) => handleStepChange(step, contentList.length + 1)}
          enableMouseEvents
      >
        <div key={0}>
          <MainPage imageLoading={imageLoading} onLoad={handleImageLoaded}/>
        </div>

        {
          contentList.map((content) => (
              <div key={content.index}>
                <SiteContent content={content}/>
              </div>
          ))
        }
      </SwipeableViews>
      <div className="stepper">
        <MobileStepper
            variant="progress"
            steps={contentList.length + 1}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={null
            }
            backButton={null
            }
        />
      </div>
    </div>
  )

}