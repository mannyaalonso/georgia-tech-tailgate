import Form from "../components/Form"
import { useState } from "react"

const Registration = () => {

  const initialState = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    name: "",
    group_size: 0,
    date: "",
    group_sponsorship: "",
    department: "",
    reunion_tent: null,
    reunion_tent_description: "",
    resources: [""],
    type_of_grill: "",
    size_of_tent: "",
    type_of_av: "",
    terms: null
  }

  const [formState, setFormState] = useState(initialState)

  const personalInfo = [
    {
      name: "First Name",
      placeholder: "First Name",
      type: "text",
      id: "first_name",
      required: "true",
      value: formState.first_name,
    },
    {
      name: "Last Name",
      placeholder: "Last Name",
      type: "text",
      id: "last_name",
      required: "true",
      value: formState.last_name,
    },
    {
      name: "Phone",
      placeholder: "Phone",
      type: "number",
      id: "phone",
      required: "true",
      value: formState.phone,
    },
    {
      name: "Email",
      placeholder: "Email",
      type: "email",
      id: "email",
      required: "true",
      value: formState.email,
    },
  ]

  const groupInfo = [
    {
      name: "Tailgate Name",
      placeholder: "Tailgate Name",
      type: "text",
      id: "name",
      required: "true",
      value: formState.name,
    },
    {
      name: "Group Size",
      placeholder: "Group Size",
      type: "number",
      id: "group_size",
      required: "true",
      value: formState.group_size,
    },
    {
      name: "Tailgate Date",
      placeholder: "Tailgate Date",
      type: "date",
      id: "date",
      required: "true",
      value: formState.date,
    },
    {
      name: "Group Sponsorship / Relationship to University",
      placeholder: "Group Sponsorship / Relationship to University",
      type: "text",
      id: "group_sponsorship",
      required: "true",
      value: formState.group_sponsorship,
    },
    {
      name: "If You Are Registering a Department / Organization, Please Specify",
      placeholder:
        "If You Are Registering a Department / Organization, Please Specify",
      type: "text",
      id: "department",
      required: "true",
      value: formState.department,
    },
  ]

  const reunionInfo = [
    {
      name: "Are You Hosting a Reunion Tent?",
      placeholder: "Are you bringing a tent?",
      type: "text",
      id: "reunion_tent",
      required: "true",
      value: formState.reunion_tent,
    },
    {
      name: "If Yes, Please Describe the Type of Reunion:",
      placeholder: "If Yes, Please Describe the Type of Reunion:",
      type: "text-area",
      id: "reunion_tent_description",
      required: "true",
      value: formState.reunion_tent_description,
    },
  ]

  const onChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  // resources: [{ type: String }],
  // type_of_grill: { type: String },
  // size_of_tent: { type: String },
  // type_of_av: { type: String },
  // terms: { type: Boolean },
  return (
    <>
      <Form
        name={"Personal Information"}
        data={personalInfo}
        onChange={onChange}
      />
      <Form 
        name={"Group Information"} 
        data={groupInfo} 
        onChange={onChange} />
      <Form
        name={"Reunion Information"}
        data={reunionInfo}
        onChange={onChange}
      />
      <Form
        name={"Resource and Location Information"}
        data={groupInfo}
        onChange={onChange}
      />
    </>
  )
}

export default Registration
