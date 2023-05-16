const Hero = ({ title, image }) => {
  return (
    <>
      <div className="bg-slate-300 h-96">
        <img className="h-96 w-screen object-cover" src={image} alt="" />
      </div>
      <div className="bg-[#172639] h-8 -mt-8 opacity-50 "></div>
      <div className="bg-[#172639] h-36 flex items-center">
        <h1 className="ml-6 text-white text-4xl font-neusa_regular">{title}</h1>
      </div>
    </>
  )
}

export default Hero
