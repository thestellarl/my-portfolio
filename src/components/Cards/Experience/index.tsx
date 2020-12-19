import React from 'react';
import styled from 'styled-components';
import PageSection from '../../PageSection';

const ExperienceCard = () => {
    return(
         <PageSection height='min-content'>
                <h1 style={{fontFamily: 'BeVietnam-Regular'}}>Experience</h1>
                <ListContainer>
                  <li>TypeScript</li>
                  <li>ReactJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Git</li>
                  <li>Java</li>
                </ListContainer>
            </PageSection>
    );
}

export default ExperienceCard;

const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  font-size: 2.5em;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(33,33,33,.5);
  justify-content: space-around;
  > * {
    margin: 0 25px;
    transition: all 0.2s ease-in-out;
    :hover{
      transform: scale(1.5);
      text-shadow: 0 10px 5px rgba(33,33,33,.5);
    }
  }
`;