import React from 'react'

function Static(promps) {
    return (
        <div class="col-md-4 mb-4">
            <div class={`card border-left-${promps.color} shadow h-100 py-2`}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class={`text-xs font-weight-bold text-${promps.color} text-uppercase mb-1`}> {promps.title}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{promps.number}</div>
                        </div>
                        <div class="col-auto">
                            <i class={`fas fa-${promps.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Static