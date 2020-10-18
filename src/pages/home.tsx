import React, { ReactElement, useState } from 'react';
import { HeroSection, Navbar, Sidebar, InfoSection } from '../components';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/InfoSection/data';
interface Props {}

export default function HomePage(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggle = () => {
    setIsSidebarOpen((isOpen: boolean) => !isOpen);
  };
  return (
    <>
      <Navbar onMenuClick={() => toggle()} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => toggle()} />

      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
}
