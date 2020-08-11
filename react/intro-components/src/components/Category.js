import React from 'react'

function Category(promps) {
    return (
        <>
            {promps.categories.map(category =>
                <div class="col-lg-6 mb-4">
                    <div class="card bg-info text-white shadow">
                        <div class="card-body">
                            {category}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Category