import React from 'react';
import Chat from '../../Components/Chat/Chat';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function Community() {
    return (
        <div className="community">
            <Sidebar />
            <Chat />
        </div>
    );
}
