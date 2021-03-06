import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../features/map/reducer';

export const useProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects());

  return { projects, dispatch };
};
