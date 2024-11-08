import React from 'react';

function HeaderContent({ name, Icon }) {
    return (
        <div className='text-white flex items-center gap-3
        text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'>
            <Icon />
            <h3 className=''>{name}</h3>
        </div>
    );
}

export default HeaderContent;
