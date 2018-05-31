import checkAddress from './../checkAddress';

export default (req, res) => {
  if (checkAddress(req.params.addr)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
};
