// beveiligen van api-routes
// https://www.npmjs.com/package/@frontegg/client
import { decode } from "jsonwebtoken";

export default async function handler(req, res) {
  // if (!req.headers.authorization) {
  //   res.status(401).send("not allowed");
  // } else {
  // console.log(req.headers.authorization);
  // const { sub } = decode(req.headers.authorization);
  // const ouderInfo = await db
  //   .select("voornaam", "achternaam")
  //   .from("ouders")
  //   .where("userid", sub);

  //middleware heeft er voor gezorgd dat we req.userid ter beschikking hebben
  console.log("dbinfo opvragen op basis van sub");
  res.send({ ouderinfo: "ok" });
  //res.send("gevoelige data");
  //}
}
