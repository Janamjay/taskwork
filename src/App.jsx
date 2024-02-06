/* eslint-disable react-hooks/exhaustive-deps */
import useFetch from "./component/useFetch";
import ProductList from "./component/ProductList";
function App() {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://dummyjson.com/products/1");

  console.log(products);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {products && <ProductList products={products} />}
    </>
  );
}

export default App;
