// Để lấy ra id
import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  const id = params.productId;

  return (
    <>
      <h1>Product Detail Page</h1>
      <p>{id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
