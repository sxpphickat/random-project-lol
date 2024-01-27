import routes from './riot_endpoints.json' assert { type: 'json' }

const header = {
    headers: {
      "X-Riot-Token": process.env.API_TOKEN
    }
};

async function getPuuidByRiotId(gameName, tagLine) {
  const accountEndPoint = `${routes['endpoint']['puuid']}${gameName}/${tagLine}`;
  const request = new URL(`https://${routes['region']['AMERICAS']}${accountEndPoint}?api_key=${process.env.API_TOKEN}`);

  const res = await fetch(request)
    .then((res) => {
    if(!res.ok) {
      throw new Error('error no 666');
      }
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
  return res;
};

const puuid = await getPuuidByRiotId('Sapphic Kat', 'BR1');

//console.log(puuid);

async function getSummonerByPuuid() {
  const request = new URL(`https://${routes['server']['BR1']}${routes['endpoint']['summoner']}${puuid.puuid}`); 


  const res = await fetch(request, header)
    .then(res => {
      if (!res.ok) {
        console.log(res);
        throw new Error('summoner');
      }
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error: ', error);
    });
  return res;
}

const summoner = await getSummonerByPuuid();

//console.log(summoner);

async function getEntriesBySummoner() {
  const request = new URL(`https://${routes['server']['BR1']}${routes['endpoint']['entryes']}${summoner.id}`);
  
  const res = await fetch(request, header)
  .then(res => {
      if (!res.ok) {
        throw new Error('entryes');
      }
      return res.json();
    })
  .then(data => data)
  .catch(error => {
      console.error('Error: ', error);
    });
  return res;
}

const entryes = await getEntriesBySummoner();


//console.log(entryes);
console.log(`${entryes[0].summonerName}, your elo is: ${entryes[0].tier} - ${entryes[0].rank}`);
