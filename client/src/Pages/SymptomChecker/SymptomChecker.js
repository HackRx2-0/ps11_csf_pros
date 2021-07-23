import React from 'react'
import Dashboard from '../../Components/Dashboard/Dashboard'
import SymptomCheck from '../../Components/SymptomCheck/SymptomCheck'

function SymptomChecker() {
    return (
        <div className="symptomChecker">
            <Dashboard />
            <SymptomCheck />
        </div>
    )
}

export default SymptomChecker
