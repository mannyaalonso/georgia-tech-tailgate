import hero1 from '../assets/images/hero1.jpg'
const Hero = () => {

  return (
    <div className="bg-slate-300 h-screen">
      <div className="bg-black h-screen w-screen absolute flex items-center justify-center">
        <img
          className="h-screen w-screen object-cover opacity-40"
          src={hero1}
          alt=""
        />
        <div className="absolute h-40 w-screen flex items-center justify-center flex-col">
          <h1 className="text-white text-7xl text-center font-neusa_bold">
            {"Tailgate Registration".toUpperCase()}
          </h1>
          <h3 className="text-center text-white font-neusa_regular text-2xl mx-20 sm:mx-32 md:mx-40 lg:mx-60 xl:mx-80 my-8">
            Fill out the form below to register for our free tailgate event
            outside of the Bobby Dodd Stadium for our upcoming{" "}
            <span id="border" className="text-[#B3A369]">Georgia Tech</span> vs{" "}
            <span id="border" className="text-[#BA0C2F]">UGA</span> game!
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
