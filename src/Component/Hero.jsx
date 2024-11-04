import Heroimage from '../images/image-hero-mobile.png';
import Dataimage from '../images/client-databiz.svg';
import Audioimage from '../images/client-audiophile.svg';
import Meetimage from '../images/client-meet.svg';
import Makerimage from '../images/client-maker.svg';
const Hero = ()=>{

  return(
    <>
    <div className='maindiv'>
      <div className="divleft">
      <h1>
        Make <br/>remote work
      </h1>
      <p>Get your team in sync.no matter your location.<br/>
        Streamline processes. create team rituals.<br/>and watch
        productivity soar.
      </p>
      <button className='btn1'>Learn more</button>

      </div>

      <div className='divright'>
        <img src={Heroimage} alt="image-hero-mobile.png"/>
      </div>


    </div>

    <div className='imgdiv'>

    <img src={Dataimage} alt='client-databiz.svg'/>
    <img src={Audioimage} alt='client-audiophile.svg'/>
    <img src={Meetimage} alt='client-meet.svg'/>
    <img src={Makerimage} alt='client-maker.svg'/>

    </div>

   </>



  )





}

export default Hero;