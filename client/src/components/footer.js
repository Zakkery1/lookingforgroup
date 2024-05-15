import React from 'react';
import styled from 'styled-components';

// Styled component for the colored box
const ColoredBox = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

// Styled component for the footer logo
const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Footer = () => {
  const team = [
    { name: "Zakkery Cales, Project Lead", linkedin: "https://www.linkedin.com/in/zakkery-cales901/" },
    { name: "Brien Simmons, Frontend Dev", linkedin: "https://www.linkedin.com/in/briensimmons/" },
    { name: "Jervontae Shotwell, Frontend Dev", linkedin: "https://www.linkedin.com/in/jshotwell7/" },
    { name: "Makenzie Jones, Backend Dev", linkedin: "https://www.linkedin.com/in/makenziejones90/" },
    { name: "Dominique Buckner, Backend Dev", linkedin: "https://www.linkedin.com/in/dombucknerui/" },  
  ];

  const createLink = (text, url) => {
    return <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
  };

  return (
    <ColoredBox>
      <Logo src="./client/src/images/image.png" alt="Company Logo" />
      <footer id="footer">
        {team.map((member, index) => (
          <div key={index}>
            {createLink(member.name, member.linkedin)}
          </div>
        ))}
      </footer>
    </ColoredBox>
  );
};

export default Footer;
