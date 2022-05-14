import React, { useState } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import styles from './MerchContactForm.module.scss'

const MerchContactForm = () => {
    const [state, setState] = useState({});
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [email, set_email] = useState("");
    const [full_name, set_full_name] = useState("");
    const [amessage, set_amessage] = useState("");
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
    };
  
    function handleStatus(status, message) {
      setSpinner(false);
      setStatus(status);
      setMessage(message);
      set_amessage('')
      set_email('');
      set_full_name('');
    }
  
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
      <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
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
                  value={full_name}
                  onChange={(e) => set_full_name(e.target.value)}
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
              value={amessage}
              onChange={(e) => set_amessage(e.target.value)}
            />
          </div>
          {spinner && <div className={styles.spinner}></div>}
          {status && <div className={styles.contactstatus}>{message}</div>}
          <div className={styles.btn_container}>
            <button className="btn" type="submit">
              {spinner ? "Loading...":"Sign Up For Early Access"}
            </button>
          </div>
        </div>
      </form>
    </div>
    );
};

export default MerchContactForm;