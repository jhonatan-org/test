import client from "../client.mjs";

const dataCallback = (dataResponse) => {
  console.log(dataResponse);
};

const data = {
  entryId: 1059211566,
  date: "2022-08-04",
  hours: 1,
  notes: "Update entry test",
  taskId: 17385674,
  userId: 486123,
  billed: true,
};

const params = {
  startDate: "2022-08-01",
  endDate: "2022-08-30",
  billable: false,
};

// await client.entries.get(105921156, dataCallback);
await client.entries.update(data, dataCallback);

// TODO ask about position param, apparently position can't be updated
