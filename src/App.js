
import './App.css';


function App() {
  return (
    <>
      {/* <nav className='flex justify-start m-10'> */}
      <nav>
        {/* <img src='/images/Logo.jpg' alt='' />
      <h1 className='text-sm font-bold m-2'>SOUNDTRACK</h1> */}
        {/* //nav bar div */}

        {/* <div className='mx-20'>
        How IT Works
      </div>
      <div className='mx-20'>
        Library
      </div>
      <div className='mx-20'>
        Pricing
      </div>
      <div className='mx-32'>
        Sign Up
      </div>
      <div className='mx-10 relative bg-orange-100 rounded-l-lg fill-s'>
        Login
      </div>
   */}
        <div className='flex flex-row 	justify-between mt-7 '>
          <div className='flex flex-row gap-x-12' >
            <img className='ml-28' src='/images/Logo.jpg' alt='' />
            <h1 className='text-sm font-bold m-2'>SOUNDTRACK</h1>
            <h2 className='text-sm'>How It Works</h2>
            <h2 className='text-sm'>Library</h2>
            <h2 className='text-sm'>Pricing</h2>
          </div>
          <div className="flex flex-row gap-x-12" >
            <h2 className='p-5'>Sign UP</h2>
            <h2 className='bg-gray-50 rounded-full w-[120px] h-[70px] p-5 text-center -ml-10'>Login</h2>
          </div>
        </div>
      </nav>
      {/* <div>
      <h4 className='text-5xl mx-20 mt-28'>Let’s Connect <br></br> with Your Visitors <br></br> in Real Time</h4>
      <p className='text-sm mx-20 mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor incididunt ut labore</p>
    </div>
    <div className='float-right max-w-md max-h-96 mr-96 mb-80 pb-20'>
      <img className='rounded-full pb-32 pt-10 px-19 w-[300px] h-[500px]' src='/images/Img.jpg' alt=''>

      </img>

    </div> */}
      <div className='flex flex-row justify-evenly'>
        <div className='-ml-48'>
          <h4 className='text-5xl  mt-28'>Let’s Connect <br></br> with Your Visitors <br></br> in Real Time</h4>
          <p className='text-sm mt-7' >Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div className='-ml-48 mt-16'  >
          <img className='rounded-full pb-40  w-[250px] h-[450px]' src='/images/Img.jpg' alt=''>

          </img>

        </div>
      </div>
      <div className='flex flex-row justify-between items-start m-11'>

        <div className='ml-60 -mt-40'>
          <img className='rounded-b-full w-[250px] h-[250px]' src='/images/img 1.jpg' alt=''>

          </img>

        </div>
        <div className='abcd bg-white box-content h-10 w-96 p-4 border-4  -m-56 '>
          <p className='text-xs font-thin mb-5'>Register Using Email Address</p>
          <h1 className='text-lg font-bold -mt-5'>samantha@email.com</h1>
          <button className='float-right text-sm bg-purple-800 -mt-11 py-3 px-10 rounded inline-flex items-center '>Register</button>
        </div>
        <div className='-mt-52 gap-4 mr-20'>
          <img className='rounded-b-full w-[248px] h-[250px]' src='/images/Img 2.jpg' alt=''>

          </img>

        </div>
      </div>
      <div className='flex flex-row justify-around'>
        <div>
          <h1 className='text-5xl mt-28'>Chat with visitors <br></br> while they browse <br></br> your site</h1>
        </div>
        <div className='mt-10 -mr-12 '>
          <img className='rounded-full pb-40  w-[250px] h-[450px]' src='./images/Img 3.jpg' alt='' ></img>
          <div className='relative text-sm text-center bg-amber-900 -mt-80 mr-24 w-44  -ml-40 rounded-tl-lg rounded-tr-lg rounded-bl-lg'>

            <p className=''>Hi Karen, I’m wandering <br></br> is it possible to order <br></br> custom drawing?</p>


          </div>
        </div>





      </div>

      <div className='flex flex-row justify-around mt-20'>

        <div className='-ml-16'>
          <p className='text-sm'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br> magna aliqua. Ut enim ad minim veniam.”</p>
          <div className='flex flex-row mt-10'>
            <div>
              <img className='rounded-full' src='/images/Bitmap.jpg' alt=''></img>
            </div>
            <div className='ml-3 mt-2'>
              <h1 className='text-sm font-bold'>Samantha William</h1>
              <p className='text-xs text-gray-300'>Owner of Online Fashion Store</p>
            </div>
          </div>

        </div>

        <div>
          <div className='-ml-96 w-[260px] -mt-2 '>
            <img className='rounded-b-full w-[260px] h-[300px]' src='./images/image 6.jpg' alt='' ></img>
          </div>

        </div>






      </div>

      <div className='grid justify-items-end relative -mt-52 mr-56 gap-9 -ml-48 '>

        <div className='rounded-full bg-slate-600 w-[130px] h-[50px] text-xs text-white text-center pt-3 -mt-10 '>
          <h1>Hi Samantha</h1>
        </div>
        <div className='rounded-full bg-slate-600 w-[219px] h-[50px] text-xs text-center pt-4 text-white -mt-8'>
          <h1>Yes, You can order custom drawing</h1>
        </div>

      </div>

      <div>

        <div className='flex flex-row justify-center mt-52 '>
          <div className='mr-96 -ml-60'>
            <img className='rounded-full w-[270px] h-[470px] ' src='./images/image 10.jpg' alt='' ></img>

          </div>

        </div>

        <div className='flex flex-row rounded-full bg-white-500 border-r-8 w-[120px] h-[60px] '>

          <div className='rounded-full border border-green-600 bg-green-500 w-[30px] h-[30px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>

          </div>
          <div>
            <h1>start video call</h1>
            <p>with Angelo Smith</p>
          </div>

        </div>

      </div>

    </>


  );
}

export default App;






















{/*       
      // <div class="flex mb-4">
      //   <div class="w-1/5 bg-gray-500 h-12">

      //   </div>
      //   <div class="w-1/5 bg-gray-400 h-12">

      //   </div>
      //   <div class="w-1/5 bg-gray-500 h-12">

      //   </div>
      //   <div class="w-1/5 bg-gray-400 h-12">

      //   </div>
      //   <div class="w-1/5 bg-gray-500 h-12">
          
      //   </div>
      // </div> */}


// </nav>  );


{/* <ul class="flex">
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
  </li>
  <li class="mr-6">
    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </li>
</ul> */}



    //   {/* <nav>
    //   <h1 className="text-sm font-bold p-7 pb-7 m-10 mr-17 ">
    //   SOUNDTRACK
    // </h1>
    // <h1 className='text-sm inline-flex p-7 pb-10 m-10 mr-17'>
    //   How it Works

    // </h1>
    //   </nav> */}

    // <nav className='flex justify-start m-10'>
    //   <img src='/images/Logo.jpg' alt='' />
    //   <h1 className='text-sm font-bold m-2'>SOUNDTRACK</h1>
    //   <div class="flex justify-end ..."></div>

  //   <div class="flex justify-start place-items-center">
  //   <div className='m-10'>
  //   <img src='/images/Logo.jpg' alt='' />
  //   <h1 className='text-sm font-bold'>SOUNDTRACK</h1>

  //   </div>
  //   <div className='m-10'>02</div>
  //   <div className='m-10'>03</div>
  // </div>