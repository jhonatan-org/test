import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

await client.tasks.get(17388679, dataCallback);

// TODO update documentation about method name
