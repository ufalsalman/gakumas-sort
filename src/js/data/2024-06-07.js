dataSetVersion = "2024-06-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Exclude rival idols",
    key: "rival",
    tooltip: "Check this to exclude rival idols.",
    checked: false
  },
  {
    name: "Exclude staffs",
    key: "staff",
    tooltip: "Check this to exclude school staffs.",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Saki Hanami",
    img: "saki.png",
    opts: {

    }
  },
  {
    name: "Temari Tsukimura",
    img: "temari.png",
    opts: {

    }
  },
  {
    name: "Kotone Fujita",
    img: "kotone.png",
    opts: {

    }
  },
  {
    name: "Mao Arimura",
    img: "mao.png",
    opts: {

    }
  },
  {
    name: "Lilja Katsuragi",
    img: "lilja.png",
    opts: {

    }
  },
  {
    name: "China Kuramoto",
    img: "china.png",
    opts: {

    }
  },
  {
    name: "Sumika Shiun",
    img: "sumika.png",
    opts: {

    }
  },
  {
    name: "Hiro Shinosawa",
    img: "hiro.png",
    opts: {

    }
  },
  {
    name: "Rinami Himesaki",
    img: "rinami.png",
    opts: {

    }
  },
  {
    name: "Ume Hanami",
    img: "ume.png",
    opts: {
      rival: true
    }
  },
  {
    name: "Misuzu Hataya",
    img: "misuzu.png",
    opts: {
      rival: true
    }
  },
  {
    name: "Sena Juo",
    img: "sena.png",
    opts: {
      rival: true
    }
  },
  {
    name: "Asari Neo",
    img: "asari.png",
    opts: {
      staff: true
    }
  },
]
