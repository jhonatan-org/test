import client from "../../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

//open project 2255136
//close project 2255487

const params = {
    projectId: 2255136,
    startDate: "2022-08-01",
    endDate: "2022-08-30",
    billable: false,
};

await client.projects.listEntries(params, dataCallback);
