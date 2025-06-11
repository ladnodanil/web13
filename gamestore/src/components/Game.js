export default function Game({ title, description, category }) {
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