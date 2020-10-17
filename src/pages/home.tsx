import React, { ReactElement, useState } from 'react';
import { HeroSection, Navbar, Sidebar } from '../components';
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
    </>
  );
}
