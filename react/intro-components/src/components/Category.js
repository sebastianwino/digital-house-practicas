import React from 'react'

function Category(promps) {
    return (
        <>
            {promps.categories.map((category, i) =>
                <div className="col-lg-6 mb-4" key={category + i}>
                    <div className="card bg-info text-white shadow">
                        <div className="card-body">
                            Category {category}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Category