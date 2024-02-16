import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => (
  <div className="w-100 d-flex justufy-content-center my-5">
    <Spinner animation="border" variant="warning" className="mx-auto"></Spinner>
  </div>
);

export default LoadingSpinner;
