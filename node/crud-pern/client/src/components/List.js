import React from 'react'

export default function List({list}) {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>title</th>
                <th>description</th>
            </tr>
        </thead>
        <tbody>
            {list.map(
                item => (
                    <tr>
                        <th>{item.id}</th>
                        <th>{item.title}</th>
                        <th>{item.description}</th>
                    </tr>
                )
            )}
            
        </tbody>
    </table>
  )
}
