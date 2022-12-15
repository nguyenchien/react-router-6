import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products list</h2>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
        }}>
          {products.map((product)=> {
            return (
              <li key={product.id} style={{
                border: '1px solid #00000050', 
                margin:'10px', 
                padding: '10px'
              }}>
                <h5 style={{margin:0}}>{product.name}</h5>
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
