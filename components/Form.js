import React from "react";

export default function Form({ onSubmit }) {
  return (
    <>
      <form
        className='w-3/4 p-4 mx-auto my-auto mt-8 bg-green-300 border rounded-md'
        onSubmit={onSubmit}
      >
        <div className='flex items-center justify-center pt-2 pb-4 text-2xl font-semibold'>
          Create Cookie Stand
        </div>
        <div>
          <div className='flex items-center w-100'>
            <label className='mb-2 text-center'>Location</label>
            <input
              name='locationName'
              id='locationName'
              className='w-full pl-1 ml-2'
            />
          </div>
          <div className='flex items-stretch justify-between'>
            <div className='p-1 rounded-md text-pretty'>
              <label className='block p-1 text-center'>
                Minimum Customers per Hour
              </label>
              <input
                name='minCustomers'
                className='block pl-3 m-1'
                id='minCustomers'
              />
            </div>
            <div className='p-1 rounded-md text-pretty'>
              <label className='block p-1 text-center'>
                Maximum Customers per Hour
              </label>
              <input
                name='maxCustomers'
                className='block pl-4 m-1'
                id='maxCustomers'
              />
            </div>
            <div className='p-1 rounded-md'>
              <label className='block p-1 text-center'>
                Average Cookies Per Sale
              </label>
              <input
                name='avgCookiesPerSale'
                className='block pl-1 m-1'
                id='avgCookiesPerSale'
              />
            </div>
            <button
              type='submit'
              className='block w-1/5 p-2 mt-2 ml-5 font-medium bg-green-500 h-25'
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </>
  );
}