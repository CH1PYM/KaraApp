import karo from "../sound/karo.mp3";
import kelt from "../sound/kelt.mp3";
import grc from "../sound/grc.mp3";
import minuty from "../sound/4minuty.mp3";
import klidu from "../sound/klidu.mp3";
import pozdravH from "../sound/pozdravH.mp3";
import prvni from "../sound/prvni.mp3";
import vynda from "../sound/vynda.mp3";
import prukaz from "../sound/prukaz.mp3";
import anglie from "../sound/anglie.mp3";
import promluvime from "../sound/promluvime.mp3";
import polibek from "../sound/polibek.mp3";

import uniqid from "uniqid";

let homelessDatabase = [
  {
    data: "nazdar18",
    id: uniqid(),
    sound: karo,
    image: require("../images/blanka.png"),
  },
  {
    data: "nazdar17",
    id: uniqid(),
    sound: kelt,
    image: require("../images/bezdaci.png"),
  },
  {
    data: "nazdar16",
    id: uniqid(),
    sound: grc,
    image: require("../images/pivo.png"),
  },
  {
    data: "nazdar15",
    id: uniqid(),
    sound: minuty,
    image: require("../images/delej.png"),
  },
  {
    data: "nazdar14",
    id: uniqid(),
    sound: klidu,
    image: require("../images/dalsibezdak.png"),
  },
  {
    data: "nazdar134",
    id: uniqid(),
    sound: pozdravH,
    image: require("../images/pozdrav.png"),
  },
  {
    data: "nazdar5612",
    id: uniqid(),
    sound: prvni,
    image: require("../images/panOddava.png"),
  },
  {
    data: "nazdar14565",
    id: uniqid(),
    sound: vynda,
    image: require("../images/karaKalhoty.png"),
  },
  {
    data: "nazdar1564",
    id: uniqid(),
    sound: prukaz,
    image: require("../images/sustakovka.png"),
  },
  {
    data: "nazdar1563",
    id: uniqid(),
    sound: anglie,
    image: require("../images/vajnos.png"),
  },
  {
    data: "nazdar1562",
    id: uniqid(),
    sound: promluvime,
    image: require("../images/paniOddavajici.png"),
  },
  {
    data: "nazdar1562",
    id: uniqid(),
    sound: polibek,
    image: require("../images/polibek.png"),
  },
];
export default homelessDatabase;
