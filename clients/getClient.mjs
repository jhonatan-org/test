import client from "../client.mjs";

const dataCallback = (dataResponse) => {
  console.log(dataResponse);
};


await client.clients.list(1,dataCallback);
await client.clients.get(435926,dataCallback);

// TODO ask about position param, apparently position can't be updated
