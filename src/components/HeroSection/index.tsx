import React, { ReactElement, useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  Button,
  HeroBtnWrapper,
  HeroContent,
  HeroText,
  HeroTitle,
  ArrowForward,
  ArrowBack,
} from './styled';
interface Props {}

export default function HeroSection(): ReactElement {
  const [hover, setHover] = useState(false);
  return (
    <>
      <HeroContainer>
        Helo
        <HeroBg>
          <VideoBg autoPlay loop muted src={'/assets/videos/videobg.mp4'} />
        </HeroBg>
        <HeroContent>
          <HeroTitle>Virtual Banking made easy</HeroTitle>
          <HeroText>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </HeroText>
          <HeroBtnWrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Button to="signup" primary={true} dark={true}>
              Get started {hover ? <ArrowForward /> : <ArrowBack />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}
