import React from 'react';

const Friend = ({ friend }) => {
    return (
        <>
            <li>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
            </li>
        </>
    );
};

export default Friend;
