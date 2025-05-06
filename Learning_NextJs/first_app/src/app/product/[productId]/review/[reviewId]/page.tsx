import { type Metadata } from 'next';

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Review ${params.reviewId} for Product ${params.productId}`,
  };
}

export default async function Review({ params }: Props) {
  return (
    <div>
      <h1>Review {params.reviewId} for Product {params.productId}</h1>
      <p>Product review will be displayed hereeeeeeeeeeeee.</p>
    </div>
  );
}
