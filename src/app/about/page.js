"use client"
import { useRef } from 'react';
import AboutSection from '@components/AboutSection';
import TeamImage from '@components/AboutTeam';

const About = () => {

  const aboutTeamRef = useRef(null);

  return (
    <>
    <AboutSection scrollToAboutTeam={aboutTeamRef} />
    <TeamImage ref={aboutTeamRef} />
    </>
  );
};

export default About;
