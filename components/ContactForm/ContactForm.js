import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import styles from "./c-form.module.scss";
import axios from "axios";

const Swal = require('sweetalert2');

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
      // alert("Message send successfully!");
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

  const successMsg = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sign Up Successfully!',
      text: 'Thank you for your response',
      showConfirmButton: true,
      timer: 1500,
      width: "600px",
      
    })
  }

  return (
    <div id="contact-form" className={styles.contact_form_container}>
      <div className={styles.logo_container}>
        <img src="/Assets/logo.png" />
        <h1>GET STARTED</h1>
      </div>
     
      <div id="final-form">
        <section className="form-wrapper">
          {show_success ? (
            successMsg()
          ) : (
            <div className={styles.form_container}>

              <div className={styles.custom_input}>
                <label>Name</label>
                <input
                  value={name}
                  onChange={e => set_name(e.target.value)}
                  type="text"
                  placeholder="Your Name"

                />
              </div>
              <div className={styles.custom_input}>
                <label>E-mail Address</label>
                <input
                  value={email}
                  onChange={e => set_email(e.target.value)}
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              {/* <div className="form-group">
                <input
                  value={company}
                  onChange={e => set_company(e.target.value)}
                  type="text"
                  placeholder="Enter Your Company"
                />
              </div> */}
              {/* <div className="form-group">
                <input
                  value={phone}
                  onChange={e => set_phone(e.target.value)}
                  type="text"
                  placeholder="Enter Your Phone"
                />
              </div> */}
              <div className={styles.custom_input}>
                <label>What Would you like to build on Mintdropz?</label>
                <textarea
                  value={msg}
                  onChange={e => set_msg(e.target.value)}
                  type="text"
                  placeholder="Write Your Message"
                />
              </div>
              <div className={styles.btn_container}>
                <button
                  disabled={is_loading ? 'disabled' : ''}
                  onClick={() => doSendEmail()}
                  className="form-btn"
                >
                  {is_loading ? 'Loading...' : 'Sign Up For Early Access'}
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
