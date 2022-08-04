import client from "../../client.mjs";

const dataCallback = (dataResponse) => {
    console.log(dataResponse);
};

//open project 2255136
//close project 2255487

await client.projects.listClosedTasks(2255136, dataCallback);
