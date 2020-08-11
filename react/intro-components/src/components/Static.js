import React from 'react'

function Static(promps) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${promps.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${promps.color} text-uppercase mb-1`}> {promps.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{promps.number}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${promps.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Static