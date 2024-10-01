import FlipCard from './teamCard';
import pranav from 'src/app/public/Pranav.jpg'
import sahil from 'src/app/public/Sahil.jpg'
import aayushi from 'src/app/public/Aayushi.jpg'
import gopinath from 'src/app/public/Gopinath.jpg'
import ashish from 'src/app/public/Ashish.jpg'
import jeet from 'src/app/public/Jeet.jpg'
import joel from 'src/app/public/Joel.jpg'
import aagam from 'src/app/public/Aagam.jpg'
import rohanJ from 'src/app/public/RohanJ.jpg'
import santhosh from 'src/app/public/Santhosh.jpg'
import rohanM from 'src/app/public/RohanM.jpg'
import prashant from 'src/app/public/Prashant.jpg'
import nitya from 'src/app/public/Nitya.jpg'
import swadhin from 'src/app/public/Swadhin.jpg'
import arpit from 'src/app/public/Arpit.jpg'
import tanmayJ from 'src/app/public/TanmayJ.jpg'
import jainam from 'src/app/public/Jainam.jpg'
import Navbar from '../navigation/page';
const Team =  () => {
return(<>
<Navbar/>
<div className='bg-gray-900 grid grid-cols-4 gap-4 p-10'>
<FlipCard 
        name="Sahil Sudhakar" 
        photoUrl={sahil}
        position='Team Lead'
        quote='A tech enthusiast with a deep passion for robotics, constantly pushing the boundaries of innovation.'
        linkedInUrl="https://www.linkedin.com/in/sahil-sudhakar-331859223/" 
      />
      <FlipCard 
        name="Aayushi Barve" 
        photoUrl={aayushi}
        position='Overall Coordinator'
        quote='I ensure that the team flies its desired course stably, optimally, and on time.'
        linkedInUrl="https://www.linkedin.com/in/aayushi-barve-b28054240/" 
      />
      <FlipCard 
        name="Gopinath Tejavath" 
        photoUrl={gopinath}
        position='Team Lead'
        quote='I ensure that the team flies its desired course stably, optimally, and on time.'
        linkedInUrl="https://www.linkedin.com/in/gopinath-tejavath-80b308248/" 
      />
      <FlipCard 
        name="Joel Paul" 
        photoUrl={joel}
        position='Head of Operations'
        quote='I ensure that the team flies its desired course stably, optimally, and on time.'
        linkedInUrl="https://www.linkedin.com/in/joel-anto-paul-891205264/" 
      />
      <FlipCard 
        name="Swadhin Dash" 
        photoUrl={swadhin}
        position='Head of Operations'
        quote='Hey there, I am Swadhin, a 4th-yr undergrad in EE. I am a former member of the MPC subsystem and currently heading the team operations.'
        linkedInUrl="https://www.linkedin.com/in/swadhin-dash-ab3950227/" 
      />
      <FlipCard 
        name="Tanmay Jain" 
        photoUrl={tanmayJ}
        position='Team Lead'
        quote='Hey there, I am Tanmay, a 4th-yr undergrad in ME. I am a curious engineer who loves coffee on rainy days.'
        linkedInUrl="https://www.linkedin.com/in/tanmay-jain-774760237/" 
      />
      <FlipCard 
        name="Rohan Mekala" 
        photoUrl={rohanM}
        position='Aerodynamics Subsystem Lead'
        quote='I am responsible for ensuring that all our aircrafts have a sound aerodynamic design.'
        linkedInUrl="https://www.linkedin.com/in/rohan-mekala-460711315/" 
      />
      <FlipCard 
        name="Pranav Gupta" 
        photoUrl={pranav}
        position='Manager'
        quote='I ensure that the team flies its desired course stably, optimally, and on time.'
        linkedInUrl="https://www.linkedin.com/in/pranavguptaiitb/" 
      />
      <FlipCard 
        name="Nitya Tiwari" 
        photoUrl={nitya}
        position='Manager'
        quote='Hey, I am Nitya, from the Mechanical Engineering department. I am currently working on developing a smooth transition controller for our vtol as a senior engineer in the MPC subsystem.'
        linkedInUrl="https://www.linkedin.com/in/nitya-tiwari-003571260/" 
      />
      <FlipCard 
        name="Jainam Ravani" 
        photoUrl={jainam}
        position='MPC Subsystem Lead'
        quote='Hey there, I am Jainam, a 3rd-yr undergrad in EE. One thing that you should know about me is that I am lazy until I am not!'
        linkedInUrl="https://www.linkedin.com/in/jainam-ravani-bba758250/" 
      />
      <FlipCard 
        name="Arpit Jain" 
        photoUrl={arpit}
        position='Perception Senior Engineer'
        quote='I am responsible for developing and optimizing machine learning models to enhance the perception capabilities.'
        linkedInUrl="https://www.linkedin.com/in/arpit-jain-81275325b/" 
      />
      <FlipCard 
        name="Ashish Ranjan" 
        photoUrl={ashish}
        position='Aerodynamics Junior Engineer'
        quote='Hey, I am Ashish from the Mechanical Engineering department. I love playing cricket, listening to music and sleeping!'
        linkedInUrl="https://www.linkedin.com/in/ashish-ranjan-4a6972318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
      />
      <FlipCard 
        name="Jeet Gurbani" 
        photoUrl={jeet}
        position='Aerodynamics Junior Engineer'
        quote='Hey, I am Jeet from the Aerospace Engineering department. Looking for video games ,I am your guy!'
        linkedInUrl="https://www.linkedin.com/in/jeet-gurbani-634561294/" 
      />
      <FlipCard 
        name="Aagam Kasaliwal" 
        photoUrl={aagam}
        position='Aerodynamics Junior Engineer'
        quote='I study the aerodynamic aspects of the UAV and optimise it for maximum efficiency and stability.'
        linkedInUrl="https://www.linkedin.com/in/aagam-kasaliwal-238057286/" 
      />
      <FlipCard 
        name="Rohan Joshi" 
        photoUrl={rohanJ}
        position='Mechatronics Junior Engineer'
        quote='I design, analyse and manufacture drones, fixed wings and VTOLs.'
        linkedInUrl="https://www.linkedin.com/in/rohan-joshi-845a16330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
      />
      <FlipCard 
        name="Prashant Vashisht" 
        photoUrl={prashant}
        position='Mechatronics Junior Engineer'
        quote='Hey, I am Prashant from the Mechanical Engineering department. I dream in CAD and flow in CFD!'
        linkedInUrl="https://www.linkedin.com/in/theprashantvashisht/" 
      />
      <FlipCard 
        name="Santhosh Kumar" 
        photoUrl={santhosh}
        position='MPC Junior Engineer'
        quote='I design and implement innovative control algorithms for our drones and make them navigate intricate paths.'
        linkedInUrl="https://www.linkedin.com/in/santhosh-kumar-b-0b6307309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
      />
      </div>
      </>
)}
export default Team;