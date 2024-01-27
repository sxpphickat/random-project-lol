// riot_endpoints.json
var riot_endpoints_default = {
  platform: {
    BR1: "br1.api.riotgames.com",
    NA1: "na1.api.riotgames.com"
  },
  region: {
    AMERICAS: "americas.api.riotgames.com"
  }
};

// index.js
async function getPuuid() {
  const request = new URL(`https://${riot_endpoints_default["region"]["AMERICAS"]}${accountEndPoint}?api_key=${process.env.API_TOKEN}`);
  console.log(request);
  fetch(request).then((res) => {
    if (!res.ok) {
      throw new Error("error no 666");
    }
    return res.json();
  }).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error("Error: ", error);
  });
}
var gameName = "Sapphic Kat";
var tagLine = "BR1";
console.log(gameName);
console.log(riot_endpoints_default);
var accountEndPoint = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
getPuuid();
