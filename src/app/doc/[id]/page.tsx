// app/doc/[id]/page.tsx
import { Metadata } from 'next'
import DocumentPage from '@/components/DocumentPage'

// Define the page params type
type PageParams = {
    id: string;
}

// Define the page props type
type PageProps = {
    params: PageParams;
    searchParams: { [key: string]: string | string[] | undefined };
}

// Metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    return {
        title: `Document ${params.id}`,
    }
}

// Page component
export default function Page({ params }: PageProps) {
    return (
        <DocumentPage id={params.id} />
    )
}