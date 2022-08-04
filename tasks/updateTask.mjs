import client from "../client.mjs";

const dataCallback = (dataResponse) => {
  console.log(dataResponse);
};

const data = {
  taskId: 17388679,
  name: 'No Task Selecte 22211222',
  projectId: 2255136,
  budget: null,
  billable: false,
  position: 2,
  dateClosed: false
};

await client.tasks.update(data, dataCallback);

// TODO ask about position param, apparently position can't be updated
