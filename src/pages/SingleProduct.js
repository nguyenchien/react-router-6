import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const {productID} = useParams();
  const product = products.find((product)=>product.id === productID);
  const {name, image} = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products' className="btn">product list</Link>
    </section>
  );
};

export default SingleProduct;
