import SmallWinClientPage from "@/app/components/SmallWinClientPage";

export default function SmallWinsPage({ params }: { params: { category: string } }) {
  console.log("Received category:", params.category); 

  return (
    <div>
      <span className="hidden">Post: {params.category}</span>
      <SmallWinClientPage selectedCategory={params.category} />
    </div>
  );
}
