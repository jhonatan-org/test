import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

const params = {
    userId: 486123,
    startDate: "2021-11-08",
    endDate: "2022-11-09",
    billable: false,
  };

await client.users.listEntries(params, dataCallback);

// TODO update documentation, add  locked: false param
