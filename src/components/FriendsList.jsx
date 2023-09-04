import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends }) => {
    return (
        <>
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </>
    );
};

export default FriendsList;
