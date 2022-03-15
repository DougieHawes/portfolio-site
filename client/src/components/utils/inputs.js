// import styles
import "./style.min.css";

export const Input1 = ({
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}) => (
  <>
    <p className="input-label">{label}</p>
    <input
      className="input input1"
      name={label}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </>
);

export const Input2 = ({ label, onChange, placeholder, value }) => (
  <>
    <p className="input-label">{label}</p>
    <textarea
      className="input input2"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </>
);

export const Input3 = ({ label, onChange, value }) => (
  <>
    <p className="input-label">{label}</p>
    <input className="input3" onChange={onChange} type="file" value={value} />
  </>
);

export const Input4 = ({ onChange, selected, text }) => (
  <div className="input4">
    <label className="input4-label">{text}</label>
    <input
      type="checkbox"
      id={`${text}`}
      name={`${text}`}
      onChange={onChange}
      checked={selected}
    />
  </div>
);

export const Input5 = ({ defaultValue, onChange, options = [] }) => (
  <div className="input5">
    <label className="input-label">category</label>
    <select
      className="input input5-options"
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <option value={null}>enter category</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);
