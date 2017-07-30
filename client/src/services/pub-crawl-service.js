const axios = require('axios');
const config = require('./config-service');

let pubsCache;

function getPubCrawls(page=0) {
    return axios.get(config.pubCrawlsUrl)
        .then((res) => {
            return res.data.Items;
        })
        .catch(err => console.error);
}

function getAllPubs() {
    if(pubsCache) return pubsCache;

    return axios.get(config.pubsUrl)
        .then((res) => {
            return res.data.Items;
        })
        .catch(err => console.error);
}

function submitPubCrawl(pubCrawl) {
    return axios.post(config.pubCrawlsUrl, pubCrawl)
        .then((res) => {
            return res.data.Items;
        })
        .catch(err => console.error);
}


function getPubCrawl(name=null) {

    return axios.get(config.pubsUrl, {
        params: {
            name: name
        }})
        .then((res) => {
            return res.data.Item;
        })
        .catch(err => console.error);
}

module.exports = {
    getPubCrawls,
    getPubCrawl,
    getAllPubs,
    submitPubCrawl
};