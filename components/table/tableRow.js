import { useContext } from 'react';
import { SpotifyContext } from '../../context/context';

const TableRow = ({ props }) => {
    const { playOnSelect } = useContext(SpotifyContext);

    return ( <
        tr onClick = {
            () => playOnSelect(props)
        } >
        <
        th className = { styles.th } > { props.index } < /th> <
        th className = { styles.th } >
        <
        div >
        <
        p className = "font-bold" > { props.songTitle } < /p> <
        p className = "opacity-50" > { props.artistFullName } < /p> < /
        div > <
        /th> <
        th className = { styles.th } > { props.plays } < /th> <
        th className = { styles.th } > { props.songLength } < /th> < /
        tr >
    );
};

export default TableRow;

const styles = {
    th: `pb-5 hover:opacity-50 cursor-pointer`,
};