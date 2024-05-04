import { Link } from 'react-router-dom';

import SourceNotesRounded from '@/assets/icons/source-notes-rounded.svg?react';

const data = [
  {
    title: '溫泉酒店',
    route: '/layouts/playliving-izu-clone',
    sourceUrl: 'https://playliving-izu.com/',
  }

];

const Navigation = () => (
  <nav>
    <ul className='my-6 ml-4 list-item list-disc space-y-3 text-sm'>
      {data.map(item => (
        <li key={item.title} className='flex items-center gap-1.5'>
          <Link to={item.route} className='hover:text-rose-600'>{item.title}</Link>
          <button type='button' title="來源網站" className='hover:opacity-65'>
            <Link to={item.sourceUrl} target="_blank" rel="noopener noreferrer">
              <SourceNotesRounded className="size-4" />
            </Link>
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;