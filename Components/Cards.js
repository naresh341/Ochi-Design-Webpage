import { motion, useAnimation } from "framer-motion";
import React from "react";

function Cards() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <>
      <div  className="w-full py-20 bg-zinc-800">
        <div className=" w-full text-[3vw] pb-10 px-20 leading-none tracking-tight ">
          Featured Projects
        </div>
        <div className="w-full hr border-b-[1px] border-[#99AD53] mt-5 "></div>

        <div className="card-container w-full flex gap-10 mt-5 p-10 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cards w-1/2 h-[75vh]  relative"
          >
            <h1 className="  absolute flex overflow-hidden text-7xl   font-bold text-[#CDEA68] z-[9] leading-none tracking-tight left-full -translate-x-1/2 -translate-y-1/2 top-1/2 ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.08 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cards w-1/2 h-[75vh] relative  "
          >
            <h1 className=" absolute text-7xl flex overflow-hidden z-[9] font-bold text-[#CDEA68] leading-none tracking-tight  right-full translate-x-1/2 -translate-y-1/2 top-1/2 ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full  rounded-xl  overflow-hidden  ">
              <img
                className="w-full h-full "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="flex p-10 gap-10">
          <motion.div onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}  className="cards w-1/2 h-[75vh] relative  ">
            <h1 className=" absolute flex overflow-hidden text-7xl z-[9] font-bold  text-[#CDEA68] leading-none tracking-tight  left-full -translate-x-1/2 -translate-y-1/2 top-1/2 ">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.08 }}
                  animate={cards[2]}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full  rounded-xl  overflow-hidden  ">
              <img
                className="w-full h-full "
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cards w-1/2 h-[75vh] relative  "
          >
            <h1 className=" absolute flex overflow-hidden text-7xl z-[9] font-bold  whitespace-nowrap text-[#CDEA68] leading-none tracking-tighter  right-full   translate-x-1/2 -translate-y-1/2 top-1/2 ">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                key={index}
                  initial={{ y: "100%" }}
                  transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.05 }}
                  animate={cards[3]}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full  rounded-xl  overflow-hidden  ">
              <img
                className="w-full h-full "
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Cards;
