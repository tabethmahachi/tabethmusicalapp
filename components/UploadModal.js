import style from "../styles/UploadModal.module.css";
import axios from "axios";
import { useState } from "react";

const UploadModal = ({
    title,
    newMusic,
    setTitle,
    setShowUploadMusic,
}) => {
    const [artistName, setArtistName] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    // Convert file to base64 (if needed for other uses) or keep it binary for direct upload
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'audio/mpeg') {
            setFile(selectedFile);
        } else {
            alert("Please select an MP3 file.");
        }
    };

    const createNewClicked = async () => {
        if (!file) {
            alert("Please upload an MP3 file.");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append("artistFullName", artistName);
        formData.append("songTitle", title);
        formData.append("music", file);
        try {
            const response = await axios.post(
                "http://localhost:4071/block_chain_api/createsong",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Upload successful:", response.data);
            alert("Upload successful.");
            setLoading(false);
            setShowUploadMusic(false);
        } catch (error) {
            alert("Please upload an MP3 file.");
            console.error("Error uploading song:", error);
            setLoading(false);
        }
    };
    return (
        <div className={style.wrapper}>
            <div className={style.inputField}>
                <div className={style.inputTitle}>Title</div>
                <div className={style.inputContainer}>
                    <input
                        className={style.input}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.inputField}>
                <div className={style.inputTitle}>Artist Name</div>
                <div className={style.inputContainer}>
                    <input
                        className={style.input}
                        type="text"
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.inputField}>
                <div className={style.inputTitle}>Upload MP3</div>
                <div className={style.inputContainer}>
                    <input
                        type="file"
                        accept="audio/mpeg"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <div className={style.modalButtons}>
                <button
                    onClick={() => setShowUploadMusic(false)}
                    className={`${style.button} ${style.cancelButton}`}
                >
                    Cancel
                </button>
                <button
                    onClick={createNewClicked}
                    className={`${style.button} ${style.createButton}`}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Create New"}
                </button>
            </div>
        </div>
    );
};

export default UploadModal;
