const express = require('express');
const app = express();
const path = require('path');
var rp = require('request-promise');
const port = 8000;

var accessToken = 'P2bnnKnBwlMC9_mg87t3FGR3uTapgCm5pNLcsRfcse3fur03oIc'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/matches/past', (req, res) => {
  rp('https://api.pandascore.co/csgo/matches/past?&sort=-begin_at&token='+accessToken).then(body => {
    res.send(body);
 }).catch(err => {
    console.log(err);
 });
});

app.get('/matches/running', (req, res) => {
  rp('https://api.pandascore.co/csgo/matches/running?page[size]=20&sort=begin_at&token='+accessToken).then(body => {
    res.send(body);
 }).catch(err => {
    console.log(err);
 });
});

app.get('/matches/upcoming', (req, res) => {
  rp('https://api.pandascore.co/csgo/matches/upcoming?page[size]=20&sort=begin_at&token='+accessToken).then(body => {
    res.send(body);
 }).catch(err => {
    console.log(err);
 });
});

app.get('/matches/:id/games', (req, res) => {
  const id = req.params.id;
  rp(`https://api.pandascore.co/csgo/matches/${id}/games?token=${accessToken}`).then(body => {
    res.send(body);
 }).catch(err => {
    console.log(err);
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
