import { useEffect, useState } from "react";


export const StarBackground = () => {
  const [stars,setStars]=useState([]);
  const [metors,setMetors]=useState([]);

  useEffect(()=>{
    generateStars();
    generateMetor();

    const handleResize=()=>{
        generateStars();
    };

    window.addEventListener("resize",handleResize);
    return ()=>{
        window.removeEventListener("resize",handleResize);
    };
  },[]);

  const generateStars=()=>{
      const numberOfStars=Math.floor(window.innerWidth*window.innerHeight/10000);

      const newStars=[];
      for(let i=0;i<numberOfStars;i++){
          newStars.push({
              id:i,
              size:Math.random()*3+1,
              x:Math.random()*100,
              y:Math.random()*100,
              opacity:Math.random()*0.5+0.5,
              animationDuration:Math.random()*4+2
          });
      }
      setStars(newStars);
  };

  const generateMetor=()=>{
      const numberOfMetors=4;
      const newMeteors=[];
      for(let i=0;i<numberOfMetors;i++){
          newMeteors.push({
              id:i,
              size:Math.random()*5+1,
              x:Math.random()*100,
              y:Math.random()*20,
              delay:Math.random()*15,
              animationDuration:Math.random()*3+3
          });
      }
      setMetors(newMeteors);
  };

  return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star=>(
                <div
                    key={star.id}
                    className="star animate-pulse-subtle" style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity:star.opacity ,
                        animationDuration: star.animationDuration + "s",
                    }} />
            ))}
            {metors.map(meteor=>(
                <div
                    key={meteor.id}
                    className="meteor animate-meteor" style={{
                        width: meteor.size *10+ "px",
                        height: meteor.size *1.2+ "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay:meteor.delay ,
                        animationDuration: meteor.animationDuration + "s",
                    }} />
            ))}
      </div>
  );
}