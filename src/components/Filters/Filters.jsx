import { useState, useRef} from "react";

import NameSearch from "./NameSearch";
import TypeFilter from "./TypeFilter";
import Modal from "./Modal";

export default function Filters({ handleNameSearch, handleTypeFilter, onHandleFilters, keyvalue }) {
    const [filters, setFilter] = useState({
        limit: 500,
        offset: 0,
    });

    const modal = useRef(); 

    const handleLimitChange = (e) => {
        const value = e.target.value;
        if(value > 500 || value < 0 || isNaN(value)) {
            modal.current.open();
            setFilter({...filters, limit: 500});
            onHandleFilters(500, 0);
            return;
        }
        setFilter({...filters, limit: value});
        onHandleFilters(value, filters.offset);
    };

    const handleOffsetChange = (e) => {
        const value = e.target.value;
        if(value > 850 || value < 0 || isNaN(value)) {
            modal.current.open();
            setFilter({...filters, offset: 0});
            onHandleFilters(500, 0);
            return;
        }
        setFilter({...filters, offset: value});
        onHandleFilters(filters.limit, value);
    }; 

    return (
        <>
            <form className="flex justify-center gap-4 text-center my-24 p-4 bg-gray-800 rounded-lg shadow-lg sm:gap-16">
                <div className="flex flex-col gap-2 text-center">
                    <label htmlFor="limit" className="text-white text-lg font-semibold">
                        Displayed Pokemons
                    </label>
                    <input
                        id="limit"
                        className='rounded-full p-2 w-28 mx-auto text-center text-xl font-semibold focus:outline-none'
                        type="number"
                        value={filters.limit}
                        max={500}
                        onChange={(event) => handleLimitChange(event)}
                    />
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <label htmlFor="offset" className="text-white text-lg font-semibold">
                        Poké ID Offset
                    </label>
                    <input
                        id="offset"
                        className='rounded-full p-2 w-28 mx-auto text-center text-xl font-semibold focus:outline-none'
                        type="number"
                        value={filters.offset}
                        max={850}
                        onChange={(event) => handleOffsetChange(event)}
                    />
                </div>
            </form>
            <div key={`filters-${filters.limit}-${filters.offset}`} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <NameSearch onNameSearch={handleNameSearch} />
                <TypeFilter onTypeFilter={handleTypeFilter} />
            </div>
            <Modal ref={modal}/>
        </>
        
    );
}
