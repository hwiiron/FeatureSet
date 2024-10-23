import "./NumberReplace.css";

const NumberReplace = () => {
  const onInput = (e) => {
    const onlyDigits = e.target.value.replace(/[^0-9]/g, "");
    const formattedValue = onlyDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    e.target.value = formattedValue;
  };

  return (
    <div className="NumberReplace">
      <input
        type="text"
        placeholder="숫자를 입력해 주세요."
        onInput={onInput}
      />
    </div>
  );
};

export default NumberReplace;
