import Header from '../components/header'
import Nav from '../components/nav'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'
import Activity from '../components/activity'
import { useState, useEffect } from 'react'
import UploadModal from '../components/UploadModal'
import useSpotify from '../hooks/useSpotify'
import ReportQuery from '../components/reportmessage'

const HomePage = () => {
    const [showUploadMusic, setShowUploadMusic] = useState(false)
    const [showReportQuery, setShowReportQuery] = useState(false)

    const [title, setTitle] = useState('')
    const [musicUrl, setMusicUrl] = useState('')

    const { newMusic, getSongs } = useSpotify(
        musicUrl,
        title,
        setTitle,
        setMusicUrl,
        setShowUploadMusic,
    )

    const [songs, setSongs] = useState([])
    const fetchJobs = async() => {
        const response = await fetch('http://localhost:4071/block_chain_api/getsong');
        const data = await response.json();
        setSongs(data)
        console.log(data);

    };

    useEffect(() => {
        // getSongs().then(songs => {
        //     setSongs(songs)
        // })
        fetchJobs()
    }, [])

    return ( <
            div className = 'flex' >
            <
            Nav / >
            <
            div className = 'w-full' >
            <
            Header setShowUploadMusic = { setShowUploadMusic, setShowReportQuery }
            /> <
            Playlist songs = { songs }
            /> <
            PlayerControls songs = { songs }
            /> {
            showUploadMusic && ( <
                UploadModal title = { title }
                setTitle = { setTitle }
                setShowUploadMusic = { setShowUploadMusic }
                musicUrl = { musicUrl }
                setMusicUrl = { setMusicUrl }
                newMusic = { newMusic }
                />
            )
        } 

        {
            showReportQuery && ( <
                ReportQuery setShowReportQuery = { setShowReportQuery }
                
                />
            )
        } 

        
        
        
        <
        /div> <
    Activity / >
        <
        /div>
)
}

export default HomePage