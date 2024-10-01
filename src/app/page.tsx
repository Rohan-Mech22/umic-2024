import Navbar from './navigation/page';
import Image from 'next/image';
import hp from 'src/app/public/hp.jpg'
import mothership from 'src/app/public/mothership.jpeg'
import daugther from 'src/app/public/daugther.jpeg'
import cuasc from 'src/app/public/cuasc.jpg'
import icuas from 'src/app/public/ICUAS.jpg'
import uas from 'src/app/public/UAS.jpg'
import ri4rover from 'src/app/public/Ri4Rover.jpg'
import robodrive from 'src/app/public/RoboDrive.png'
import logo from 'src/app/public/logo.png'

function MyApp() {
  return (
    <>
      <Navbar/>

      <div className="bg-gray-900 min-h-screen flex items-center text-white">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-3"><strong>Team Aerove</strong></h1>
                
                <p className="text-md md:text-lg leading-relaxed">
                    “A drone is often preferred for missions that are too ‘dull, dirty, or dangerous’ for manned aircraft.” Team AeRoVe of UMIC is on a never-ending pursuit of developing an ultimate system of autonomous fixed-wing as well as multirotor aircraft. Incorporating different subsystems namely ‘Mechatronics’, ‘Controls’, ‘Machine Learning’, ‘Perception’, ‘Path Planning’, and ‘Localisation’, the team emphatically covers every aspect to forge a de rigueur system of autonomous aerial vehicles.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <Image
                src={hp}
                alt='drone img'
                className='rounded p-10'
      />
            </div>
        </div>
    </div>
</div>

<div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-left" id='achievements'>
    The Purpose    </h1>
    <p className="text-gray-700 text-lg leading-relaxed text-left border-gray-300">
    At Team AeRoVe, we always look for problems that challenge, excite, and motivate us to grow intellectually. Our purpose is to further the boundaries of autonomous aerial technology and realize the true potential of this field. We aim to contribute and start the culture of creating cutting edge technology through indigenous innovation.
<strong> The International Aerial Robotics Competition</strong>, the longest-running aerial robotics competition in the world, is the kind of problem that has pushed us to the best of our capabilities and made us think in ways like never before, providing us with an international platform to display our aptitudes.
In addition to the past technologies, Mission 9 required us to work on novel objectives like long-distance outdoor navigation, manipulation of large objects using actuators attached to our drones, interaction with moving frames of reference and 100% onboard computations. These tasks posed us with stimulating challenges and provided the team with the opportunity to improve its technical expertise.
Despite the ongoing pandemic, we braved our way through and not only succeeded to create a collaborative environment, but also thoroughly enjoyed working on a collective goal, the IARC Mission 9 challenge.
  </p>
</div>

<div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-left">
        The Idea
    </h1>
    <p className="text-gray-700 text-lg leading-relaxed text-left border-gray-300">
        For tackling the IARC 2020 Challenge, team Aerove decided to go with a Mothership-Daughtership configuration, which would increase effectiveness and save time. A key constraint governing our strategy of module replacement is the time constraint.
        The major drawback of using a single drone is that it decreases the time available for communication module replacement. Therefore, a mother-daughter drone configuration will buy us the time of the entire return flight. Also, the weight of the Mothership decreases during the return flight, which allows it to achieve a higher maximum speed. The Mothership carries the Daughtership up to the drop point, and then circles back to the start point. Meanwhile, the Daughtership undertakes the arduous task of replacing the communication module on the swaying mast.
    </p>
</div>




<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 gap-10">
        <div className="flex-1 flex justify-center">
            <Image
                src={mothership} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={400} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
        <div className="flex-1 flex flex-col p-5 items-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">The Mothership</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
            The mothership is the primary drone that carries the secondary daughter drone. It is an autonomous 25 Kg hexacopter with an integral cage-like structure. The mothership will deploy the daughter drone at the mast and continue its way homeward to complete the mission in 9 minutes.            </p>
        </div>
    </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 gap-10">
        <div className="flex-1 p-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">The Daughter Drone</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
                The daughter drone, a 25 kg autonomous coaxial-octocopter capable of launching in mid-air, is meant to replace the communication module. It is equipped with a Pixhawk 4 for controlling the drone during flight. Intel Realsense D435 for obtaining live video feed of the surroundings, Intel NUC 5i5RYH onboard computation, Here3 GPS for localisation, and 7 DOF robotic arm for gripping the mast and replacing the module.
            </p>
        </div>
        <div className="flex-1 flex justify-center">
            <Image
                src={daugther} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={300} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
    </div>
</div>



<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 gap-10">
        <div className="flex-1 flex justify-center">
            <Image
                src={icuas} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={400} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
        <div className="flex-1 flex flex-col p-5 items-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">ICUAS&apos;23</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
            The competition&apos;s challenge involved a UAV tasked with manoeuvring through an unknown 3D GPS-denied environment, determining its position, and navigating around obstacles. Upon reaching points of interest, the UAV was required to scan the area and detect any defects in the infrastructure. World Champions in simulation stage and 2nd Runner Ups in live trials held in Warsaw, Poland. Developed an agile, collision-free navigation strategy to navigate through an industrial environment. Incorporated dynamic obstacle inflation, waypoint perturbation into the existing EGO Planner framework. 
            </p>
        </div>
    </div>
</div>


<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 gap-10">
        <div className="flex-1 p-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">UAS&apos;23</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
            The problem statement handed out was to build a drone that provides calamity and flood relief with a payload of 2-3 kgs such that the entire drone weighs a net of 10 kgs. The flight vehicle possibly would have to travel through varying altitudes and wind speeds and was required to release a parachute that lands at the area in distress. Several schematics needed to be taken care of : Endurance runs, Battery Optimisation, Simulations and Crash Proof Mechanical Design. Designed a 7 kg relief drone with a 6 kg payload capacity, 20+ min flight time. Reduced design weight by 23.6% through ANSYS topological optimization. Achieved precise servo-operated payload drops in humanitarian missions. Implemented safety features including datalink loss, geo-fencing, and GC Fail Safe for secure flight termination. Developed an accurate smart RTL system based on 50+ flight logs, predicting allowable flight time with 90% accuracy. resulting in three prestigious awards: Best Design, Scrutineering Award for supportability, and the Advancement Award. 
            </p>
        </div>
        <div className="flex-1 flex justify-center">
            <Image
                src={uas} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={300} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
    </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 gap-10">
        <div className="flex-1 flex justify-center">
            <Image
                src={ri4rover} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={400} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
        <div className="flex-1 flex flex-col p-5 items-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">RI4 Rover</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
            We designed and implemented an algorithm that enabled a drone equipped with a laser scanner to autonomously navigate an unknown maze and find the exit. The solution involved creating a rudimentary indigenous map of the environment using odometry and lidar data, which was then used to calculate paths to unexplored regions in real-time using the A* algorithm. These paths were optimized to minimize length and allowed the drone to avoid obstacles by maintaining a safe distance from the maze walls to prevent collisions. Due to our team&apos;s innovative and efficient approach, we were able to win this international competition.
            </p>
        </div>
    </div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 gap-10">
        <div className="flex-1 p-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Robodrive ICRA&apos;24</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
            We developed a robust Bird’s Eye View (BEV) model to handle camera and lidar failures in autonomous driving vehicles. This model achieved 4th place globally with a mean Average Precision (mAP) of 0.30, surpassing the previous state-of-the-art mAP of 0.25. We conducted benchmarking on the nuScenes dataset, which includes 1.4 million images and 390,000 lidar sweeps. Performance was enhanced by 20% through the use of a transformer-based module that projected 2D features into 3D space. We implemented and trained state-of-the-art models using distributed training across multiple A100 GPUs. Additionally, we developed an advanced fusion technique that combined multi-modal feature spaces from various sensors, such as cameras and lidars, and leveraged temporally aligned data for improved accuracy. 
            </p>
        </div>
        <div className="flex-1 flex justify-center">
            <Image
                src={robodrive} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={300} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
    </div>
</div>


<div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 gap-10">
        <div className="flex-1 flex justify-center">
            <Image
                src={cuasc} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={450}  // Adjust based on your design needs
                height={400} // Adjust based on your design needs
                className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
        </div>
        <div className="flex-1 flex flex-col p-5 items-start">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">C-UASC&apos;24</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
                The California Unmanned Aerial Systems Competition 2024, organized by Cal State LA and Mojave Air and Space Port, featured three main challenges: waypoint navigation, target detection, and payload delivery. We chose to build a VTOL, as it was complex and innovative, marking the first official VTOL by a tech team at IIT Bombay. Our design, a &apos;4+1&apos; configuration, optimized handling and control, and included a custom-built fuselage made from carbon fiber for optimal aerodynamics and payload stability. We utilized OpenCV for target detection and ArduPilot for waypoint navigation. After thorough simulations using XFLR5, Ansys, and XPlane 11, we successfully flew our VTOL during the competition. Out of six teams, we were one of three to complete the flight, earning first place in design and simulation, along with a $500 cash prize.
            </p>
        </div>
    </div>
</div>


<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" id='contact' />

      <div className="sm:flex sm:items-center sm:justify-between pb-10 px-10">
        <div className='flex'>
        <Image
                src={logo} // Update with the correct path to your image
                alt="Descriptive text for the image"
                width={100}  // Adjust based on your design needs
                height={400} // Adjust based on your design needs
                // className="shadow-lg rounded-lg" // Add shadows and rounded corners
            />
            <span className='flex self-center px-4 text-4xl font-bold text-[#111827]'>AeRoVe</span>
        </div>

        <div>
        <div className='p-5 mr-10'>
          <p>Aayushi: 7391985746</p>
          <p>Pranav: 9356865627</p>
          <p>Nitya: 6238884779</p>
          </div>
          <div className="flex scale-[1.3] pl-6">
              
              <a href="https://github.com/Innovation-Cell" className="text-gray-500 ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="https://www.instagram.com/umic_iitb/" className="text-gray-500 ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.973.24 2.43.403a4.92 4.92 0 0 1 1.675.965 4.92 4.92 0 0 1 .965 1.675c.163.457.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.973-.403 2.43a4.92 4.92 0 0 1-.965 1.675 4.92 4.92 0 0 1-1.675.965c-.457.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.973-.24-2.43-.403a4.92 4.92 0 0 1-1.675-.965 4.92 4.92 0 0 1-.965-1.675c-.163-.457-.349-1.26-.403-2.43C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.973.403-2.43a4.92 4.92 0 0 1 .965-1.675A4.92 4.92 0 0 1 5.276 2.63c.457-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.735 0 8.332.013 7.052.072 5.775.13 4.812.324 4.02.616a7.065 7.065 0 0 0-2.57 1.678A7.065 7.065 0 0 0 .616 4.02C.324 4.812.13 5.775.072 7.052.013 8.332 0 8.735 0 12c0 3.265.013 3.668.072 4.948.058 1.277.252 2.24.544 3.032a7.065 7.065 0 0 0 1.678 2.57 7.065 7.065 0 0 0 2.57 1.678c.792.292 1.755.486 3.032.544 1.28.059 1.683.072 4.948.072s3.668-.013 4.948-.072c1.277-.058 2.24-.252 3.032-.544a7.065 7.065 0 0 0 2.57-1.678 7.065 7.065 0 0 0 1.678-2.57c.292-.792.486-1.755.544-3.032.059-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.252-2.24-.544-3.032a7.065 7.065 0 0 0-1.678-2.57 7.065 7.065 0 0 0-2.57-1.678C16.24.324 15.277.13 14 .072 12.668.013 12.265 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 0 0 0-12.327zm0 10.175a4.013 4.013 0 1 1 0-8.027 4.013 4.013 0 0 1 0 8.027zm6.406-10.338a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z"/>
                  </svg>
                  <span className="sr-only">Instagram account</span>
              </a>
              <a href="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/" className="text-gray-500 ml-5">
                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.27V1.73C24 .774 23.208 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.638c-1.144 0-2.07-.934-2.07-2.086 0-1.152.926-2.086 2.07-2.086 1.144 0 2.07.934 2.07 2.086 0 1.152-.926 2.086-2.07 2.086zM20.452 20.452h-3.532v-5.611c0-1.337-.027-3.057-1.863-3.057-1.864 0-2.15 1.454-2.15 2.955v5.713h-3.532V9h3.392v1.561h.047c.473-.896 1.633-1.84 3.36-1.84 3.592 0 4.253 2.362 4.253 5.432v6.298z"/>
                  </svg>
                  <span className="sr-only">Linkedin account</span>
              </a>

          </div>
          </div>
          </div>

    </>
  );
}
export default MyApp;
