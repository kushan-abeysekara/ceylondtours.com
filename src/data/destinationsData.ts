export interface DestinationData {
  name: string;
  image: string;
  path: string;
}

export const destinations: DestinationData[] = [
  {
    name: "Sigiriya",
    image: require("../img/destination_sigiriya.webp"),
    path: "/destinations/sigiriya"
  },
  {
    name: "Ella",
    image: require("../img/destination_ella.webp"),
    path: "/destinations/ella"
  },
  {
    name: "Kandy",
    image: require("../img/destination_kandy.webp"),
    path: "/destinations/kandy"
  },
  {
    name: "Nuwara Eliya",
    image: require("../img/destination_nuwaraeliya.webp"),
    path: "/destinations/nuwara-eliya"
  },
  {
    name: "Galle Fort",
    image: require("../img/destination_galle fort.webp"),
    path: "/destinations/galle-fort"
  },
  {
    name: "Yala National Park",
    image: require("../img/destination_yala.webp"),
    path: "/destinations/yala-national-park"
  },
  {
    name: "Mirissa",
    image: require("../img/destination_mirissa.webp"),
    path: "/destinations/mirissa"
  },
  {
    name: "Colombo",
    image: require("../img/destination_colombo.webp"),
    path: "/destinations/colombo"
  },
  {
    name: "Arugam Bay",
    image: require("../img/destination_Arugambay.webp"),
    path: "/destinations/arugam-bay"
  },
  {
    name: "Polonnaruwa",
    image: require("../img/destination_polonnaruwa.webp"),
    path: "/destinations/polonnaruwa"
  },
  {
    name: "Anuradhapura",
    image: require("../img/destination_anuradapura.webp"),
    path: "/destinations/anuradhapura"
  },
  {
    name: "Dambulla Cave Temple",
    image: require("../img/destination_dambulla.webp"),
    path: "/destinations/dambulla-cave-temple"
  },
  {
    name: "Horton Plains",
    image: require("../img/destination_hortan.webp"),
    path: "/destinations/horton-plains"
  },
  {
    name: "Nine Arch Bridge",
    image: require("../img/destination_NineArch.webp"),
    path: "/destinations/nine-arch-bridge"
  },
  {
    name: "Adams Peak",
    image: require("../img/destination_adams peak.webp"),
    path: "/destinations/adams-peak"
  },
  {
    name: "Trincomalee",
    image: require("../img/destination_trincomalee.webp"),
    path: "/destinations/trincomalee"
  },
  {
    name: "Bentota",
    image: require("../img/destination_bentota.webp"),
    path: "/destinations/bentota"
  },
  {
    name: "Hikkaduwa",
    image: require("../img/destination_Hikkaduwa.webp"),
    path: "/destinations/hikkaduwa"
  },
  {
    name: "Negombo",
    image: require("../img/destination_negombo.webp"),
    path: "/destinations/negombo"
  },
  {
    name: "Udawalawe National Park",
    image: require("../img/destination_udawalawa.webp"),
    path: "/destinations/udawalawe-national-park"
  },
  {
    name: "Sinharaja Forest",
    image: require("../img/destination_sinharaja.webp"),
    path: "/destinations/sinharaja-forest"
  },
  {
    name: "Wilpattu National Park",
    image: require("../img/destination_wilpattu.webp"),
    path: "/destinations/wilpattu-national-park"
  },
  {
    name: "Temple of the Tooth",
    image: require("../img/destination_templetoth relic.webp"),
    path: "/destinations/temple-of-tooth"
  },
  {
    name: "Jaffna",
    image: require("../img/destination_jaffna.webp"),
    path: "/destinations/jaffna"
  },
  {
    name: "Kataragama",
    image: require("../img/destination_kataragama.webp"),
    path: "/destinations/kataragama"
  },
  {
    name: "Knuckles Mountain Range",
    image: require("../img/destination_knuckles.webp"),
    path: "/destinations/knuckles-mountain-range"
  },
  {
    name: "Pidurangala Rock",
    image: require("../img/destination_pidurangala.webp"),
    path: "/destinations/pidurangala-rock"
  },
  {
    name: "Ravana Falls",
    image: require("../img/destination_Ravaba.webp"),
    path: "/destinations/ravana-falls"
  },
  {
    name: "Bomburu Ella",
    image: require("../img/destination_Boburuella.webp"),
    path: "/destinations/bomburu-ella"
  },
  {
    name: "Pasikuda",
    image: require("../img/destination_pasikuda.webp"),
    path: "/destinations/pasikuda"
  },
  {
    name: "Kitulgala",
    image: require("../img/destination_kithulgala.jpg"),
    path: "/destinations/kitulgala"
  },
  {
    name: "Kalpitiya",
    image: require("../img/destination_kalpitiya.webp"),
    path: "/destinations/kalpitiya"
  },
  {
    name: "Matara",
    image: require("../img/destination_matara.webp"),
    path: "/destinations/matara"
  },
  {
    name: "Hambantota",
    image: require("../img/destination_hambantota.webp"),
    path: "/destinations/hambantota"
  },
  {
    name: "Badulla",
    image: require("../img/destination_badulla.webp"),
    path: "/destinations/badulla"
  },
  {
    name: "Batticaloa",
    image: require("../img/destination_batticalo.webp"),
    path: "/destinations/batticaloa"
  },
  {
    name: "Hatton",
    image: require("../img/destination_hatton.webp"),
    path: "/destinations/hatton"
  },
  {
    name: "Mahiyanganaya",
    image: require("../img/destination_mahiyanaganaya.webp"),
    path: "/destinations/mahiyanganaya"
  }
];

// Helper function to get random suggestions excluding current destination
export const getRandomSuggestions = (currentPath: string, count: number = 4): DestinationData[] => {
  const filtered = destinations.filter(dest => dest.path !== currentPath);
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
