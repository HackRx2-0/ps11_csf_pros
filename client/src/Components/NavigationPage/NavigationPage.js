import React from 'react'
import { useHistory } from 'react-router-dom'

function NavigationPage() {

    const history = useHistory()

    return (
        <div className="navigation">
            <div className="navigation__first">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Symptom and Report Generator</b></h4>

                    </div>
                </div>

                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/12/30/20/59/report-3050965_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Fetch your Report</b></h4>
                    </div>
                </div>

                <div class="card" onClick={() => history.push("/bookappointment")}>
                    <img src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Book an Appointment</b></h4>
                    </div>
                </div>
            </div>

            <div className="navigation__second">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/12/05/19/43/pill-1884775_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Your Prescriptions</b></h4>
                    </div>
                </div>

                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Payments</b></h4>
                    </div>
                </div>

                <div class="card" onClick={() => history.push("/community")}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/17/59/association-152746_960_720.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    <div class="container">
                        <h4><b>Connect to Community</b></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationPage
