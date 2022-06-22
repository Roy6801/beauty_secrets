import { Box } from "@mui/material";
import google1 from "../static/google1.svg";
import insta1 from "../static/insta1.svg";
import facebook1 from "../static/facebook1.svg";
import whatsapp1 from "../static/whatsapp1.svg";
import google2 from "../static/google2.svg";
import insta2 from "../static/insta2.svg";
import q1_db from "../static/vectors/q1_db.svg";
import q2_w from "../static/vectors/q2_w.svg";
import q4_w from "../static/vectors/q4_w.svg";

const Footer = () => {
  return (
    <Box className="footer-container">
      <div className="footer-social2">
        <img src={q1_db} className="footer-vec1" />
        {window.innerWidth < 640 ? (
          <div className="sub-social">
            <img src={google2} />
            <img
              src={insta2}
              onClick={(e) =>
                window.open(
                  "https://www.instagram.com/beautysecrets3110/",
                  "_blank"
                )
              }
            />
          </div>
        ) : null}
      </div>
      <div className="footer-social1">
        <img src={q4_w} className="footer-vec2" />
        <div className="social-icons">
          {window.innerWidth < 640 ? null : (
            <div className="sub-social">
              <img src={google1} />
              <img
                src={insta1}
                onClick={(e) =>
                  window.open(
                    "https://www.instagram.com/beautysecrets3110/",
                    "_blank"
                  )
                }
              />
            </div>
          )}
          <div className="sub-social">
            <img
              src={facebook1}
              onClick={(e) =>
                window.open(
                  "https://www.facebook.com/beautysecrets3110/",
                  "_blank"
                )
              }
            />
            <img
              src={whatsapp1}
              onClick={(e) =>
                window.open("https://wa.me/919920395135/", "_blank")
              }
            />
          </div>
        </div>
      </div>
      <div className="business-footer">
        <div className="business-name">BeautySecrets 2022</div>
        <img src={q2_w} className="footer-vec3" />
      </div>
    </Box>
  );
};

export default Footer;
