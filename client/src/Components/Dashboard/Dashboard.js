import React from 'react'
import { useHistory } from 'react-router-dom'

function Dashboard() {

    const history = useHistory()

    return (
        <div className="dashboard">
            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2019/12/02/03/26/snow-4666831_960_720.jpg" alt="" title="Homepage" onClick={() => history.push("/front")} />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png" alt="" title="Symptom and Report Generator" />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2017/12/30/20/59/report-3050965_960_720.jpg" alt="" title="Fetch your Report" />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" alt="" title="Book an Appointment" />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2016/12/05/19/43/pill-1884775_960_720.jpg" alt="" title="Your Prescriptions" />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg" alt="" title="Payments" />

            <img className="dashboard__image" src="https://cdn.pixabay.com/photo/2013/07/12/17/59/association-152746_960_720.png" alt="" title="Connect to Community" onClick={() => history.push("/community")} />
        </div>
    )
}

export default Dashboard
