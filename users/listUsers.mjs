import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};


await client.users.list(dataCallback);

// TODO update response data
