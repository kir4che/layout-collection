import Navigation from '@/components/Navigation';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?react';

interface SidebarProps {
  isOpen: boolean;
  onClick: () => void;
}

const Sidebar = ({ isOpen, onClick }: SidebarProps) => (
  <div className={`fixed left-0 top-0 z-50 h-screen w-60 border-r border-solid border-neutral-200 bg-white p-4 duration-300 ${isOpen ? 'translate-x-1/5' : '-translate-x-60'}`}>
    <div className='border-b border-solid border-neutral-200 pb-5'>
      <h1 className="flex items-center gap-2 text-lg font-medium">
        <button type='button' className='rounded-full duration-300 hover:bg-neutral-300/25' onClick={onClick}>
          <ArrowLeftIcon className="mt-1 size-6" />
        </button>
        切版大合集
      </h1>
    </div>
    <Navigation />
    {/* <button type='button'><GithubIcon className="duration-300 size-6 text-neutral-800 hover:text-rose-600" /></button> */}
  </div>
);

export default Sidebar;