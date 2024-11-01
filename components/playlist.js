import { useEffect, useState } from 'react'
import TableRow from './table/tableRow'

const Playlist = ({ songs }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };



    const filteredSongs = songs.slice().filter(song =>
        song.artistFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return ( <
        div className = { styles.tableWrapper } >
        <
        input type = "text"
        id = "simple-search"
        className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder = "Search song title..."
        value = { searchTerm }
        onChange = { handleSearchChange }
        required /
        >
        <
        table className = { styles.table } >
        <
        tbody className = { styles.tableHeader } >
        <
        tr >
        <
        th className = 'pb-3' > # < /th> <
        th className = 'pb-3' > TITLE < /th> <
        th className = 'pb-3' > PLAYS < /th> <
        th className = 'pb-3' >
        <
        img alt = ''
        src = 'assets/time.svg' / >
        <
        /th> < /
        tr > <
        /tbody> <
        tbody className = 'mb-6 block' > < /tbody>

        {
            filteredSongs.map(song => {
                return <TableRow key = { song._id }
                props = { song }
                />
            })
        } <
        /table> < /
        div >
    )
}

export default Playlist

const styles = {
    table: `w-full text-left`,
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
}