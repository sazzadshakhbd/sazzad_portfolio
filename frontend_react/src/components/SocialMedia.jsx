import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">


    <div>
      <a href='https://www.linkedin.com/in/sazzadshakh/' target="_blank" rel='noreferrer'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/sazzadshakhbd' rel='noreferrer' target="_blank"><BsGithub /></a>
    </div>
    <div>
      <a href='https://www.facebook.com/sobuzshakhbd/' target="_blank" rel='noreferrer'><FaFacebookF /></a>
    </div>
    <div>
      <a href='https://twitter.com/sazzadshakhbd' target="_blank" rel='noreferrer'><BsTwitter /></a>
    </div>
  </div>
);

export default SocialMedia;
