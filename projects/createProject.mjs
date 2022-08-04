import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

const data = {
    name: 'test #3',
    clientId: 436059,
    ownerId: 486123,
    budget: 50.0,
    notifications: false,
    billable: false,
    recurring: false,
};


await client.projects.create(data, dataCallback);

// TODO update de response example
