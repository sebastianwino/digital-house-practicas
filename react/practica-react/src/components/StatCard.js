import React from 'react'
import PropTypes from 'prop-types'

function StatCard(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

StatCard.defaultProps = {
    color: "secondary",
    title: "More stats",
    number: null,
    icon: "plus" 
}  
StatCard.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    icon: PropTypes.oneOf(['clipboard-list', 'dollar-sign', 'user-check', 'plus']).isRequired
}

export default StatCard
