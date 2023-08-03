function App () {
  return (
    <div className='max-w-sm mx-auto h-screen bg-violet-100'>
      <header className='flex flex-col gap-10 px-2 py-1 text-white bg-header bg-no-repeat bg-[length:80rem] bg-center relative'>
        <div className='flex justify-between font-roboto'>
          <h2 className='text-xl'>Player2</h2>
          <button className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:-translate-y-[4px] after:bg-teal-200 after:scale-0 after:origin-bottom-right after:transition-transform after:hover:scale-100 after:hover:origin-bottom-left after:duration-300 after:ease-out'>Iniciar sesión</button>
        </div>
        <div className='flex flex-col items-center gap-6 pb-40'>
          <h1 className='font-raleway italic'>Encuentra a tu <span className='relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:translate-y-[0.1rem] after:bg-teal-200'>segundo jugador</span> con quien jugar!</h1>
          <button className='px-3 py-2 text-teal-200 border-teal-200 border-2 hover:border-white hover:text-white transition-all duration-300'>
            Registrarse
          </button>
        </div>
        <img className='w-52 absolute bottom-0 left-1/2 -translate-x-1/2' src='./bg-img.png' alt='' />
      </header>
    </div>
  )
}

export default App
