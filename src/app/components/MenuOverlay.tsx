import NavLink from "./NavLink";

const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col py-4 items-center bg-[rgba(18,18,18,0.9)] backdrop-blur-md -mt-7">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay;