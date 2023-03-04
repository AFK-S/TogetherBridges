import tf from "@tensorflow/tfjs-node";
import dataset from "../json/dataset.js";
import words from "../json/words.json" assert { type: "json" };
import classes from "../json/classes.json" assert { type: "json" };

const replace = (message) => {
  message = message
    .replaceAll("'t", "")
    .replaceAll("'re", "")
    .replaceAll("'s", "")
    .replaceAll("'d", "")
    .replaceAll("'ll", "")
    .replaceAll("'ve", "")
    .replaceAll("'m", "")
    .replaceAll(/[&\/\\#`,+()$~%.'":*!?<>{}^]/g, " ")
    .replaceAll(/^\s+|\s+$/g, " ");
  message = message.toLowerCase();
  return message;
};

const bag_of_words = (message) => {
  message = replace(message);
  message = message.split(" ");
  let bag = Array(words.length).fill(0);
  for (const word of message) {
    if (words.includes(word)) {
      bag[words.indexOf(word)] = 1;
    }
  }
  return bag;
};

const predict_class = async (message) => {
  const model = await tf.loadLayersModel("file://json/model.json");
  const predict = model.predict(tf.tensor([bag_of_words(message)]));
  const result = await predict.argMax(1).dataSync()[0];
  return classes[result];
};

const get_response = async (message) => {
  const tag = await predict_class(message);
  for (const data of dataset) {
    if (data.tag === tag) {
      return data.responses[Math.floor(Math.random() * data.responses.length)];
    }
  }
};

export default get_response;
