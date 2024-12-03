interface NuanceData {
  description: string;
  dims: { label: string; values: any; type: "list" | "range" }[];
}

interface Format {
  defaultImage: string;
  nuances: { [nuance: string]: NuanceData };
}
export const fakeData: { [format: string]: Format } = {
  rond: {
    defaultImage: "/acier_rond.png",
    nuances: {
      s235: {
        description:
          "Tubes rodés sans soudure en acier soumis à un recuit de détente pour limiter les tensions – Tolérance H8",
        dims: [
          {
            label: "Diamètre extérieur (mm)",
            values: [
              "003",
              "004",
              "005",
              "006",
              "007",
              "008",
              "009",
              "010",
              "011",
              "012",
              "013",
              "014",
              "015",
              "016",
              "017",
              "018",
              "019",
              "020",
              "021",
              "022",
              "024",
              "025",
              "026",
              "027",
              "028",
              "030",
              "032",
              "034",
              "035",
              "036",
              "038",
              "040",
              "042",
              "045",
              "048",
              "050",
              "055",
              "060",
              "065",
              "070",
              "080",
              "085",
              "090",
              "100",
              "110",
              "120",
              "130",
            ],
            type: "list",
          },
          {
            label: "Longueur (mm)",
            values: ["10mm", "2m"],
            type: "range",
          },
        ],
      },
    },
  },
  plat: { defaultImage: "/acier_plat.png", nuances: {} },
  carre: { defaultImage: "/acier_corniere.png", nuances: {} },
  hexagone: { defaultImage: "/acier_tube.png", nuances: {} },
};
