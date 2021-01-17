import { nanoid } from 'nanoid';
const friendlyWords = require('friendly-words');
const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
  baseID: 'appHsDh9IfVlYNqU1',
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: 'Points',
});

module.exports = async (req, res) => {
  if (req.query.auth) {
    const groupId = nanoid(16);
    const groupname = friendlyWords.teams[Math.floor(Math.random() * friendlyWords.teams.length) + 1] + '-' + friendlyWords.objects[Math.floor(Math.random() * friendlyWords.objects.length) + 1];
    let aiRes = await airtable.create({
      id: groupId,
      name: req.query.name ?? groupname,
      completion: 0,
      lastcompletedchallenge: 0,
    });
    res.json({
      status: 200,
      message: `Group ${groupId} with name ${req.query.name ?? groupname} created!`,
      record: aiRes.id,
      id: groupId,
    });
  } else {
    res.json({
      status: 400,
      message: `Looks like you're not using this endpoint correctly. Ask the event organizer for more information.`
    });
  }
}