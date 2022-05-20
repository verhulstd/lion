import { NextResponse } from "next/server";
//const { fronteggNextJs, FronteggPermissions } = require("@frontegg/client");

//ofwel moet ze middleware noemen ofwel default export
const test = async (req, res) => {
  //1) bestaat de json webtoken?
  if (!req.headers.authorization) {
    res.status(401).send("not allowed");
  } else {
    // console.log(req.headers.authorization);

    //2) gebruik de 'sub' om in je eigen db de userid op te vragen
    const { sub } = decode(req.headers.authorization);
    //select id from where externaluserid = sub

    const userId = db
      .select("userid")
      .from("users")
      .where("externaluserid", sub);
    if (userid) {
      req.myId = 666;

      return NextResponse.next();
    } else {
      res.status(401).send("not allowed");
    }
  }
};

export default test;
