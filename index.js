import routes from './riot_endpoints.json' assert { type: 'json' }


async function getPuuid(gameName, tagLine) {
  const accountEndPoint = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
  const request = new URL(`https://${routes['region']['AMERICAS']}${accountEndPoint}?api_key=${process.env.API_TOKEN}`);
  console.log(request);
  
  await fetch(request)
    .then((res) => {
    if(!res.ok) {
      throw new Error('error no 666');
    }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error: ', error);
    })
};

const puuid = await getPuuid('Sapphic Kat', 'BR1');
