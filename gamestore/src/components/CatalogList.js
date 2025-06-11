import { games } from "../data";
import { useState, useMemo } from "react";
import AddGameForm from "./AddGameForm";

function Game({ title, description, category }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="category">Категория: {category}</p>
      <a
        href={`/game/${title.toLowerCase().replace(" ", "-")}`}
        className="form-button"
      >
        Подробнее
      </a>
    </li>
  );
}

export default function CatalogList() {
  const [sortBy, setSortBy] = useState("title");
  const [gameList, setGameList] = useState(games);

  const sortedGames = useMemo(() => {
    return [...gameList].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return a.category.localeCompare(b.category);
      }
    });
  }, [sortBy, gameList]);

  const handleAddGame = (newGame) => {
    setGameList((prev) => [...prev, newGame]);
  };

  return (
    <div>
      <AddGameForm onAddGame={handleAddGame} />
      <div className="sort-controls">
        <button
          className={`form-button ${sortBy === "title" ? "active" : ""}`}
          onClick={() => setSortBy("title")}
        >
          Сортировать по названию
        </button>
        <button
          className={`form-button ${sortBy === "category" ? "active" : ""}`}
          onClick={() => setSortBy("category")}
        >
          Сортировать по категории
        </button>
      </div>
      <div id="catalog-list">
        {sortedGames.map((game) => (
          <Game key={game.title} {...game} />
        ))}
      </div>
    </div>
  );
}
