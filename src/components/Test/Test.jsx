// import styled from "styled-components";

// const Div = styled.div`
//   font-size: 24px;
//   color: #fff;
// `;

// const Test = () => {
//   return <Div>TEST</Div>;
// };

// export default Test;

// App.js
import styled from "styled-components";
import Button from "./Button";

const SubmitButton = styled(Button)`
  width: 200px;
`;

function Test() {
  return (
    <div>
      <SubmitButton>스타일 상속</SubmitButton>
    </div>
  );
}

export default Test;
