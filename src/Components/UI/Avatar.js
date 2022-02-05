import React from 'react';
import user from "../img/users.jpg";


export default function Avatar() {
    return (
        <div className='avatar_card'>
            <img src={user} alt="avatar" className='avatar' />
        </div>
    )
}
