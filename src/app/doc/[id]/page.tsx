import React from 'react';
import { Metadata } from 'next';

// Metadata generation for dynamic route
export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  return {
    title: `Document ${params.id}`,
  };
};

// Props interface
interface PageProps {
  params: {
    id: string;
  };
}

// Page component
const Page = ({ params }: PageProps) => {
  const { id } = params;

  return <div>Document: {id}</div>;
};

export default Page;
