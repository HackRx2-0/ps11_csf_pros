import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Avatar } from '@material-ui/core'
import SidebarChannel from './SidebarChannel'
import DoctorName from './DoctorName'
import { db } from "../../firebase"
import { useEffect } from 'react'

const Sidebar = () => {

    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        })
    }, [])

    const handleAddChannel = (e) => {
        e.preventDefault()

        const channelName = prompt('Enter a new channel name')

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            })

        }
    }

    return (
        <div className='sidebar' >
            <div className="sidebar__top">
                <h3>COMMUNITY</h3>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <h4>Specialized Rooms</h4>
                    </div>

                    <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
                </div>
                <div className="sidebar__channelsList">
                    {/* <SidebarChannel id="1" channelName="Dentistry" />
                    <SidebarChannel id="1" channelName="ENT" />
                    <SidebarChannel id="1" channelName="Orthology" />
                    <SidebarChannel id="1" channelName="Pediatrics" /> */}
                    {
                        channels.map(({ id, channel }) => (
                            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                        ))
                    }
                </div>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <h4>Doctors Available</h4>
                    </div>
                </div>
                <div className="sidebar__channelsList">
                    <DoctorName id="1" docName="Mr. Verma" specialization="Dentistry" />
                    <DoctorName id="1" docName="Mr. Verma" specialization="ENT" />
                    <DoctorName id="1" docName="Mr. Verma" specialization="Orthology" />
                    <DoctorName id="1" docName="Mr. Verma" specialization="Pediatrics" />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHf0QirkFvJig/profile-displayphoto-shrink_400_400/0/1585327736690?e=1632355200&v=beta&t=3BHseOor088iZVNnkkOs7Qhrc29ZjXfTRbvDiqIXdb4" />
                <div className="sidebar__profileInfo">
                    <h3>Pranjal</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar