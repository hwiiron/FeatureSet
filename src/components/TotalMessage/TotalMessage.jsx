import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const AvatarGroupStyle = {
  "--Avatar-size": "2.8rem",
  "--Avatar-ringSize": "0.1rem",
};

const AvatarStyle = {
  background: "#fff",
  fontSize: "16px",
  color: "#999",
};

const AvatarList = ({ messageCount = 9 }) => {
  return (
    <AvatarGroup sx={AvatarGroupStyle}>
      <Avatar />
      <Avatar />
      <Avatar />

      {/* 초과 아바타 수 표시 */}
      {messageCount > 3 && (
        <Avatar sx={AvatarStyle}>+{messageCount - 3}</Avatar>
      )}
    </AvatarGroup>
  );
};

export default AvatarList;
