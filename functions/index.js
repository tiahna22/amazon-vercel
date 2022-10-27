const functions = require("firebase-functions");

const express= require ('express')
const cors= require ('cors')
const stripe = require("stripe")(
  "sk_test_51LJ7lzGcNCf73R2xF7MkrikWy4wTxNhbOJrnSfVa3kVJMmjQ4qKwj3fccNWe0VtQTX5jiMyuknBZbajUxLtYwNMU005oduuc71"
);


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: 'usd',
      });
        // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});



// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-cdf20/us-central1/api



















// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


