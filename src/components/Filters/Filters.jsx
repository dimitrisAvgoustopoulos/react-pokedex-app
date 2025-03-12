import { useState, useRef} from "react";

import NameSearch from "./NameSearch";
import Modal from "./Modal";

export default function Filters({ handleNameSearch, onHandleFilters }) {
    const [limit, setLimit] = useState(500);
    const [offset, setOffset] = useState(0);

    const modal = useRef(); 

    const handleLimitChange = (e) => {
        const value = e.target.value;
        if(value > 500) {
            modal.current.open();
            setLimit(500);
            onHandleFilters(500, 0);
            return;
        }
        setLimit(value);
        onHandleFilters(value, offset);
    };

    const handleOffsetChange = (e) => {
        const value = e.target.value;
        if(value > 850) {
            modal.current.open();
            setOffset(0);
            onHandleFilters(500, 0);
            return;
        }
        setOffset(value);
        onHandleFilters(limit, value);
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
                        value={limit}
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
                        value={offset}
                        max={850}
                        onChange={(event) => handleOffsetChange(event)}
                    />
                </div>
            </form>
            <NameSearch onNameSearch={handleNameSearch} />
            <Modal ref={modal}/>
        </>
        
    );
}