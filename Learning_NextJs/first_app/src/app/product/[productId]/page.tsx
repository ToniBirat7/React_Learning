export default function Product( {params}: { params: { productId: string } }) {
  return (
    <div>
      <h1>Product Id {params.productId}</h1>
      <p>Product details will be displayed here.</p>
    </div>
  );
}
