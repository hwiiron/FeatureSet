import { useEffect, useRef, useState } from "react";
import "./FilePreview.css";

const FilePreview = () => {
  const [fileValue, setFileValue] = useState(null);
  const [preview, setPreview] = useState();

  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setFileValue(nextValue);
  };

  useEffect(() => {
    if (!fileValue) {
      return;
    }

    const nextPreview = URL.createObjectURL(fileValue);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [fileValue]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    setFileValue(null);
  };

  return (
    <div className="FilePreview">
      <div>
        <label htmlFor="productImg">
          <input
            id="productImg"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            ref={inputRef}
          />
          <span>이미지 등록</span>
        </label>

        {fileValue && (
          <div className="preview">
            <img src={preview} alt="이미지 미리보기" />
            <button onClick={handleClearClick}></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilePreview;
