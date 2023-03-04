import bots from "./bots.json" assert { type: "json" };
import depression from "./depression.json" assert { type: "json" };
import entertainment from "./entertainment.json" assert { type: "json" };
import general from "./general.json" assert { type: "json" };
import healthcare from "./healthcare.json" assert { type: "json" };
import intents from "./intents.json" assert { type: "json" };
import swears from "./swears.json" assert { type: "json" };

const dataset = [
  ...bots,
  ...depression,
  ...entertainment,
  ...general,
  ...healthcare,
  ...intents,
  ...swears,
];

export default dataset;
