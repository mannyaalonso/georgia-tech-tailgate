const FormField = ({ name, placeholder, type, id, required, value, onChange }) => {
  return (
    <div>
      <h2 className="text-xl font-neusa_bold text-[#B3A369]">
        {placeholder.toUpperCase()}
        {required && <span className="text-[#003057]">*</span>}
      </h2>
      <label className="sr-only" for={name}></label>
      <input
        className="w-full rounded-lg p-3 text-lg font-neusa_regular bg-[#E5E5E5] text-[#545454] focus:outline-[#B3A369] "
        placeholder={placeholder}
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormField
