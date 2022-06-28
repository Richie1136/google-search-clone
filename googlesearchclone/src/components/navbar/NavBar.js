import { NavLink } from 'react-router-dom'

{/* py means top and bottom and px means left and right*/ }

const NavBar = ({ darkTheme, setDarkTheme }) => {

  const changeTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <h1>NavBar</h1>
      <div className="flex justify-between items-center space-x-5 w-screen">
        <NavLink to='/'>
          <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
            Googly 🔎
          </p>
        </NavLink>
        <button className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1' onClick={changeTheme}>
          {darkTheme ? '💡 Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
  )
}

export default NavBar