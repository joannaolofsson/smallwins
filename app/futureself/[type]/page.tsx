import FuturePageClient from "@/app/components/FuturePageClient";

export default function FuturePage({ params }: { params: { type: string } }) {
  return <FuturePageClient type={params.type} />;
}

