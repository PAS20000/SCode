import Lottie from "react-lottie";
import animationData from '../assets/json/dark.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const AnimationDark = ({ height, width, Stop }) => {
    return(
    <>
          <Lottie options={defaultOptions}
             height={height}
             width={width}
             isStopped={Stop}
             isPaused={Stop}
            />
    </>
    )
}
export default AnimationDark