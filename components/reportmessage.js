import style from "../styles/UploadModal.module.css";
import axios from "axios";
import { useState } from "react";

const ReportQuery = ({ setShowReportQuery }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fullName, setFullName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [loading, setLoading] = useState(false);

    const sendQuery = async () => {
        if (!email || !message || !fullName || !userRole) {
            alert("Please fill in all fields.");
            return;
        }
        setLoading(true);
        
        const payload = {
            email,
            message,
            fullName,
            userRole,
        };

        try {
            const response = await axios.post(
                "http://localhost:4071/email_router/send_message",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Message sent successfully:", response.data);
            alert("Message sent successfully.");
            setLoading(false);
            setShowReportQuery(false);
        } catch (error) {
            alert("Error sending message.");
            console.error("Error:", error);
            setLoading(false);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.inputField}>
                <div className={style.inputTitle}>Full Name</div>
                <div className={style.inputContainer}>
                    <input
                        className={style.input}
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.inputField}>
                <div className={style.inputTitle}>Email</div>
                <div className={style.inputContainer}>
                    <input
                        className={style.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.inputField}>
                <div className={style.inputTitle}>User Role</div>
                <div className={style.inputContainer}>
                    <input
                        className={style.input}
                        type="text"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.inputField}>
                <div className={style.inputTitle}>Message</div>
                <div className={style.inputContainer}>
                    <textarea
                        className={style.input}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </div>
            <div className={style.modalButtons}>
                <button
                    onClick={() => setShowReportQuery(false)}
                    className={`${style.button} ${style.cancelButton}`}
                >
                    Cancel
                </button>
                <button
                    onClick={sendQuery}
                    className={`${style.button} ${style.createButton}`}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </div>
        </div>
    );
};

export default ReportQuery;
