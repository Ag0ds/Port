import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaWhatsapp, FaLinkedin, FaDiscord } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="d-flex gap-2">
      <button type="button" className="btn btn-light rounded-circle p-2">
        <FaGithub size={20} />
      </button>
      <button type="button" className="btn btn-light rounded-circle p-2">
        <FaWhatsapp size={20} color="#25D366" />
      </button>
      <button type="button" className="btn btn-light rounded-circle p-2">
        <FaLinkedin size={20} color="#0A66C2" />
      </button>
      <button type="button" className="btn btn-light rounded-circle p-2">
        <FaDiscord size={20} color="#5865F2" />
      </button>
    </div>
  );
};

export default SocialButtons;
