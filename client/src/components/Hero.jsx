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
        <div className='absolute h-40 w-screen flex items-center justify-center'>
          <h1 className="text-white text-7xl text-center">
            {" "}
            Tailgate Registration
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
