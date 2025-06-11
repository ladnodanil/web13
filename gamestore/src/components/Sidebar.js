import Category from "./Category";
import { categories } from "../data";

export default function Sidebar() {
  return (
    <div className="left-chapters">
      <h3>Категории</h3>
      <ul>
        {categories.map((category) => (
          <Category key={category.title} {...category} />
        ))}
      </ul>
    </div>
  );
}
