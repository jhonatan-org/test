import client from "../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

const data = {
    projectId: 2255492,
    name: 'test #1 - update',
    clientId: 436059,
    ownerId: 486123,
    budget: 50.0,
    notifications: false,
    billable: false,
    recurring: false,
};


await client.projects.update(data, dataCallback);

