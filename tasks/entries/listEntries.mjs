import client from "../../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};


const params = {
    taskId: 17385674,
    startDate: "2022-08-01",
    endDate: "2022-08-30",
    billable: false,
};

await client.tasks.listEntries(params, dataCallback);

//TODO update documentation, add locked on response data
