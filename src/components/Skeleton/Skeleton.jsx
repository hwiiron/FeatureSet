import { StyledSkeleton, Item, Title, SubTitle, Text } from "./Skeleton.styles";

const Skeleton = () => {
  const skeleton = [];

  for (let i = 1; i <= 3; i++) {
    skeleton.push(
      <Item key={i}>
        <Title></Title>
        <SubTitle></SubTitle>
        <Text></Text>
      </Item>
    );
  }

  return <StyledSkeleton>{skeleton}</StyledSkeleton>;
};

export default Skeleton;
