"use client";

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
      src: "base_3.STL",
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
    <div className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-6">
      <section
        id="scroll-section"
        className="relative mx-auto flex w-full max-w-screen-xl flex-col"
      >
        <a
          className="group mb-10 flex w-fit items-center text-color3 sm:mb-14"
          href="./"
        >
          <i className="bi bi-arrow-left-square text-4xl transition-transform group-hover:-translate-x-1 sm:text-5xl"></i>
          <h1 className="ml-3 text-lg font-[400] sm:ml-4 sm:text-xl">Home</h1>
        </a>

        <div className="flex flex-col gap-8 text-center sm:gap-14 md:[&>*:nth-child(even)]:flex-row-reverse md:[&>*:nth-child(even)]:text-right">
          {modelArray.map((modelObject) => {
            const { src, title, description } = modelObject;
            return (
              <div
                key={src}
                className="project-card group flex w-full flex-col items-center gap-4 overflow-hidden rounded-2xl bg-color3 p-4 text-white shadow-lg shadow-color3/20 transition-shadow hover:shadow-xl sm:gap-6 sm:p-6 md:flex-row md:text-left"
              >
                <div className="w-full max-w-xs shrink-0 overflow-hidden rounded-xl md:w-80 md:max-w-none">
                  <TinyViewport modelSrc={src} />
                </div>
                <div className="w-full px-2 sm:px-4">
                  <h2 className="mb-3 text-2xl font-bold transition-all group-hover:tracking-widest sm:mb-4 sm:text-3xl">
                    {title}
                  </h2>
                  {description && (
                    <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                      {description}
                    </p>
                  )}
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
