import {useDispatch} from 'react-redux'
import {chanheTheme} from '../../redux/App/AppSlice'


function ThemeButton() {
    const dispatch = useDispatch()

    const handleTheme = () => {
        dispatch(chanheTheme())
    }


  return (
    <div>
        <button className='button' onClick={handleTheme}>changeTheme</button>
    </div>
  )
}

export default ThemeButton