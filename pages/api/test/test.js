// const { withAuthentication, ContextHolder } = require("@frontegg/client");
// const morgan = require("morgan");

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }

// async function handler(req, res) {
//   // Run the middleware
//   await runMiddleware(req, res, morgan("tiny"));
//   ContextHolder.setContext({
//     FRONTEGG_CLIENT_ID: "ccd45dfd-5121-425d-a1e4-fdd03fe28ec2",
//     FRONTEGG_API_KEY: "99052bf0-3404-4e06-b97a-12ebe6333e4a",
//   });
//   await runMiddleware(req, res, withAuthentication());

//   // Rest of the API logic
//   res.json({ message: "Hello Everyone!" });
// }

// export default handler;
