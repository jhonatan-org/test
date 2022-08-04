import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

await client.projects.listOpened(1, dataCallback);
