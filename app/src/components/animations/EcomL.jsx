import Lottie from "react-lottie";
import animationData from '../../assets/json/ecommerceL.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const EcommerceL = ({ height, width, Stop }) => {
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

export default EcommerceL