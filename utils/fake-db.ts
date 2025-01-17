interface NuanceData {
  description: string;
  dims: { label: string; values: any; type: "list" | "range" }[];
}

interface Format {
  defaultImage: string;
  description: string;
  nuances: { [nuance: string]: NuanceData };
}
export const fakeData: { [format: string]: Format } = {
  rond: {
    defaultImage: "/round_bars_gray.svg",
    description: "Une large gamme de rond: acier, ...",
    nuances: {
      s235: {
        description: "Une description sur les ronds",
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
            values: ["50", "1000"],
            type: "range",
          },
        ],
      },
    },
  },
  plat: {
    defaultImage: "/sheets_gray.svg",
    description: "Une large gamme de plat: acier, ...",
    nuances: {
      "s235-h11": {
        description: "S235JR ETIRE h11",
        dims: [
          {
            label: "Section",
            values: [
              "006x03",
              "006x04",
              "008x04",
              "008x05",
              "009x03",
              "010x05",
              "010x06",
              "010x08",
              "011x04",
              "012x04",
              "012x05",
              "012x06",
              "012x08",
              "012x10",
              "014x05",
              "014x08",
              "014x10",
              "015x05",
              "015x06",
              "015x08",
              "015x10",
              "015x12",
              "016x05",
              "016x06",
              "016x07",
              "016x08",
              "016x10",
              "018x05",
              "018x06",
              "018x12",
              "020x02",
              "020x06",
              "020x07",
              "020x08",
              "020x10",
              "020x12",
              "020x15",
              "020x16",
              "022x05",
              "022x08",
              "024x16",
              "025x02",
              "025x04",
              "025x06",
              "025x07",
              "025x08",
              "025x10",
              "025x12",
              "025x15",
              "025x16",
              "025x18",
              "025x20",
              "028x04",
              "030x05",
              "030x06",
              "030x08",
              "030x10",
              "030x12",
              "030x15",
              "030x16",
              "030x20",
              "030x25",
              "030x30",
              "032x05",
              "032x06",
              "032x18",
              "032x25",
              "035x05",
              "035x06",
              "035x08",
              "035x10",
              "035x12",
              "035x15",
              "035x16",
              "035x20",
              "035x25",
              "035x30",
              "035x35",
              "036x36",
              "038x05",
              "038x06",
              "038x14",
              "040x06",
              "040x07",
              "040x08",
              "040x10",
              "040x12",
              "040x14",
              "040x15",
              "040x16",
              "040x18",
              "040x20",
              "040x25",
              "040x30",
              "040x35",
              "040x40",
              "045x06",
              "045x08",
              "045x10",
              "045x15",
              "045x16",
              "045x20",
              "045x25",
              "045x30",
              "045x45",
              "048x16",
              "048x20",
              "048x23",
              "050x05",
              "050x06",
              "050x08",
              "050x10",
              "050x12",
              "050x14",
              "050x15",
              "050x16",
              "050x18",
              "050x20",
              "050x25",
              "050x30",
              "050x35",
              "050x40",
              "055x10",
              "055x55",
              "060x03",
              "060x05",
              "060x06",
              "060x08",
              "060x10",
              "060x12",
              "060x15",
              "060x16",
              "060x18",
              "060x20",
              "060x25",
              "060x30",
              "060x35",
              "060x40",
              "060x50",
              "065x10",
              "065x15",
              "065x25",
              "065x65",
              "070x03",
              "070x05",
              "070x06",
              "070x08",
              "070x10",
              "070x10",
              "070x12",
              "070x15",
              "070x20",
              "070x25",
              "070x30",
              "070x35",
              "070x40",
              "070x50",
              "075x10",
              "080x04",
              "080x05",
              "080x06",
              "080x08",
              "080x10",
              "080x12",
              "080x15",
              "080x16",
              "080x20",
              "080x25",
              "080x30",
              "080x40",
              "080x50",
              "080x60",
              "090x06",
              "090x08",
              "090x10",
              "090x12",
              "090x15",
              "090x20",
              "090x25",
              "090x30",
              "090x40",
              "090x50",
              "090x60",
              "100x05",
              "100x06",
              "100x08",
              "100x10",
              "100x12",
              "100x14",
              "100x15",
              "100x16",
              "100x18",
              "100x20",
              "100x25",
              "100x30",
              "100x35",
              "100x40",
              "100x50",
              "100x60",
              "100x80",
              "110x10",
              "110x15",
              "110x25",
              "120x06",
              "120x08",
              "120x10",
              "120x12",
              "120x15",
              "120x20",
              "120x25",
              "120x30",
              "120x40",
              "120x50",
              "120x60",
              "130x10",
              "130x12",
              "130x15",
              "130x20",
              "130x25",
              "130x30",
              "130x40",
              "130x50",
              "140x10",
              "140x12",
              "140x15",
              "140x20",
              "140x25",
              "140x30",
              "140x40",
              "150x08",
              "150x10",
              "150x12",
              "150x15",
              "150x20",
              "150x25",
              "150x30",
              "150x40",
              "150x50",
              "150x60",
              "160x10",
              "160x12",
              "160x15",
              "160x20",
              "160x25",
              "160x30",
              "160x40",
              "180x10",
              "180x12",
              "180x15",
              "180x20",
              "180x25",
              "180x30",
              "180x40",
              "200x05",
              "200x08",
              "200x10",
              "200x12",
              "200x15",
              "200x20",
              "200x25",
              "200x30",
              "200x40",
              "200x50",
              "250x10",
              "250x12",
              "250x15",
              "250x20",
              "250x25",
              "250x30",
              "300x10",
              "300x12",
              "300x15",
              "300x20",
              "300x25",
              "300x30",
              "400x20",
            ],
            type: "list",
          },
        ],
      },
      "s235-h12": {
        description: "S235JR LAF h12",
        dims: [
          {
            label: "Section",
            values: [
              "010x02",
              "010x02.",
              "010x03",
              "012x02",
              "012x03",
              "014x02",
              "015x02",
              "015x04",
              "016x03",
              "018x03",
              "020x04",
              "025x02",
              "025x03",
              "030x03",
              "030x04",
              "035x03",
              "035x04",
              "040x03",
              "040x04",
              "045x02",
              "045x05",
              "050x03",
              "050x04",
              "060x04",
            ],
            type: "list",
          },
        ],
      },
      "s235-h13": {
        description: "S235JR LAF h13",
        dims: [
          {
            label: "Section",
            values: [
              "010x04",
              "012x04",
              "015x03",
              "016x04",
              "020x03",
              "020x05",
              "025x05",
              "040x05",
            ],
            type: "list",
          },
        ],
      },
    },
  },
  carre: {
    defaultImage: "/square_bars_gray.svg",
    description: "Une large gamme de carré: acier, ...",
    nuances: {
      "s235-h11": {
        description: "S235JR ETIRE h11",
        dims: [
          {
            label: "Section",
            values: [
              "004x04",
              "005x05",
              "006x06",
              "007x07",
              "008x08",
              "010x10",
              "012x12",
              "014x14",
              "015x15",
              "016x16",
              "018x18",
              "020x20",
              "025x25",
              "050x50",
              "060x60",
              "070x70",
              "080x80",
              "090x90",
              "100x100",
              "120x120",
            ],
            type: "list",
          },
        ],
      },
    },
  },
  tube: {
    defaultImage: "/seamless_round_tubes_gray.svg",
    description: "Une large gamme de hexagone: acier, ...",
    nuances: {},
  },
};
