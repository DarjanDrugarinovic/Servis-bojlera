const env = import.meta.env;

type locationType = "BEOGRAD" | "VRACAR" | "STARI_GRAD" | "NOVI_BEOGRAD";

const getLocation = (): locationType => {
  if (env.VITE_LOCATION === "vracar") return "VRACAR";
  if (env.VITE_LOCATION === "stari-grad") return "STARI_GRAD";
  if (env.VITE_LOCATION === "novi-beograd") return "NOVI_BEOGRAD";

  return "BEOGRAD";
};

export const location = getLocation();
export type LocationMap = Record<locationType, string>;
