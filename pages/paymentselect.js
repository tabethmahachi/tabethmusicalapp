import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Payment } from '../components/payment'

const Login = () => {
    const wallet = useWallet()

    /** show payment UI if wallet is connected */
    if (wallet.connected) return <Payment / >

        return ( <
            div className = { styles.loginPage } >
            <
            p className = { styles.text } > To access the music you should a have Solana Account < /p>                    <WalletMultiButton className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200" / >
            <
            /div>
        )
}

export default Login

const styles = {
    loginPage: `w-screen h-screen bg-white flex justify-center flex-col items-center`,
    text: `text-4xl text-black mb-10`,
}