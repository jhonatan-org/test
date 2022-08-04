import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};


await client.users.listDeleted(dataCallback);

// TODO update response data
