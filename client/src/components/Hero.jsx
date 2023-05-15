const Hero = ({ title, image }) => {

  return (
    <div className="bg-slate-300 h-screen">
      <div className="bg-black h-screen w-screen absolute flex items-center justify-center">
        <img
          className="h-screen w-screen object-cover opacity-40"
          src={image}
          alt=""
        />
        <div className="absolute h-40 w-screen flex items-center justify-center flex-col">
          <h1 className="text-white text-7xl text-center font-neusa_bold">
            {title.toUpperCase()}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
