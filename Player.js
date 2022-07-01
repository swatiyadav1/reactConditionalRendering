import react from "react";


const Player=({allPlayer,pname,position,removePlayer}) => {
    const handleRemove=() => {
        const filteredPlayers = allPlayer.filter((player) => player.pname !== pname);
        removePlayer(filteredPlayers);
    };

    return (
        <span onClick={handleRemove}>
            {pname} ({position})

            </span>
    );
};

export default Player;