const env = import.meta.env;

export default {
  LOCATION: env.VITE_LOCATION,
};

export const LOCATIONS = {
  BEOGRAD: "beograd",
  VRACAR: "vracar",
  STARI_GRAD: "stari-grad",
};
