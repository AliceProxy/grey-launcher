import { FaFire, FaPoo, FaBeer } from 'react-icons/fa'

const SideBar = () => {
    return (
        <div className="sidebar fixed top-0 left-0 h-screen w-16 flex flex-col
        bg-gray-900 shadow-lg">
            <SideBarIcon icon={<FaFire size="28"/>}/>
            <SideBarIcon icon={<FaPoo size="28"/>}/>
            <SideBarIcon icon={<FaBeer size="28"/>}/>
            <SideBarIcon icon={<FaFire size="28"/>}/>
            <SideBarIcon icon={<FaPoo size="28"/>}/>
            <SideBarIcon icon={<FaBeer size="28"/>}/>
        </div>
    );
};


const SideBarIcon = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 text-pink-500
                    hover:bg-purple-800 hover:text-white
                    rounded-3xl hover:rounded-xl
                    transition-all duration-300 ease-linear
                    cursor-pointer
                    ">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100 absolute w-auto p-2 m-2 min-w-max left-14
                     rounded-md shadow-md
                     text-white bg-gray-900
                     text-xs font-bold
                     transition-all duration-100 scale-0 origin-left">
            {text}
        </span>
    </div>
);

export default SideBar;