import axios from 'axios'

  axios.post('https://www.tickspot.com/142543/api/v2/projects.json', {
    project : {"name":"Prepare Sta2",
			"budget":50.0,
			"notifications":false,
      "billable":true,
      "recurring":false,
      "client_id": 436059,
      "owner_id": 486123,}
  },{
    headers: {
        'Authorization' : 'Token token=8c38955374a32046bf08a170c78f6615',
        'User-Agent' : 'MyCoolApp (lpaucekt_c969e@xuge.life)',
      }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    // console.log(error);
  })
  .then(function () {
    // always executed
  });  
