import { Metadata } from "next";
import { title } from "process";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await Promise.resolve(params);
  return {
    title: `Product ${productId}`,
  };
};

type Props = {
  params: {
    productId: String;
  };
};

export default async function Product({ params }: Props) {
  const { productId } = await Promise.resolve(params);
  return (
    <div>
      <h1>Product Id {productId}</h1>
      <p>Product details will be displayed here.</p>
    </div>
  );
}