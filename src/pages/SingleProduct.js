import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const {productID} = useParams();
  const product = products.find((product)=>product.id === productID);
  const {name, image} = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to='/products' className="btn">back to list!</Link>
    </section>
  );
};

export default SingleProduct;
