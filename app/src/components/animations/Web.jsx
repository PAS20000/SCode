import Lottie from "react-lottie";
import animationData from '../../assets/json/web.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Web = ({ height, width }) => {
    return(
    <>
          <Lottie options={defaultOptions}
             height={height}
             width={width}
             isStopped={false}
             isPaused={false}
            />
    </>
    )
}

export default Web