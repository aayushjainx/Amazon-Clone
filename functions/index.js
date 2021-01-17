const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51IAKgrJz5HFCndJJf1Idyb90Lkxjjl0eG0SAYBXegZjaFiTklXf5ZXAz4RquamJJEsORWHCFrEMqbrHdpan9mYCM00Lo5kN8Qd'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received for this amount >>>', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'inr',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
