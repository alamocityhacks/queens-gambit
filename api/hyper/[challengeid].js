var axios = require('axios');
export default async (req, res) => {
  const {
    query: { challengeid, answer, groupid },
  } = req
  var testFunction = require(`../../lib/tests/challenge${challengeid}`);
  let data = await axios.get(`https://ozark.alamocityhacks.com/api/input?challenge=${challengeid}&groupid=${groupid}`);
  data = data.data.res.input
  let condition = await testFunction(answer, data);
  res.json({
    status: condition ? 200 : 406,
    res: {
      status: condition ? true : false,
    },
    req: {
      groupid: groupid,
      cid: challengeid,
      answer: answer,
    },
  });
}