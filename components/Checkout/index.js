import { useForm } from "react-hook-form";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="content">
      <section className="chart-page padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="shopping-cart">
            <div className="cart-ship-info">
              <div className="row">
                <div className="col-sm-7">
                  <h6>BILLING DETAILS</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type="text"
                            {...register("firstName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("lastName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("address", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("postcode", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("city", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type="text"
                            {...register("country", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("email", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type="text"
                            {...register("phone", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <button type="submit" className="button-chk">
                          Continue
                        </button>
                      </li>
                      <li className="col-md-6">
                        <div className="checkbox margin-0 margin-top-20">
                          <input
                            id="checkbox1"
                            className="styled"
                            type="checkbox"
                          />
                          <label htmlFor="checkbox1">
                            Ship to a different address
                          </label>
                        </div>
                      </li>
                    </ul>
                  </form>
                  <h6 className="margin-top-50">SHIPPING info</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ul className="row">
                      <li className="col-md-6">
                        <label>
                          *FIRST NAME
                          <input
                            type="text"
                            {...register("bill-firstName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *LAST NAME
                          <input
                            type="text"
                            {...register("bill-lastName", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *ADDRESS
                          <input
                            type="text"
                            {...register("bill-address", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *POSTAL CODE
                          <input
                            type="text"
                            {...register("bill-postcode", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *CITY
                          <input
                            type="text"
                            {...register("bill-city", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          COUNTRY
                          <input
                            type="text"
                            {...register("bill-country", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *EMAIL ADDRESS
                          <input
                            type="text"
                            {...register("bill-email", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <label>
                          *PHONE
                          <input
                            type="text"
                            {...register("bill-phone", { required: true })}
                          />
                        </label>
                      </li>
                      <li className="col-md-6">
                        <button type="submit" className=" button-chk">
                          SUBMIT
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="col-sm-5">
                  <h6>YOUR ORDER</h6>
                  <div className="order-place">
                    <div className="order-detail">
                      <p>
                        WOOD CHAIR <span>$598 </span>
                      </p>
                      <p>
                        STOOL <span>$199 </span>
                      </p>
                      <p>
                        WOOD SPOON <span> $139</span>
                      </p>

                      <p className="all-total">
                        TOTAL COST <span> $998</span>
                      </p>
                    </div>
                    <div className="pay-meth">
                      <ul>
                        <li>
                          <div className="radio">
                            <input type="radio" name="radio1" />
                            <label htmlFor="radio3"> Credit/Debit </label>
                          </div>
                        </li>
                        <li>
                          <div className="radio">
                            <input type="radio" name="radio1" />
                            <label htmlFor="radio4"> PAYPAL </label>
                          </div>
                        </li>
                        <li>
                          <div className="checkbox">
                            <input
                              id="checkbox3-4"
                              className="styled"
                              type="checkbox"
                            />
                            <label htmlFor="checkbox3-4">
                              I’VE READ AND ACCEPT THE
                              <span className="color">TERMS & CONDITIONS</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <a
                        href="#."
                        className="button-order pull-right margin-top-30"
                      >
                        PLACE ORDER
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Checkout;
