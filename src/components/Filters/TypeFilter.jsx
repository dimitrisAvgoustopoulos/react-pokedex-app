import { useState } from 'react';
import typeColors from '../../typeColors.json';

export default function TypeFilter({ onTypeFilter }){
    const types = {...typeColors};
    
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        onTypeFilter(event.target.value);
    };
    

    return (
        <div className="text-center mb-24 lg:mb-36 xl:mb-64">
            <select
                className='rounded-full mx-auto p-2 text-center text-xl font-semibold focus:outline-none cursor-pointer text-slate-800'
                value={filter}
                onChange={handleFilterChange}
            >
                <option>
                    Select Type
                </option>
                {Object.keys(types).map((type,index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};
