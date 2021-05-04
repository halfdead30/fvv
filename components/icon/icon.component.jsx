const Icon = ({ href, size }) => {
  return (
    <svg className={`icon ${size}`}>
      <use href={`images/icons/sprite.svg${href}`}></use>
    </svg>
  );
};

export default Icon;
