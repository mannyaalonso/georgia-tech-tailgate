import FormField from "./FormField"

const Form = ({ name, data, onChange }) => {

  return (
    <section className="bg-[#E5E5E5]">
      <div className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#003057]">{name}</h2>
              <p className="mt-2 not-italic">Please fill required fields</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <div className="space-y-4">
              {data.map((item) => (
                <FormField
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  id={item.id}
                  required={item.required}
                  value={item.value}
                  onChange={onChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
