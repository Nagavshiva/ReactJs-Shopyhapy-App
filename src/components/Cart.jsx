import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handledelButton = (pro) => {
    dispatch(delCart(pro));
  };
  const handleaddButton = (pro) => {
    dispatch(addCart(pro));
  };
  return (
    <>
      {state.length !== 0 &&
        state.map((product) => {
          return (
            <>
              <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <img
                        src={product.image}
                        alt={product.id}
                        height="200px"
                        width="180px"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>{product.title}</h3>
                      <p className="lead fw-bold">
                        {product.qty}x $ {product.price} = ${product.qty * product.price}
                      </p>
        
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => handledelButton(product)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => handleaddButton(product)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Cart;
