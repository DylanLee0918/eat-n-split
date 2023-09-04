import React, { useState } from 'react';
import Button from './shared/component/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

const App = () => {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);

    // Show Add Friend Form
    const handleShowAddFriend = () => {
        setShowAddFriend((show) => !show);
    };

    // Callback Function
    const handleAddFriend = (friend) => {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    };

    return (
        <>
            <div className='app'>
                <div className='sidebar'>
                    <FriendsList friends={friends} />
                    {showAddFriend && (
                        <FormAddFriend onAddFriend={handleAddFriend} />
                    )}

                    <Button onClick={handleShowAddFriend}>
                        {showAddFriend ? 'Close' : 'Add Friend'}
                    </Button>
                </div>

                <FormSplitBill />
            </div>
        </>
    );
};

export default App;
