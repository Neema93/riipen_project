import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useCart } from "../context/Cart";
import { commerce } from "../lib/commerce";

function Result() {
  const router = useRouter();
  const { session_id, token_id } = router.query;
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout_session/${session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );
  if (data) {
    console.log("pay", data.payment_method);
    commerce.checkout
      .capture(token_id, {
        // ...orderDetails,
        customer: {
          email: "hello@chec.io",
        },
        // ...data,
        // Include Stripe payment method ID:
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: data.payment_method,
            customer_id: "cus_4QEipX9Dj5Om1P",
            payment_intent_id: "pi_1DlITH2eZvKYlo2CuM28qGnc",
          },
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error at capture order", err));
  }

  // console.log("order", order);
  if (error) return <div>failed to load</div>;

  return (
    <div className='page-container'>
      <h1>Checkout Payment Result</h1>
      {/* <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2> */}
      <h3>CheckoutSession response:</h3>
      <pre>{data ? JSON.stringify(data, null, 2) : "loading..."} </pre>
    </div>
  );
  // return <div>{session_id}</div>;
}

export default Result;
