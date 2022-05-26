import Products from "./Products";

const Home = () => {
  return (
    <>
    <div className="hero ">
      <div className="card bg-dark text-white border-0">
        <img src="https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg" className="card-img" alt="Bacground" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW COLLECTIONS ARRAIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
          </div>
        
        </div>
      </div>
    </div>
    <Products/>
    </>
  );
};
export default Home;
