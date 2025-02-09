import { assets } from "assets/assets";

const { flowBoilers: flowBoilerAssets } = assets;

export const flow_boilers = [
  {
    id: "1",
    src: flowBoilerAssets.bosch,
    name: "BOSCH",
    description:
      "Nemački kvalitet sa naprednom tehnologijom za uštedu energije.",
  },
  {
    id: "2",
    src: flowBoilerAssets.simens,
    name: "SIEMENS",
    description: "Pouzdani i efikasni bojleri sa vrhunskim performansama.",
  },
  {
    id: "3",
    src: flowBoilerAssets.stiebel,
    name: "STIEBEL ELTRON",
    description:
      "Inovativni nemački brend sa fokusom na energetsku efikasnost.",
  },
  {
    id: "4",
    src: flowBoilerAssets.valliant,
    name: "VAILLANT",
    description:
      "Visokokvalitetni bojleri sa pametnim funkcijama i modernim dizajnom.",
  },
];
