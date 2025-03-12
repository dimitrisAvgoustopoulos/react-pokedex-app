export default function Moves({pokemon}){
    return(
        <div className="flex flex-col gap-4 mx-4 my-8 sm:mx-8 sm:mt-16">
            <h2 className="text-2xl font-bold sm:text-4xl sm:mb-6">Moves</h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pokemon.moves?.filter((move) =>
                    move.version_group_details.some(
                            (detail) => detail.move_learn_method.name === "level-up"
                        )
                    )
                    .sort((a, b) => {
                        const levelA = a.version_group_details.find(
                            (detail) => detail.move_learn_method.name === "level-up"
                        ).level_learned_at;
                        const levelB = b.version_group_details.find(
                            (detail) => detail.move_learn_method.name === "level-up"
                        ).level_learned_at;
                        return levelA - levelB;
                    })
                    .map((move) => {
                        const levelDetail = move.version_group_details.find(
                            (detail) => detail.move_learn_method.name === "level-up"
                        );
                        return (
                            <li key={move.move.name} className="flex items-center justify-between p-2 bg-slate-200 rounded-lg sm:p-3">
                                <p className="p-1 text-xs font-bold sm:text-xl">
                                    LEVEL-{levelDetail.level_learned_at}
                                </p>
                                <p className="bg-pink-500 text-white text-center text-xs font-bold p-1 w-8/12 rounded-lg sm:text-xl sm:p-1">
                                    {move.move.name}
                                </p>
                            </li>
                        );
                    })
            }
            </ul>
        </div>
    )
}