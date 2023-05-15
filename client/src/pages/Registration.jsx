import hero1 from "../assets/images/hero1.jpg"
import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Intro from "../components/Intro"
import Form from "../components/Form"
import Hero from "../components/Hero"
import axios from "axios"

const Registration = () => {

  const naviagte = useNavigate()

  const initialState = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    tailgate_name: "",
    group_size: "",
    date: "",
    group_sponsorship: "",
    department: "",
    reunion_tent: "",
    reunion_tent_description: "",
    resources: "",
    type_of_grill: "",
    size_of_tent: "",
    type_of_av: "",
    location: "",
    terms: "",
    auth: false
  }

  const [formState, setFormState] = useState(initialState)
  let readyToSubmit = false

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const onAuthChange = () => {
    setFormState({...formState, auth: true})
  }

  const onAuthExpired = () => {
    setFormState({ ...formState, auth: false })
  }

  const handleClick = async () => {
    if (readyToSubmit) {
      try {
        await axios.post('/api/registrations', formState)
        naviagte('/result/success')
      } catch (e) {
        naviagte("/result/failed")
      }
    } else {

    }
  }

  if (
    formState.first_name &&
    formState.last_name &&
    formState.phone &&
    formState.email &&
    formState.group_size &&
    formState.date &&
    formState.reunion_tent &&
    formState.resources &&
    formState.terms &&
    formState.auth
  ) {
    readyToSubmit = true
  } else {
    readyToSubmit = false
  }

  const personalInfo = [
    {
      name: "First Name",
      placeholder: "First Name",
      type: "text",
      id: "first_name",
      required: true,
      value: formState.first_name,
    },
    {
      name: "Last Name",
      placeholder: "Last Name",
      type: "text",
      id: "last_name",
      required: true,
      value: formState.last_name,
    },
    {
      name: "Phone",
      placeholder: "Phone",
      type: "number",
      id: "phone",
      required: true,
      value: formState.phone,
    },
    {
      name: "Email",
      placeholder: "Email",
      type: "email",
      id: "email",
      required: true,
      value: formState.email,
    },
  ]

  const groupInfo = [
    {
      name: "Tailgate Name",
      placeholder: "Tailgate Name",
      type: "text",
      id: "tailgate_name",
      required: false,
      value: formState.name,
    },
    {
      name: "Group Size",
      placeholder: "Group Size",
      type: "number",
      id: "group_size",
      required: true,
      value: formState.group_size,
    },
    {
      name: "Tailgate Date",
      placeholder: "Tailgate Date",
      type: "date",
      id: "date",
      required: true,
      value: formState.date,
    },
    {
      name: "Group Sponsorship / Relationship to University",
      placeholder: "Group Sponsorship / Relationship to University",
      type: "radio",
      id: "group_sponsorship",
      required: false,
      value: formState.group_sponsorship,
      options: [
        "Official University Department",
        "Official University Organization",
        "Official University Student Organization",
        "Parents of Georgia Tech Students",
        "Georgia Tech Alumni",
        "Visitors / Guests of Georgia Tech",
        "None",
      ],
    },
    {
      name: "If You Are Registering a Department / Organization, Please Specify",
      placeholder:
        "If You Are Registering a Department / Organization, Please Specify",
      type: "text",
      id: "department",
      required: false,
      value: formState.department,
    },
  ]

  const reunionInfo = [
    {
      name: "Are You Hosting a Reunion Tent?",
      placeholder: "Are you bringing a tent?",
      type: "radio",
      id: "reunion_tent",
      required: true,
      value: formState.reunion_tent,
      options: ["Yes", "No"],
    },
    {
      name: "If Yes, Please Describe the Type of Reunion:",
      placeholder: "If Yes, Please Describe the Type of Reunion:",
      type: "text-area",
      id: "reunion_tent_description",
      required: false,
      value: formState.reunion_tent_description,
    },
  ]

  const resourceInfo = [
    {
      name: "Will You Bring Any of the Following: Grill, Power, Sound, A/V Equipment",
      placeholder:
        "Will You Bring Any of the Following: Grill, Power, Sound, A/V Equipment",
      type: "radio",
      id: "resources",
      required: true,
      value: formState.resources,
      options: ["Yes", "No"],
    },
    {
      name: "Type of Grill",
      placeholder: "Type of Grill",
      type: "radio",
      id: "type_of_grill",
      required: false,
      value: formState.type_of_grill,
      options: ["Gas", "Carbon", "Electric"],
    },
    {
      name: "Size of Tent",
      placeholder: "Size of Tent",
      type: "text",
      id: "size_of_tent",
      required: false,
      value: formState.size_of_tent,
    },
    {
      name: "Type of Music / AV Equipment",
      placeholder: "Type of Music / AV Equipment",
      type: "text",
      id: "type_of_av",
      required: false,
      value: formState.type_of_av,
    },
    {
      name: "Do You Have a Preferred Location on The Quad?",
      placeholder: "Do You Have a Preferred Location on The Quad?",
      type: "text",
      id: "location",
      required: false,
      value: formState.location,
    },
    {
      name: "I have completely read and agree to comply with the policies and procedures outlined in",
      placeholder:
        "I have completely read and agree to comply with the policies and procedures outlined in",
      type: "radio",
      id: "terms",
      required: true,
      value: formState.terms,
      options: ["I Agree"],
    },
  ]

  return (
    <div className="">
      <Hero title={"Tailgate Registration"} image={hero1} />
      <Intro />
      <Form
        name={"Personal Information"}
        data={personalInfo}
        onChange={onChange}
      />
      <Form name={"Group Information"} data={groupInfo} onChange={onChange} />
      <Form
        name={"Reunion Information"}
        data={reunionInfo}
        onChange={onChange}
      />
      <Form
        name={"Resource and Location Information"}
        data={resourceInfo}
        onChange={onChange}
      />
      <div className="flex w-screen  items-center justify-center flex-col mb-20">
        <p className="mx-20 sm:mx-28 md:mx-44 lg:mx-52 my-8 text-center font-neusa_regular text-xl">
          Once form has been submitted, a representative from the events
          management office will be in touch with you to confirm your
          registration and any resource needs.
        </p>
        <ReCAPTCHA
          className="py-3"
          sitekey={"6LdhTQomAAAAAEuVr8z22rfV2HMVz8HYRdYBxknk"}
          onChange={onAuthChange}
          onExpired={onAuthExpired}
        />
        <button
          onClick={handleClick}
          disabled={readyToSubmit ? false : true}
          className={`${
            readyToSubmit ? "bg-[#003057] hover:bg-[#B3A369]" : "bg-[#E5E5E5]"
          } text-white p-4 w-32 rounded-full font-neusa_regular text-lg`}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Registration
