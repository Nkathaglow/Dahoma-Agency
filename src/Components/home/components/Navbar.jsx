import { Link } from 'react-router-dom'

function Navbar() {
    const navItems = [
        { label: 'About Us', link: '/aboutus' },
        { label: 'Services', link: '/services' },
        { label: 'Blog', link: '/blog' },
        { label: 'Contact Us', link: '/contactus' }
    ];

    return (
        <div>
            <nav className="h-[64px]  max-w-[1600px] mx-auto justify-center items-center">
                <div className="container  flex justify-between items-center  mx-auto w-full pt-[15px]">
                    <div className="flex text-4xl font-bold  justify-between items-center ">
                        <Link to="/">Dahoma-Agency</Link>
                    </div>
                    <div className="">
                        <ul className="flex ">
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="text-[#394149] mx-5 font-semibold text-[24px]">
                                        <Link to={item.link} className="nav-link">
                                            {item.label}
                                        </Link>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar