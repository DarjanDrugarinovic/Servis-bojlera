import { assets } from "assets/assets";

const { services: serviceImages } = assets;

export const deliveryServices: {
  id: string;
  name: string;
  src: string;
  description: string;
}[] = [
  {
    id: "1",
    name: "NABAVKA BOJLERA",
    src: serviceImages.shopping,
    description:
      "Pomažemo pri odabiru i nabavci bojlera koji najbolje odgovara vašim potrebama, uz garanciju kvaliteta i dugotrajnosti.",
  },
  {
    id: "2",
    name: "DOSTAVA BOJLERA",
    src: serviceImages.transport,
    description:
      "Bezbedna i brza dostava bojlera na vašu adresu, uz pažljivo rukovanje i poštovanje svih standarda transporta.",
  },
  {
    id: "3",
    name: "MONTAŽA BOJLERA",
    src: serviceImages.instalation,
    description:
      "Stručno postavljanje i povezivanje bojlera, uz osiguranje bezbednog i efikasnog rada uređaja.",
  },
  {
    id: "4",
    name: "ODRŽAVANJE BOJLERA",
    src: serviceImages.maintance,
    description:
      "Redovni pregledi, čišćenje i zamena delova kako bi vaš bojler radio pouzdano i bez kvarova.",
  },
  {
    id: "5",
    name: "POPRAVKA BOJLERA",
    src: serviceImages.repair,
    description:
      "Dijagnostika i otklanjanje svih vrsta kvarova, uz korišćenje originalnih delova i garanciju na izvršene radove.",
  },
  {
    id: "6",
    name: "HITNE INTERVENCIJE",
    src: serviceImages.emergencyIntervention,
    description:
      "Brza reakcija u slučaju curenja, prestanka rada ili drugih hitnih problema, dostupni 24/7.",
  },
];
