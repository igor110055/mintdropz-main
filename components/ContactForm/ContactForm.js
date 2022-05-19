import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import styles from "./c-form.module.scss";
import axios from "axios";
const ContactForm = () => {
  const [state, setState] = useState({});
  // const [message, setMessage] = useState("");
  // const [status, setStatus] = useState(false);
  // const [spinner, setSpinner] = useState(false);
  // const [email, set_email] = useState("");
  // const [full_name, set_full_name] = useState("");
  // const [amessage, set_amessage] = useState("");

  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [company, set_company] = useState('Mintdropz');
  const [phone, set_phone] = useState('0178329687');
  const [msg, set_msg] = useState('');
  const [is_loading, set_loading] = useState(false);
  const [server, set_server] = useState(null);
  const [show_success, set_show_success] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // function handleStatus(status, message) {
  //   setSpinner(false);
  //   setStatus(status);
  //   setMessage(message);
  //   set_amessage('')
  //   set_email('');
  //   set_full_name('');
  // }
  function handleStatus(status, message) {
    set_loading(false);
    setStatus(status);
    setMessage(message);
    set_msg('')
    set_email('');
    set_name('');
  }

  // 

  const doSendEmail = async () => {
    let jsondata = {
      email: email,
      name: name,
      // full_name: full_name,
      company: company,
      phone: phone,
      msg: msg,
      // message: amessage,
      domain: "mintdropz.merch"
    };
    set_loading(true);
    // setSpinner(true);
    try {
      let response = await fetch(
        'https://desolate-hamlet-47455.herokuapp.com/api/email/soprano/send',
        {
          method: 'post',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsondata)
        }
      );
      let data = await response.json();
      console.log(data);
      set_loading(false);
      // setSpinner(false);
      alert("Message send successfully!");
      set_show_success(true);
    } catch (err) {
      set_loading(false);
      // setSpinner(false);
      set_server('some server error');
    }
  };

  // 

  const handleSubmit = async (e) => {
    setSpinner(true);
    e.preventDefault();
    let data = {
      email: email,
      full_name: full_name,
      country: "",
      phone: "",
      message: amessage
    };
    try {
      let response = await axios.post(
        "https://soprano-ott-api-dev.herokuapp.com/subscriber/landing/mintdropz-early-access/add",
        data
      );
      handleStatus(true, "You have registered successfully!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="contact-form" className={styles.contact_form_container}>
      <div className={styles.logo_container}>
        <img src="/Assets/logo.png" />
        <h1>GET STARTED</h1>
      </div>
      {/* <form name="contact" data-netlify="true" onSubmit={handleSubmit}> */}
      {/* <form name="contact" data-netlify="true" onSubmit={doSendEmail}> */}
      {/* <form name="contact" data-netlify="true" onSubmit={() => doSendEmail()}>
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.form_container}>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.custom_input}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  // value={full_name}
                  value={name}
                  // onChange={(e) => set_full_name(e.target.value)}
                  onChange={(e) => set_name(e.target.value)}
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.custom_input}>
                <label>E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-mail"
                  required
                  value={email}
                  onChange={(e) => set_email(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <div className={styles.custom_input}>
            <label>What Would you like to build on Mintdropz?</label>
            <textarea
              placeholder="Write your message"
              name="comment"
              id="comment"
              required
              // value={amessage}
              value={msg}
              // onChange={(e) => set_amessage(e.target.value)}
              onChange={(e) => set_msg(e.target.value)}
            />
          </div>
          
          {is_loading && <div className={styles.spinner}></div>}
          {status && <div className={styles.contactstatus}>{message}</div>}
          <div className={styles.btn_container}>
            <button className="btn" type="submit">
              {is_loading ? "Loading...":"Sign Up For Early Access"}
            </button>
          </div>
        </div>
      </form> */}

      <div id="final-form">
        <section className="form-wrapper">
          {show_success ? (
            <div
              style={{
                width: '',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                style={{ maxWidth: '220px', height: 'auto' }}
                src="https://res.cloudinary.com/dbqmuazky/image/upload/v1613748758/check.png"
              />
              <h1 style={{ fontSize: '45px', marginTop: '15px' }}>Thank You</h1>
            </div>
          ) : (
            <div className="form-container">
              <h2>Contact Us</h2>
              <div className="form-group">
                <input
                  value={name}
                  onChange={e => set_name(e.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  value={email}
                  onChange={e => set_email(e.target.value)}
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  value={company}
                  onChange={e => set_company(e.target.value)}
                  type="text"
                  placeholder="Enter Your Company"
                />
              </div>
              <div className="form-group">
                <input
                  value={phone}
                  onChange={e => set_phone(e.target.value)}
                  type="text"
                  placeholder="Enter Your Phone"
                />
              </div>
              <div className="form-group">
                <textarea
                  value={msg}
                  onChange={e => set_msg(e.target.value)}
                  type="text"
                  placeholder="Enter Your Message"
                />
              </div>
              <div style={{ display: 'flex' }}>
                <button
                  disabled={is_loading ? 'disabled' : ''}
                  onClick={() => doSendEmail()}
                  className="form-btn"
                >
                  {is_loading ? 'Loading...' : 'Contact Us'}
                </button>
              </div>
            </div>
          )}
        </section>


      </div>



    </div>
  );
};
export default ContactForm;
