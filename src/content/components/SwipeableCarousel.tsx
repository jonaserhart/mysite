import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Loading from '../../gql/components/Loading';
import Error from '../../gql/components/Error';
import parseContent from '../../gql/functions/parseContent';
import SiteContent from './SiteContent';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useWindowSize } from '../../global/hooks/useWindowSize';
import { makeStyles, MobileStepper } from '@material-ui/core';

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

  const handleStepChange = React.useCallback((step: number) => {
    setActiveStep(step);
  }, [setActiveStep])

  const size = useWindowSize();

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
        url(transformation: {image: {resize: {width: ${size.width}, height: ${size.height}, fit: crop}}})
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
    <div className="carousel">
      <SwipeableViews
        className="sw"
        axis={"x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {
          contentList.map((content) => (
            <div key={content.index}>
              <SiteContent content={content} />
            </div>
          ))
        }
      </SwipeableViews>
      <div className="stepper">
        <MobileStepper
          variant="progress"
          steps={contentList.length}
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