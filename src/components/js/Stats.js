import React from 'react'
import "../css/Stats.css";


export default function Stats() {
    return (
        <div className="stats-section">
            <div className="stats-text">
                <div className="stats-individual">
                    <h2>127</h2>
                    <p>Student amount</p>
                </div>

                <div className="stats-individual">
                    <h2>A-</h2>
                    <p>Average grade</p>
                </div>

                <div className="stats-individual">
                    <h2>3yrs</h2>
                    <p>Course length</p>
                </div>

            </div>
            
        </div>
    )
}
