import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/routes/Home';
import Layouts from '@/routes/Layouts';

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/layouts',
    element: <Layouts />,
    children: [],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
