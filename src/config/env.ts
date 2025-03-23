const env = import.meta.env;

type locationType = "BEOGRAD" | "VRACAR" | "STARI_GRAD";

const getLocation = (): locationType => {
  if (env.VITE_LOCATION === "vracar") return "VRACAR";
  if (env.VITE_LOCATION === "stari-grad") return "STARI_GRAD";

  return "BEOGRAD";
};

export const location = getLocation();
export type LocationMap = Record<locationType, string>;
