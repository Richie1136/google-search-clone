import { NavLink } from "react-router-dom"

const links = [
  { url: '/search', text: '🔎  All' },
  { url: '/news', text: '📰  News' },
  { url: '/image', text: '📸 Images' },
  { url: '/video', text: '📺 Videos' }

]

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink key={text} className='m-2 mb-0 flex justify-center' to={url} activeclassname='text-blue-500 border-b-2 dark:text-blue-300 border-blue-700 pb-2' >
          {text}
        </NavLink>
      ))
      }
    </div>
  )
}

export default Links