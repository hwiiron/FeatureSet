import { useState } from "react";
import "./Tags.css";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setTags((prevTags) => [...prevTags, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteClick = (idx) => {
    setTags(tags.filter((_, index) => index !== idx));
  };

  return (
    <div className="Tags">
      <input
        type="text"
        value={inputValue}
        placeholder="태그를 입력하고 Enter 눌러주세요."
        onKeyDown={onKeyDown}
        onChange={onChange}
      />

      {tags.length !== 0 && (
        <ul className="tagList">
          {tags.map((tag, idx) => {
            return (
              <li key={idx}>
                #{tag}
                <button onClick={() => handleDeleteClick(idx)}></button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Tags;
