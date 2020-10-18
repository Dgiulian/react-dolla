import React, { ReactElement } from 'react';
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesSubtitle,
  ServucesText,
} from './styled';
import icon1 from '../../assets/images/svg1.svg';
import icon2 from '../../assets/images/svg2.svg';
import icon3 from '../../assets/images/svg3.svg';
interface Props {}

export default function ServicesSection({}: Props): ReactElement {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Our services</ServicesTitle>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1}></ServicesIcon>
          <ServicesSubtitle>Reduce expenses</ServicesSubtitle>
          <ServucesText>
            We help reduce your fees and increase your overall revenue.
          </ServucesText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2}></ServicesIcon>
          <ServicesSubtitle>Virtual offices</ServicesSubtitle>
          <ServucesText>
            You can access our platform online anywhere in the world.
          </ServucesText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3}></ServicesIcon>
          <ServicesSubtitle>Premium Benefits</ServicesSubtitle>
          <ServucesText>
            Our special membership card returns 5% cash back.
          </ServucesText>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
