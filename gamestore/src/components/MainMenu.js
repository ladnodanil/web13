import { menu } from "../data";
import MenuLi from "./MenuLi";

export default function MainMenu() {
  return (
    <header className="header">
      <ul className="mainmenu">
        <li className="logo">
          <a href="/">GameStore</a>
        </li>
        {menu.map((item) => (
          <MenuLi key={item.title} {...item} />
        ))}
        <li className="last">
          <a href="/login">Войти</a> | <a href="/register">Регистрация</a>
        </li>
      </ul>
    </header>
  );
}
