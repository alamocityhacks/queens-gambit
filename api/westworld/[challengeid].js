export default async (req, res) => {
  const {
    query: { challengeid, answer, groupid },
  } = req
  var testFunction = require(`../../tests/challenge${challengeid}`);
  // DEV
    const data = '23432472374 23432794832 732 4239432 832948732 4923 4872394 9234 7';
  // DEV
  let condition = await testFunction(answer, data);
  res.json({
    status: condition ? 200 : 406,
    res: {
      status: condition ? 'Correct' : 'Incorrect',
    },
    req: {
      groupid: groupid,
      cid: challengeid,
      answer: answer,
    },
  });
}