const FormField = ({ name, placeholder, type, id, required, value, onChange }) => {
  return (
    <div>
      <h2 className="text-md font-bold text-[#B3A369]">{placeholder}</h2>
      <label className="sr-only" for={name}></label>
      <input
        className="w-full rounded-lg border-gray-500 p-3 text-sm bg-[#E5E5E5]"
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
