import React from 'react'
import StatCard from './StatCard'

const stats = [
    {
        color: "primary",
        title: "Products in Data Base",
        number: 135,
        icon: "clipboard-list" 
    },
    {
        color: "success",
        title: "Amount in products",
        number: "$546.456",
        icon: "dollar-sign"
    },
    {
        color: "warning",
        title: "Users quantity",
        number: 38,
        icon: "user-check"
    },
    {
        color: undefined,
        title: undefined,
        number: undefined,
        icon: undefined
    }
]

function Stats() {
    return (
       <>
            {/* <!-- Amount of Products in DB --> */}
            {stats.map( (stat, i) => <StatCard key={i} color={stat.color} title={stat.title} number={stat.number} icon={stat.icon}/>)}
       </>
    )
}

export default Stats