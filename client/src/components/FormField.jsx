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
          className="w-full rounded-lg p-3 text-lg font-neusa_regular bg-[#E5E5E5] text-[#545454] focus:outline-[#B3A369] "
          placeholder={placeholder}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          id={id}
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

export default FormField
