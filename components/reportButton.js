import { useContext } from 'react'
import { SpotifyContext } from '../context/context'

const styles = {
  reportButton: `bg-green-500 mr-10 px-3 py-1.5 cursor-pointer hover:scale-95 transition rounded-full`,
}

const ReportButton = ({ setShowReportQuery }) => {
  // const { uploadMusic } = useContext(SpotifyContext)

  const reportClicked = () => {
    console.log(setShowReportQuery)
    setShowReportQuery(true)
  }

  return (
    <div>
      <div onClick={reportClicked} className={styles.reportButton}>
        Email Us
      </div>
    </div>
  )
}

export default ReportButton
