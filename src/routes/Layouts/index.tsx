import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '@/components/Sidebar';

// import GithubIcon from '@/assets/icons/github.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react';

const Layouts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      <button type='button' className='fixed left-0 top-2 z-50 rounded-r-lg bg-white px-0.5 py-5 shadow-md hover:bg-neutral-100' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <ArrowRightIcon className="size-5" />
      </button>
      <Sidebar isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
      <Outlet />
    </>
  );
};

export default Layouts;
