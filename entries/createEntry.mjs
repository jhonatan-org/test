import client from "../client.mjs";

const dataCallback = (dataResponse) => {
  console.log(dataResponse);
};

const data = {
  date: "2021-11-08",
  hours: 2,
  notes: "Entry description",
  taskId: 12345678,
};


await client.entries.create(data, dataCallback);

