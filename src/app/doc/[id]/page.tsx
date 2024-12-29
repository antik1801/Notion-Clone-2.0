import * as React from 'react'
// import { Metadata } from 'next';

// Metadata generation for dynamic route
// export const generateMetadata = async ({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> => {
//   // Await params here if necessary
//   const { id } = await params;

//   return {
//     title: `Document ${id}`,
//   };
// };

// Props interface
interface PageProps {
  params: {
    id: string;
  };
}

// Page component
async function DocumentPage({ params }: PageProps)  {
  const { id } = await params;

  return <div>Document: {id}</div>;

};

export default DocumentPage;


