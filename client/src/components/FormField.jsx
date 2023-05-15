const FormField = ({
  name,
  placeholder,
  type,
  id,
  required,
  value,
  options,
  onChange,
}) => {
  return (
    <div>
      <h2 className="text-xl font-neusa_bold text-[#B3A369]">
        {placeholder.toUpperCase()}
        {required && <span className="text-[#003057]">*</span>}
      </h2>
      <label className="sr-only" htmlFor={id}></label>
      {!options ? (
        <input
          name={id}
          className="w-full rounded-lg p-3 text-lg font-neusa_regular bg-[#E5E5E5] text-[#545454] focus:outline-[#B3A369]"
          type={type}
          min={type === "number" && 0}
          required={required}
          value={value}
          onChange={onChange}
          id={id}
          onPaste={type === "number" && preventPasteNegative}
          onKeyDown={type === "number" && preventMinus}
        />
      ) : (
        options.map((item) => (
          <label key={item} htmlFor={item} className="flex flex-row">
            <input
              name={id}
              className="ml-2"
              type="radio"
              value={item}
              onChange={onChange}
              id={item}
            />
            <p className="ml-2 font-neusa_regular text-lg">{item}</p>
          </label>
        ))
      )}
    </div>
  )
}

const preventMinus = (e) => {
  if (e.code === 'Minus') e.preventDefault()
}

const preventPasteNegative = (e) => {
  const clipboardData = e.clipboardData || window.clipboardData
  const pastedData = +clipboardData.getData('text')
  if (pastedData < 0) e.preventDefault()
}

export default FormField
