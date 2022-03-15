// import styles
import "./style.min.css";

export const Button1 = ({ disabled = false, text, to }) => (
  <button className="button button1" disabled={disabled}>
    <a href={to} target="_blank" alt={`${text}`}>
      {text}
    </a>
  </button>
);

export const Button2 = ({ text, to }) => (
  <button className="pointer button button2">
    <a href={to} target="_blank" alt={`${text}`}>
      {text}
    </a>
  </button>
);

export const Button3 = ({ disabled, message, showMessage, text }) => (
  <>
    <button className={"button button3"} disabled={disabled}>
      {text}
    </button>
    {showMessage && <p className="button-message">{message}</p>}
  </>
);
