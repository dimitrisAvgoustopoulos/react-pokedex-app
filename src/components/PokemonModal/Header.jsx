import { forwardRef } from 'react';

import backarrow from '../../assets/arrow-left.svg';
import typeColors from "../../typeColors.json";

export default forwardRef(function Header({pokemon},ref) {
  
    return(
        <div className="rounded-b-[50px] p-4 h-52 w-full shadow-xl sm:p-8 sm:h-80" style={{ backgroundColor: typeColors[pokemon.types?.[0]?.type.name] }}>
          <div className="absolute top-0 right-0 m-4 z-10">
            <img src={backarrow} onClick={() => ref.current.close()} className="cursor-pointer w-8 sm:w-16"/>
          </div>
          <h1 className="text-4xl text-white font-bold sm:text-7xl">{pokemon.name}</h1>
          <p className="text-2xl text-white mt-1 sm:text-4xl">#{pokemon.id}</p>
        </div>
    )
});
