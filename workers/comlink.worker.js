import * as Comlink from "comlink";

const workerApi = {
  getName,
};

async function getName() {
  const res = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const json = await res.json();
  return json[0];
}

Comlink.expose(workerApi);
