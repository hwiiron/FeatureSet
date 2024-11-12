import styled from "styled-components";

const StyledSkeleton = styled.div`
  background: #343a46;
  display: flex;
  gap: 20px;
  padding: 30px;
`;

const Item = styled.div`
  border-radius: 16px;
  background: #f5f5f5;
  width: 280px;
  height: 280px;
  padding: 30px 24px 20px;

  div {
    border-radius: 6px;
    background-color: #d4d4d4;
    animation: pulse 1s infinite ease-in-out;
  }

  div + div {
    margin-top: 12px;
  }

  @keyframes pulse {
    0% {
      background-color: #d4d4d4;
    }

    50% {
      background-color: #e0e0e0;
    }

    100% {
      background-color: #d4d4d4;
    }
  }
`;

const Title = styled.div`
  width: 200px;
  height: 45px;
`;

const SubTitle = styled.div`
  width: 130px;
  height: 40px;
`;

const Text = styled.div`
  width: 160px;
  height: 40px;
`;

export { StyledSkeleton, Item, Title, SubTitle, Text };
