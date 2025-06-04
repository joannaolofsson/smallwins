import FuturePageClient from "@/app/components/FuturePageClient";

export default async function FuturePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;

  return (
    <>
      <FuturePageClient type={type} />
      <h2 className="mb-4 text-2xl md:text-4xl text-start text-[#333333]">
        What {type} do you want for your future self?
      </h2>
    </>
  );
}
