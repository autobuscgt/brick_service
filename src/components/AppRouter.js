
import {Routes,Route} from 'react-router-dom'
import { routes } from '../utils/routes';
import { HOMEPAGE_ROUTE } from '../utils/consts';
function AppRouter() {
    return (
        <Routes>
            {routes.map((route)=>(
                <Route path={route.path} Component={route.Component}/>
            ))}
            <Route path='*' Component={HOMEPAGE_ROUTE}/>
        </Routes>
    );
}

export default AppRouter;