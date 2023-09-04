import React from 'react';
import Button from './shared/component/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

const App = () => {
    return (
        <>
            <div className='app'>
                <div className='sidebar'>
                    <FriendsList />
                    <FormAddFriend />
                    <Button>Add Friend</Button>
                </div>

                <FormSplitBill />
            </div>
        </>
    );
};

export default App;
