import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  const {productID} = useParams();
  return (
    <section className='section product'>
      <h2>{productID}</h2>
      <Link to='/' className="btn">back to home</Link>
    </section>
  );
};

export default SingleProduct;
