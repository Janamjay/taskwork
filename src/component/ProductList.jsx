/* eslint-disable react/prop-types */

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      <div>
        <img
          src={products.images[0]}
          alt="image"
          width="200px"
          height="200px"
        />
        <p>{products.title}</p>
        <p>$ {products.price}</p>
        <p>{products.description}</p>
      </div>
    </div>
  );
};

export default ProductList;
