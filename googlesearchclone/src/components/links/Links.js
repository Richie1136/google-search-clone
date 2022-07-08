import { NavLink } from "react-router-dom"

const links = [
  { url: '/search', text: 'All' },
  { url: '/news', text: 'News' },
  { url: '/image', text: 'Images' },
  { url: '/video', text: 'Video' }

]

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink to={url} activeClassName='text-blue-500 border-b-2 dark:text-blue-300 border-blue-700 pb-2' />
      ))}
    </div>
  )
}

export default Links