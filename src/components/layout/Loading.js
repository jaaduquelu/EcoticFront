import LinearProgress from '@material-ui/core/LinearProgress'

//Redux
import { useSelector, useDispatch } from 'react-redux'; 

const Loading = () => {
  const dispatch = useDispatch()
  const activo = useSelector(state => state.loadings)

  function closeloading () {
    dispatch({type: 'ACTION-LOADING', payload: false})
  }

  return (<>
    <LinearProgress onDoubleClick={closeloading} sx={{ display: activo ? 'flex':'none'}} color="verde" />
  </>)
}

export default Loading