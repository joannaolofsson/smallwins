import SmallWinClientPage from "@/app/components/SmallWinClientPage";

export default function SmallWinsPage({ params }: { params: { category: string } }) {
  const { category } = params;

  return (
    <div>
      <span className="hidden">Post: {category}</span>
      <SmallWinClientPage selectedCategory={category} />
    </div>
  );
}
