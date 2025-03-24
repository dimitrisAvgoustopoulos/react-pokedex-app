export default function Loader({className}) {
    return(
        <div className={`flex justify-center ${className}`}>
            <div className={`w-14 h-14 border-8  border-amber-500 border-t-transparent rounded-full animate-spin`}></div>
        </div>
    )
}