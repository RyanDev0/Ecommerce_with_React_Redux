import React from 'react'

const Sorting = ({ setSort }) => {
  return (
    <div className='bg-black my-10 p-5 rounded-xl flex items-center justify-end'>
      <select onChange={e => setSort(e.target.value)} className='bg-gray-800 text-white p-2 rounded'>
        <option disabled value="">Select</option>
        <option value="inc">Price Ascending</option>
        <option value="dec">Price Descending</option>
      </select>
    </div>  
  )
}

export default Sorting;