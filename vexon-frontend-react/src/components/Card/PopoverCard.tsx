import React from 'react';


const PopoverCard = ({ selectedMenu }) => {
    console.log("=> selectedMenu :: ", selectedMenu);

    return (
        <>
            <div className="absolute bg-teal-800 w-2/3 mx-auto border border-gray-200 rounded shadow-lg p-4 z-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {selectedMenu}
                </h3>
                <p className="text-sm text-gray-300">
                    This is the popover content. You can put any elements here:
                    images, links, forms, etc.
                </p>
            </div>
        </>
    )
};

export default PopoverCard;