import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

//open project 2255136
//close project 2255487
await client.projects.get(2255487, dataCallback);

//TODO update documentation on https://github.com/kommitters/tickspot.js/blob/v0.1/docs/projects.md#get-project
