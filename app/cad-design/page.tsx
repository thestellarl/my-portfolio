import TinyViewport from "@/components/TinyViewport";
import React from "react";

const Page = () => {
  const modelArray = [
    {
      src: "planter_cone.STL",
      title: "Wall Planter",
      description:
        "PETG wall planter featuring a drainage compartment at the back that prevents water accumulation and root rot.",
    },
    {
      src: "stargate.STL",
      title: "Stargate Portal",
      description:
        "A 3D model based off of the Startgate from the TV show Stargate-SG1.",
    },
    {
      src: "planter.STL",
      title: "Plant Propagation Wall Decor",
      description: "",
    },
    {
      src: "hero8_xl7v2.STL",
      title: "Custom GoPro Hero 8 mount for FPV drone",
      description:
        "A custom mount for a GoPro Hero 8 that allows for easy mounting and removal from a FPV drone. Printed in TPU for durability and vibration dampening.",
    },
    {
      src: "base_3.stl",
      title: "LED Lamp internals",
      description:
        "Custom designed support for a WS2812b powered lamp. Designed priorities were cooling and printing efficiency.",
    },
    {
      src: "enclosureLid.STL",
      title: "Electric Longboard Component Housing",
      description:
        "Designed and built a long board powered by 18650 li-ion cells that could easily provide 20mph cruising speeds.",
    },
    {
      src: "GoPro_Monitor_Mount.STL",
      title: "GoPro Monitor Mount",
      description: "A monitor mount to allow the use of a GoPro as a webcam.",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-evenly w-full h-full py-24 gap-4">
      <section
        id="scroll-section"
        className="relative flex flex-col w-screen items-center pb-32 shadow"
      >
        <div className="max-w-screen-xl w-full text-left md:[&>*:nth-child(even)]:flex-row-reverse [&>*:nth-child(even)]:text-right flex flex-col gap-y-14">
          {modelArray.map((modelObject) => {
            const { src, title, description } = modelObject;
            return (
              <div className="flex w-full items-center project-card overflow-hidden">
                <TinyViewport modelSrc={src} />
                <div className="relative h-full">
                  <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold mb-4 group-hover:tracking-widest transition-all">
                      {title}
                    </h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Page;
