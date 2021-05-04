import translate from "../../i18n/translate";

const BookBtn = ({ className, dataUrl }) => {
  return (
    <a className={`${className} btn btn-book`} href="#" data-url={dataUrl}>
      <span className="btn-text">{translate("btnText")}</span>
    </a>
  );
};

export default BookBtn;
