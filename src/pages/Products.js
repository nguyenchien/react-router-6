import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products list</h2>
        <ul>
          {products.map((product)=> {
            return (
              <li key={product.id}>
                <h3>{product.name}</h3>
               <Link to={`/products/${product.id}`}>more detail</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
};

export default Products;
