import Link from "next/link";

export default async function EditDiet({ params }: { params: any }) {
  const categories = [
    "Carbs",
    "Dairy",
    "Drinks",
    "Fats",
    "Fruit",
    "High-sugar foods",
    "Meat,eggs",
    "Vegetables",
    "Whole grain",
  ];

  return (
    <div className="w-full grid grid-cols-3 gap-3">
      {categories.map((category: string, key: number) => (
        <Link
          href={`/dashboard/coach/nutrition/${params.diet}/${
            params.day
          }/editdiet/${category.toLowerCase()}`}
          key={key}
          className="bg-cover rounded-[21px] h-20 bg-center"
          style={{ backgroundImage: `url("/images/${category}.jpg")` }}
        >
          <div className="bg-black/40 rounded-[21px] w-full h-full text-tertiary flex justify-center items-center font-bold text-sm">
            {category}
          </div>
        </Link>
      ))}
    </div>
  );
}
