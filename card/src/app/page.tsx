"use client";
import { Tilt } from "react-tilt";
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';


export default function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets
    scale: 1.0, // No scaling, keep the scale at 1
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit
    axis: null, // What axis should be disabled. Can be X or Y
    reset: true, // Reset the tilt on exit
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900">
      <Tilt
        options={defaultOptions}
        className="flex justify-center items-center h-[80%] w-[80%]"
      >
        <div className="h-[80%] w-[80%] bg-black rounded-2xl shadow-2xl flex justify-center items-center">

          {/* Left side wala div */}
          <div className="h-full w-[30%] flex flex-col justify-center items-center" >

            <div className="h-[30%] w-full flex justify-center items-center  " >
              <img src="./profile.jpg" alt="" className="h-44 w-44 rounded-full" />
            </div>

            <div className="h-[30%] w-full  flex gap-x-5 justify-center items-center" >
              < Github className="text-white h-7 w-7"/>
              < Linkedin className="text-white h-7 w-7"/>
              < Twitter className="text-white h-7 w-7"/>
              < Globe className="text-white h-7 w-7"/>
            </div>

          </div>

          {/* Right side wala div */}
          <div className="h-full w-[70%] flex flex-col gap-y-0 justify-center items-center" >

            <div className="h-[45%] w-full flex flex-col justify-center items-center text-white" >
              <div className=" text-7xl text-center w-full flex justify-center items-center" >SAMEER POSWAL</div>
              <div className="h-[20%] w-full text-lg flex justify-center items-center" > Software Engineer • Full-Stack Engineer • Open Source Contributor </div>
            </div>

            <div className=" h-[30%] w-full text-white flex gap-x-3 justify-center items-center " >
              
              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

            </div>

            <div className="h-[25%] w-full" >

            </div>

          </div>


          {/* Profile photo and name wala div */}
          {/* <div className=" h-[40%] w-full flex flex-row justify-center items-center " >

            <div className="h-full w-[30%] flex justify-center items-center  " >
              <img src="./profile.jpg" alt="" className="h-44 w-44 my-20 rounded-full" />
            </div>

            <div className="h-full w-[80%] flex flex-col justify-center items-center text-white" >
              <div className=" text-7xl text-center w-full flex justify-center items-center" >SAMEER POSWAL</div>
              <div className="h-[25%] w-full text-lg flex justify-center items-center" > Software Engineer • Full-Stack Engineer • Open Source Contributor </div>
            </div>
            
          </div> */}

          {/* Social Profiles + ( Role + Recent work ) wala div */}
          {/* <div className=" h-[30%] w-full flex flex-row justify-center items-center " >

           
            <div className=" h-[50%] w-[30%] border flex gap-x-5 justify-center items-center" >

              < Github className="text-white h-7 w-7"/>
              < Linkedin className="text-white h-7 w-7"/>
              < Twitter className="text-white h-7 w-7"/>
              < Globe className="text-white h-7 w-7"/>

            </div>

            <div className=" h-full w-[70%] text-white flex gap-x-3 justify-center items-center " >
              
              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

              <div className="h-32 w-28 bg-yellow-200 rounded-md" >
              </div>

            </div>


          </div> */}

          {/* <div className=" h-[30%] w-full flex flex-row justify-center items-center ">


          </div> */}
          
        </div>
      </Tilt>
    </div>
  );
}
