import { Audio } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div>
    <Audio
      type="ThreeDots"
      color="#00BFFF"
      height={20}
      width={20}
      timeout={3000} 
      position={"right"}
    />
  </div>
);

export default LoadingSpinner;