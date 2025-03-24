import { useRef, forwardRef, useImperativeHandle} from "react"
import {createPortal} from "react-dom";

export default forwardRef( function Modal({},ref) {
    const dialog =useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current.showModal();
        },
        close: () => {
            dialog.current.close();
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-slate-800 backdrop:opacity-80 rounded-2xl bg-slate-900 text-white focus:outline-none sm:w-4/6 lg:w-4/6 xl:w-2/6"
                onClick={(event) => {(event.target === dialog.current) && dialog.current.close()}}
        >
            <div className="text-center p-6"> 
                <h2 className="font-semibold mb-4 text-3xl sm:text-5xl">Invalid Input</h2>
                <p className="text-lg mb-6 sm:text-2xl">Please enter a positive number. The maximum limit for Displayed Pokémons is 500, and the maximum limit for Offset is 850. No text is allowed.</p>
                <button 
                    className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-amber-500 focus:outline-none"
                    onClick={() => dialog.current.close()}
                >
                    Close
                </button>
            </div>
        </dialog>
        ,document.getElementById("modal")
    )

})
