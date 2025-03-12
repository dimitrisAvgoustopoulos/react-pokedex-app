import { forwardRef } from "react";
import { createPortal } from "react-dom";

import Header from "./Header";
import Body from "./Body";
import General from "./General";
import Stats from "./Stats";
import Moves from "./Moves";
import Abilities from "./Abilities";

export default forwardRef(function PokeInfoModal({ pokemon },ref) {

  return createPortal(
    <dialog className="backdrop:bg-slate-800 backdrop:opacity-80 rounded-2xl h-screen w-full focus:outline-none lg:w-10/12 xl:w-8/12" ref={ref} 
      onClick={(event) => {(event.target === ref.current) && ref.current.close()} }
    >
      <div className="relative flex flex-col">
        <Header pokemon={pokemon} ref={ref}/>
        <Body>
          <General pokemon={pokemon} />
          <Stats pokemon={pokemon} />
          {pokemon.abilities && <Abilities pokemon={pokemon} />}
          <Moves pokemon={pokemon} />
        </Body>
      </div>
    </dialog>
    ,document.getElementById("modal")
  )
});