export default function MenuLi({ title }) {
  return (
    <li>
      <a href={`/${title.toLowerCase().replace(" ", "-")}`}>{title}</a>
    </li>
  );
}
