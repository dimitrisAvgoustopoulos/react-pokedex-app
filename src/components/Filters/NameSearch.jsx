import { useState } from 'react';

export default function NameSearch({ onNameSearch }){
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        onNameSearch(event.target.value);
    };
    

    return (
        <div className="text-center my-24 lg:mb-36 xl:mb-64">
            <input className='rounded-full w-2/3 mx-auto p-2 text-center text-xl font-semibold focus:outline-none sm:w-2/6 xl:w-1/6'
                type="text"
                placeholder="Search Pokémon"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
};
