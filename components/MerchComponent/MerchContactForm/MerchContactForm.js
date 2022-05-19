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

    // action="mailto:contact@yourdomain.com"
    // method = "POST"
    // enctype = "multipart / form - data"
    // name = "EmailForm"
  };
  return (
    <div id="contact-form" className={styles.contact_form_container}>
      <div className={styles.logo_container}>
        <img src="/Assets/logo.png" />
        <h1>GET STARTED</h1>
      </div>
      {/* <form name="contact" data-netlify="true" onSubmit={handleSubmit}> */}
      <form name="contact" data-netlify="true" action="mailto:academicboucse3@gmail.com" method="POST">
        {/* <form name="contact" data-netlify="true" action="https://formsubmit.co/academicboucse3@gmail.com" method = "POST"> */}
        {/* <form name="contact" data-netlify="true" action="https://formsubmit.co/be72fb2a529848764e7d0dba08494bb0" method = "POST"> */}
        {/* <form name="contact" data-netlify="true" action="https://formspree.io/f/mnqwlyav" method = "POST"> */}
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
              name="message"
              id="message"
              required
              value={amessage}
              onChange={(e) => set_amessage(e.target.value)}
            />
          </div>
          {spinner && <div className={styles.spinner}></div>}
          {status && <div className={styles.contactstatus}>{message}</div>}
          <div className={styles.btn_container}>
            <button className="btn" type="submit">
              {spinner ? "Loading..." : "Sign Up For Early Access"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MerchContactForm;


// import React, { useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';

// // import Container from 'common/src/components/UI/Container/index';
// import CheckBox from 'common/src/components/Checkbox';
// import Heading from 'common/src/components/Heading';
// import Button from 'common/src/components/Button';
// import Input from 'common/src/components/Input';
// import Image from 'common/src/components/Image';
// import Text from 'common/src/components/Text';
// import './styles.css';
// import SectionWrapper, {
//   FooterInner,
//   Content,
//   SubscriptionForm
// } from './subscribe.style';

// // import bg1 from 'common/src/assets/image/agencyModern/cta/1.png';
// // import bg2 from 'common/src/assets/image/agencyModern/cta/2.png';
// // import bg3 from 'common/src/assets/image/agencyModern/cta/3.png';
// // import bg4 from 'common/src/assets/image/agencyModern/cta/4.png';
// // import bg5 from 'common/src/assets/image/agencyModern/cta/5.png';

// const Subscribe = () => {
//   const [name, set_name] = useState('');
//   const [email, set_email] = useState('');
//   const [company, set_company] = useState('');
//   const [phone, set_phone] = useState('');
//   const [msg, set_msg] = useState('');
//   const [is_loading, set_loading] = useState(false);
//   const [server, set_server] = useState(null);
//   const [show_success, set_show_success] = useState(false);

//   const doSendEmail = async () => {
//     let jsondata = {
//       email: email,
//       name: name,
//       company: company,
//       phone: phone,
//       msg:msg,
//       domain:"soprano.ai"
//     };
//     set_loading(true);
//     try {
//       let response = await fetch(
//         'https://desolate-hamlet-47455.herokuapp.com/api/email/soprano/send',
//         {
//           method: 'post',
//           headers: {
//             Accept: 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(jsondata)
//         }
//       );
//       let data = await response.json();
//       console.log(data);
//       set_loading(false);
//       set_show_success(true);
//     } catch (err) {
//       set_loading(false);
//       set_server('some server error');
//     }
//   };
//   return (
  //   <SectionWrapper id="final-form">
  //     {/ <Container> /}
  //       {/* <FooterInner>
  //         <Content>
  //           <Heading as="h3" content="Like our service? Subscribe us" />
  //           <Text content="We have more than thousand of creative entrepreneurs and stat joining our business" />
  //         </Content>
  //         <SubscriptionForm>
  //           <div>
  //             <Input
  //               inputType="email"
  //               placeholder="Enter Email Address"
  //               iconPosition="left"
  //               aria-label="email"
  //             />
  //             <Button title="Subscribe" type="submit" />
  //           </div>
  //           <CheckBox
  //             id="remember"
  //             htmlFor="remember"
  //             labelText="Don’t provide any promotional message."
  //           />
  //         </SubscriptionForm>
  //       </FooterInner> */}
  //       <section className="form-wrapper">
  //         {show_success ? (
  //           <div
  //             style={{
  //               width: '',
  //               display: 'flex',
  //               flexDirection: 'column',
  //               alignItems: 'center',
  //               justifyContent: 'center'
  //             }}
  //           >
  //             <img
  //               style={{ maxWidth: '220px', height: 'auto' }}
  //               src="https://res.cloudinary.com/dbqmuazky/image/upload/v1613748758/check.png"
  //             />
  //             <h1 style={{ fontSize: '45px', marginTop: '15px' }}>Thank You</h1>
  //           </div>
  //         ) : (
  //           <div className="form-container">
  //             <h2>Contact Us</h2>
  //             <div className="form-group">
  //               <input
  //                 value={name}
  //                 onChange={e => set_name(e.target.value)}
  //                 type="text"
  //                 placeholder="Enter Your Name"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <input
  //                 value={email}
  //                 onChange={e => set_email(e.target.value)}
  //                 type="text"
  //                 placeholder="Enter Your Email"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <input
  //                 value={company}
  //                 onChange={e => set_company(e.target.value)}
  //                 type="text"
  //                 placeholder="Enter Your Company"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <input
  //                 value={phone}
  //                 onChange={e => set_phone(e.target.value)}
  //                 type="text"
  //                 placeholder="Enter Your Phone"
  //               />
  //             </div>
  //             <div className="form-group">
  //               <textarea
  //                 value={msg}
  //                 onChange={e => set_msg(e.target.value)}
  //                 type="text"
  //                 placeholder="Enter Your Message"
  //               />
  //             </div>
  //             <div style={{ display: 'flex' }}>
  //               <button
  //                 disabled={is_loading ? 'disabled' : ''}
  //                 onClick={() => doSendEmail()}
  //                 className="form-btn"
  //               >
  //                 {is_loading ? 'Loading...' : 'Contact Us'}
  //               </button>
  //             </div>
  //           </div>
  //         )}
  //       </section>
  //     {/ </Container> /}
  //     {/* <Image src={bg1} alt="bg1" className="illustration bg1" />
  //     <Image src={bg2} alt="bg2" className="illustration bg2" />
  //     <Image src={bg3} alt="bg3" className="illustration bg3" />
  //     <Image src={bg4} alt="bg4" className="illustration bg4" />
  //     <Image src={bg5} alt="bg5" className="illustration bg5" /> */}
  //   </SectionWrapper>
  // );
// };

// export default Subscribe;