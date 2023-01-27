import {Route, Routes as RoutesWrapper} from 'react-router-dom'
import {routes} from './routes'

const AllRoutes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component />}/>
      ))}
    </RoutesWrapper>
  );
}

export default AllRoutes;