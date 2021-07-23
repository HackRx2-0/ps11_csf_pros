import React from 'react'

const DoctorName = ({ id, docName, specialization }) => {
    return (
        <div className="sidebarChannel">
            <h4><span className='sidebarChannel__hash'>#</span>{docName} ({specialization})</h4>
        </div>
    )
}

export default DoctorName