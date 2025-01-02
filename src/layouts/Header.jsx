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
    name: "포트폴리오 홈페이지",
    to: "https://hwiiron.com/portfolio/",
    target: "_blank",
  },
  {
    id: 2,
    name: "Notion 이력서",
    to: "https://boulder-headstand-90d.notion.site/About-Me-1422bd9cf4b080d69e83cfe9b70cf75d?pvs=4",
    target: "_blank",
  },
  {
    id: 11,
    name: "파일 이미지 미리보기",
    to: "/filePreview",
  },
  {
    id: 12,
    name: "Tag 생성하기",
    to: "/tags",
  },
  {
    id: 13,
    name: "숫자 3자리 콤마",
    to: "/NumberReplace",
  },
  {
    id: 14,
    name: "스켈레톤 UI",
    to: "/Skeleton",
  },
  {
    id: 15,
    name: "Material UI Avatar",
    to: "/TotalMessage",
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
