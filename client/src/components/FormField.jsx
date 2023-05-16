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
      <h2 className="text-xl font-neusa_bold text-[#a4915a]">
        {name.toUpperCase()}
        {required && (
          <span className="text-[#172639]">
            {id === "terms" && (
              <a
                className="decoration-[#a4915a] hover:underline"
                href="https://www.gatech.edu/privacy"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Terms & Conditions
              </a>
            )}
            *
          </span>
        )}
      </h2>
      <label className="sr-only" htmlFor={id}></label>
      {!options ? (
        <input
          className="w-full rounded-lg p-3 text-lg font-neusa_regular bg-[#E5E5E5] text-[#545454] focus:outline-[#a4915a]"
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          min={0}
          onPaste={preventPasteNegative}
          onKeyDown={(e) => preventMinus(e, type)}
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

const preventMinus = (e, type) => {
  if (e.code === 'Minus') e.preventDefault() 
  if (type === 'number') {
    onlyNumberInput(e)
  }
}

const preventPasteNegative = (e) => {
  const clipboardData = e.clipboardData || window.clipboardData
  const pastedData = +clipboardData.getData('text')
  if (pastedData < 0) e.preventDefault()
}

const onlyNumberInput = (e) => {
  let key = e.which || e.keyCode
  if (key && (key <= 47 || key >= 58) && key !== 8) {
    e.preventDefault()
  }
}

export default FormField
