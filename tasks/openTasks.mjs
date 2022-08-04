import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

await client.tasks.listOpened(dataCallback);
