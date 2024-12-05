const NavItem = (props) => {
  return (
   <>
   <li className="">
    <a href={props.href} className="text-gray-600 no-underline dark:text-gray-300 text-lg hover:underline">
      {props.name}  
    </a>
   </li>
   </>
  )
}

export default NavItem
