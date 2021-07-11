import Home from '../views/pages/home';
import Gen1 from '../views/pages/gen1';
import Gen2 from '../views/pages/gen2';
import Gen3 from '../views/pages/gen3';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': Home, // default page,
  '/gen1' : Gen1,
  '/gen2': Gen2,
  '/gen3': Gen3,
  '/detail/:id': Detail,
};
 
export default routes;