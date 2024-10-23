import { Link } from "react-router-dom";

const div = {
  textAlign: "center",
};

const h1 = {
  fontSize: "24px",
  color: "#fff",
};

const link = {
  display: "inline-block",
  color: "#58c4dc",
  textDecoration: "underline",
  marginTop: "10px",
};

const Notfound = () => {
  return (
    <div style={div}>
      <h1 style={h1}>잘못된 페이지입니다.</h1>
      <Link to="/" style={link}>
        홈으로 이동
      </Link>
    </div>
  );
};

export default Notfound;
