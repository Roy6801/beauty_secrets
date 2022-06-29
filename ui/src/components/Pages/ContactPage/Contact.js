import { Box } from "@mui/material";
import Reach from "./Reach";
import Timing from "./Timing";
import salon from "../../../static/salon.jpg";
import call from "../../../static/call.svg";
import mail from "../../../static/mail.svg";
import q2_w from "../../../static/vectors/q2_w.svg";
import google1 from "../../../static/google1.svg";
import insta1 from "../../../static/insta1.svg";
import facebook1 from "../../../static/facebook1.svg";
import whatsapp1 from "../../../static/whatsapp1.svg";

const Contact = () => {
  const ContactCover = () => {
    if (window.innerWidth < 640) {
      return (
        <div className="contact-cover">
          <div className="contact-title">Contact Us</div>
          <div className="contact-info">
            <div className="logo-div">
              <img src={call} className="call-logo" />
            </div>
            <div className="contact-number">
              <div>+91-7977112432</div>
              <div>022-68977124</div>
            </div>
          </div>
          <div className="contact-info">
            <div className="logo-div">
              <img src={mail} className="mail-logo" />
            </div>
            <div className="mail-id">beautysecrets3110@gmail.com</div>
          </div>
          <div className="contact-vec-div">
            <img src={q2_w} className="contact-vec" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="contact-cover">
          <div className="contact-social-div">
            <div className="contact-info">
              <div className="contact-title">Call Us</div>
              <ul className="contact-detail">
                <li>+91-7977112432</li>
                <li>022-68977124</li>
              </ul>

              <div className="contact-title">Mail Us</div>
              <ul className="contact-detail">
                <li>beautysecrets3110@gmail.com</li>
              </ul>
            </div>

            <div className="contact-social-icons">
              <img
                src={google1}
                className="contact-icon-img xraise"
                onClick={(e) =>
                  window.open(
                    "https://g.page/r/CaEtreKxeeVlEAg/review",
                    "_blank"
                  )
                }
              />
              <img
                src={insta1}
                className="contact-icon-img xraise"
                onClick={(e) =>
                  window.open(
                    "https://www.instagram.com/beautysecrets3110/",
                    "_blank"
                  )
                }
              />
              <img
                src={facebook1}
                className="contact-icon-img xraise"
                onClick={(e) =>
                  window.open(
                    "https://www.facebook.com/beautysecrets3110/",
                    "_blank"
                  )
                }
              />
              <img
                src={whatsapp1}
                className="contact-icon-img xraise"
                onClick={(e) =>
                  window.open("https://wa.me/919920395135/", "_blank")
                }
              />
            </div>
          </div>

          <div className="contact-vec-div">
            <img src={q2_w} className="contact-vec" />
          </div>
        </div>
      );
    }
  };

  return (
    <Box className="contact-container">
      <img src={salon} className="contact-cover-img" />
      <ContactCover />
      <Reach />
      <Timing />
    </Box>
  );
};

export default Contact;
