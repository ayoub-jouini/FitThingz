import Link from "next/link";

async function Food() {
  const category = [
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
    <div className="mx-5">
      <div className="grid grid-cols-4 ju gap-5">
        {category.map((food: string, key: number) => (
          <Link
            href={`/dashboard/coach/nutrition/food/${food.toLowerCase()}`}
            key={key}
            className="w-64 h-44 bg-cover rounded-[55px] "
            style={{ backgroundImage: `url("/images/${food}.jpg")` }}
          >
            <div className="bg-black/40 rounded-[55px] w-full h-full text-tertiary flex justify-center items-center font-bold text-xl">
              {food}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Food;
