/**
 * The CAD call-to-action at the bottom of the landing page. Its one job is
 * to send people to /cad-design; the live model is the hook.
 */
export interface CadCallout {
  /** File in public/models shown spinning in the panel. */
  modelSrc: string;
  /** Small terminal-font line above the headline. */
  eyebrow: string;
  title: string;
  blurb: string;
  cta: { label: string; href: string };
}

export const cadCallout: CadCallout = {
  modelSrc: "enclosureLid.STL",
  eyebrow: "cad/ · 7 models · .stl",
  title: "Browse the CAD files",
  blurb:
    "Functional prints — enclosures, mounts, planters, lamp internals — each with a live 3D preview you can spin.",
  cta: { label: "Open /cad-design", href: "/cad-design" },
};

/**
 * The models on /cad-design. `src` must exactly match a file in
 * public/models (the filesystem is case-sensitive in production).
 */
export interface CadModel {
  src: string;
  title: string;
  description: string;
  tags?: string[];
}

export const cadModels: CadModel[] = [
  {
    src: "planter_cone.STL",
    title: "Wall Planter",
    description:
      "PETG wall planter featuring a drainage compartment at the back that prevents water accumulation and root rot.",
    tags: ["PETG"],
  },
  {
    src: "stargate.STL",
    title: "Stargate Portal",
    description:
      "A 3D model based off of the Stargate from the TV show Stargate SG-1.",
  },
  {
    src: "planter.STL",
    title: "Plant Propagation Wall Decor",
    description: "",
  },
  {
    src: "hero8_xl7v2.STL",
    title: "Custom GoPro Hero 8 Mount for FPV Drone",
    description:
      "A custom mount for a GoPro Hero 8 that allows for easy mounting and removal from a FPV drone. Printed in TPU for durability and vibration dampening.",
    tags: ["TPU"],
  },
  {
    src: "base_3.STL",
    title: "LED Lamp Internals",
    description:
      "Custom designed support for a WS2812b powered lamp. Design priorities were cooling and printing efficiency.",
    tags: ["WS2812b"],
  },
  {
    src: "enclosureLid.STL",
    title: "Electric Longboard Component Housing",
    description:
      "Designed and built a longboard powered by 18650 li-ion cells that could easily provide 20 mph cruising speeds.",
    tags: ["18650 li-ion"],
  },
  {
    src: "GoPro_Monitor_Mount.STL",
    title: "GoPro Monitor Mount",
    description: "A monitor mount to allow the use of a GoPro as a webcam.",
  },
];
