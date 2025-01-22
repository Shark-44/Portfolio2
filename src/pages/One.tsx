import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import VerticalScrollGallery from "../components/VerticalScrollGallery";
import oreille from "../assets/images/oreille.webp"
import { useState } from "react";
 



function One() {
  const [mute, setMute] = useState<number>(0.5);
const handlemute = () => {
  if (mute === 0.5) {
    setMute(0.0);
  } else {
    setMute(0.5)
  }
}

    return (
      <PageTransition>
        <Navbar />
      <div className="w-full bg-white pt-4  flex flex-col justify-center items-center">
      <img src={oreille} alt="" className=" absolute bottom-2 right-2 h-20 w-20" onClick={handlemute}/>
      {/* Parent */}
      <h2 className="animate-blink text-yellow-500 text-xl font-bold">Scroll !</h2>
      <div className="w-[90%] h-[86vh] bg-black flex justify-center items-center overflow-visible relative">
      {/* Cadre */}
      <div         
         className="w-[110%] h-[84vh] bg-blue-500  absolute overflow-hidden flex items-center justify-center"
         style={{
             borderTopLeftRadius: "10rem 25rem",
             borderTopRightRadius: "10rem 25rem",
             borderBottomLeftRadius: "10rem 25rem",
             borderBottomRightRadius: "10rem 25rem",
             boxShadow: "inset 0 20px 30px rgba(0, 0, 0, 0.5), inset 0 -20px 30px rgba(0, 0, 0, 0.5)",
             left: "50%",
             transform: "translateX(-50%)"
         }}         
      >{/* Cylindre*/}

        <VerticalScrollGallery mute={mute}/>

      {/* Fin Cylindre*/}
     </div>
      
  
     
     {/* Fin Cadre */}
     </div>
   {/* Fin Parent */}
   </div>
   </PageTransition>

    )
}

export default One;