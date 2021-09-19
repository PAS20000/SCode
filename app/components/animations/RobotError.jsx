import Lottie from "react-lottie";
import animationData from '../assets/json/robot-error.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const RobotError = ({ height, width, Stop }) => {
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
export default RobotError