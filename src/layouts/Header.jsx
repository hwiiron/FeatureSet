import { NavLink } from "react-router-dom";
import "./Header.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#58c4dc" : undefined,
  };
}

const list = [
  {
    id: 0,
    name: "Home",
    to: "/",
  },
  {
    id: 1,
    name: "Portfolio",
    to: "https://hwiiron.com/portfolio/",
    target: "_blank",
  },
  {
    id: 2,
    name: "파일 이미지 미리보기",
    to: "/filePreview",
  },
  {
    id: 3,
    name: "Tag 생성하기",
    to: "/tags",
  },
  {
    id: 4,
    name: "숫자 3자리 콤마",
    to: "/NumberReplace",
  },
  {
    id: 99,
    name: "TEST",
    to: "/test",
  },
];

const Header = () => {
  return (
    <header>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.to} style={getLinkStyle} target={item.target}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
