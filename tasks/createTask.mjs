import client from "../client.mjs";

const dataCallback = (dataResponse) => {
  console.log(dataResponse);
};

const data = {
  name: 'New task test 7',
  projectId: '22555555136',
  budget: null,
  billable: false,
  dateClosed: false
};

await client.tasks.create(data, dataCallback);

// TODO update documentation and ask about dateClosed on create task
