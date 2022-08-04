import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

await client.projects.listClosed(1, dataCallback);
