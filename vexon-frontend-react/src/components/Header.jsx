import React from "react";
import PopoverCard from './Card/PopoverCard';


const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const popoverRef = React.useRef(null);
    const [selectedMenu, setSelectedMenu] = React.useState(null);

    /** Close popover if user clicks outside of it */
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false);
            };
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuItemSelection = (event, menuItem) => {
        event.preventDefault();
        setIsOpen(true);
        setSelectedMenu(menuItem);
    };

    return (
        <>
            <div className="bg-[#021b18] w-full text-white" ref={popoverRef}>
                <div className="flex justify-between mx-8 py-2">
                    <img src="/images/logo/logo-bg.png" alt="" className="h-[80px] w-auto" />
                    <div className="flex flex-row">
                        <span className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-8">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-8">
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="bg-sky-600 text-white flex flex-row justify-center p-1">
                    <button type="button" onClick={(e) => handleMenuItemSelection(e, 'Products')} className="text-lg mx-14">PRODUCTS</button>
                    <button type="button" onClick={(e) => handleMenuItemSelection(e, 'Solutions')} className="text-lg mx-14">MARKETS & SOLUTIONS</button>
                    <button type="button" onClick={(e) => handleMenuItemSelection(e, 'Company')} className="text-lg mx-14">COMPANY</button>
                    <button type="button" onClick={(e) => handleMenuItemSelection(e, 'Contact')} className="text-lg mx-14">CONTACT</button>
                </div>
                {isOpen && <PopoverCard selectedMenu={selectedMenu} />}
            </div>
        </>
    )
};

export default Header;