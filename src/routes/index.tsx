import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/routes/Home';
import Layouts from '@/routes/Layouts';
import HotSpringHotel from './Layouts/HotSpringHotel';

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/layouts',
    element: <Layouts />,
    children: [
      {
        path: '/layouts/playliving-izu-clone',
        element: <HotSpringHotel />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
