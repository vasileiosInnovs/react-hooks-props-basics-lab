import React from "react";
import Links from './Links';

function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!bio ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
      linkedin={linkedin}
      github={github}
      />
    </div>
  );
}

export default About;