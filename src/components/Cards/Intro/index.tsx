import React from 'react';
import styled from 'styled-components';
import PageSection from '../../PageSection';
import CustomLink from '../../StyledLink';

const ProfileCard = () => {
    return(
        <Wrapper height='min-content' id='about'>
              <ProfilePhoto src='./profile2.jpg' />
              <div style={{ marginRight: '5vw'}}>
                <h3>I've got experience in a number of different languages and will be graduating from Oregon State University in 2021 with a degree in Computer Science with a focus on Artificial Intelligence.
                    I have professional experience with front-end development and a strong passion for machine learning built on a strong math background. In my spare time you'll find me doing anything from 
                    working on a new software project to building and racing drones.
                </h3>
                <h1>If you're looking for more details or would like a resume, checkout my LinkedIn or send me <CustomLink href='mailto:stellal@oregonstate.edu'>an email!</CustomLink></h1>
              </div>
        </Wrapper>
    );
}

export default ProfileCard;

const Wrapper = styled(PageSection)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ProfilePhoto = styled.img`
  border-radius: 50%;
  height: 15vw;
  border: 8px solid #2a9d8f;
  border-style: outset;
  margin: 0vw 5vw;
`;