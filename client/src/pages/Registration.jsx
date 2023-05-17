import { useNavigate } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import hero1 from "../assets/images/hero1.jpg"
import { Oval } from "react-loader-spinner"
import Intro from "../components/Intro"
import Form from "../components/Form"
import Hero from "../components/Hero"
import { useState } from "react"
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
    auth: false,
  }

  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState(initialState)
  let readyToSubmit = false

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const onAuthChange = () => {
    setFormState({ ...formState, auth: true })
  }

  const onAuthExpired = () => {
    setFormState({ ...formState, auth: false })
  }

  const handleClick = async () => {
    if (readyToSubmit) {
      setIsLoading(true)
      try {
        await axios.post("/api/registrations", formState)
        setIsLoading(false)
        naviagte("/result/success")
      } catch (e) {
        setIsLoading(false)
        naviagte("/result/failed")
      }
    }
  }

  if (
    formState.first_name &&
    formState.last_name &&
    formState.phone &&
    formState.email &&
    formState.group_size &&
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
      placeholder: "",
      type: "text",
      id: "first_name",
      required: true,
      value: formState.first_name,
    },
    {
      name: "Last Name",
      placeholder: "",
      type: "text",
      id: "last_name",
      required: true,
      value: formState.last_name,
    },
    {
      name: "Phone",
      placeholder: "",
      type: "number",
      id: "phone",
      required: true,
      value: formState.phone,
    },
    {
      name: "Email",
      placeholder: "",
      type: "email",
      id: "email",
      required: true,
      value: formState.email,
    },
  ]

  const groupInfo = [
    {
      name: "Tailgate Name",
      placeholder: "Yellow Jackets",
      type: "text",
      id: "tailgate_name",
      required: false,
      value: formState.name,
    },
    {
      name: "Group Size",
      placeholder: "10",
      type: "number",
      id: "group_size",
      required: true,
      value: formState.group_size,
    },
    {
      name: "Group Sponsorship / Relationship to GT",
      placeholder: "Group Sponsorship / Relationship to GT",
      type: "radio",
      id: "group_sponsorship",
      required: false,
      value: formState.group_sponsorship,
      options: [
        "Official GT Department",
        "Official GT Organization",
        "Official GT Student Organization",
        "Parents of GT Students",
        "GT Alumni",
        "Visitors / Guests of GT",
        "None",
      ],
    },
    {
      name: "If You Are Registering a Department / Organization, Please Specify",
      placeholder: "",
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
      placeholder: "",
      type: "text-area",
      id: "reunion_tent_description",
      required: false,
      value: formState.reunion_tent_description,
    },
  ]

  const resourceInfo = [
    {
      name: "Will You Bring Any of the Following: Grill, Power, Sound, A/V Equipment?",
      placeholder:
        "Will You Bring Any of the Following: Grill, Power, Sound, A/V Equipment?",
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
      placeholder: "ft",
      type: "text",
      id: "size_of_tent",
      required: false,
      value: formState.size_of_tent,
    },
    {
      name: "Type of Music / AV Equipment",
      placeholder: "Speakers, Sound System, etc.",
      type: "text",
      id: "type_of_av",
      required: false,
      value: formState.type_of_av,
    },
    {
      name: "Do You Have a Preferred Location on The Quad?",
      placeholder: "Front, Back, etc.",
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
    <div className="bg-white pb-5">
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
          sitekey={"6LcelEAkAAAAAE4muXVj6aFR8Rxqs5kHS3GJgU7F"}
          onChange={onAuthChange}
          onExpired={onAuthExpired}
        />
        <button
          onClick={handleClick}
          disabled={readyToSubmit ? false : true}
          className={`${
            readyToSubmit ? "bg-[#003057] hover:bg-[#a4915a]" : "bg-[#E5E5E5]"
          } text-white p-4 w-32 rounded-full font-neusa_regular text-lg mb-4`}
        >
          Submit
        </button>
        {isLoading && (
          <Oval
            height={40}
            width={40}
            color="#a4915a"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#a4915a"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
      </div>
    </div>
  )
}

export default Registration
