import React from 'react'
import { useNavigate } from 'react-router-dom'
import generatePwd from "../../utils/generatePwd"
import Sidebar from '../fragments/sidebar/sidebar'
import slicedText from '../../utils/slicedText'
import Navbar from '../fragments/navbar/navbar'
import Swal from 'sweetalert2'
import axios from 'axios'
import "./admin.css"
import { ScaleLoader } from 'react-spinners'
import swalert from '../../utils/swalert'
import { io } from 'socket.io-client'
const socket = io('https://meh.vixcera.bid', {
  transports: ['websocket', 'polling', 'flashsocket']
});

const Admin = () => {
    // socket.on("sent", (data) => {console.log(data)})
    const navigate = useNavigate()
    const [ data, setData ] = React.useState([])
    const [ loading, setLoading ] = React.useState(false)
    const validWallet = localStorage.getItem('wallet')
    
    const getData = () => {
        setLoading(true)
        const endpoint = "https://api.mehguy.click/api/v1/users"
        axios.get(endpoint).then((response) => setData(response.data.users))
        .catch((error) => { return Promise.reject(error) })
        .finally(() => { setLoading(false) })
    }

    const resetPoint = async () => {
        Swal.fire({
            icon: 'question',
            text: "Are you sure want reset all point user?",
            color : '#eee',
            background : "var(--primary)",
            customClass: { container: 'swalert' },
            showCancelButton : true,
            showCancelButton: true,
            confirmButtonText: 'Reset',
            cancelButtonText: 'Cancel',
            allowOutsideClick : false,
        })
        .then(async (res) => {
            if (res.isConfirmed) {
                try {
                    setLoading(true)
                    const endpoint = "https://api.mehguy.click/api/v1/admin"
                    const response = await axios.patch(endpoint)
                    swalert(response.data.message, 'success', 2000)
                    .then(() => {location.reload(); socket.emit('sent')})
                } catch (error) {
                    if (error || error.response) {
                        return Promise.reject(error)
                    }
                } finally { setLoading(false) }
            }
        })
    }

    React.useEffect(() => { getData(); }, [])

    // React.useEffect(() => {

    //     const currentPwd = localStorage.getItem('pwd')
    //     const current = localStorage.getItem('rDx001114mHgln')
    //     !current && generatePwd("rdxmeh_gilang")
    //     .then((hashed) => {localStorage.setItem('rDx001114mHgln', hashed)}) 

    //     if (currentPwd) {
    //         generatePwd(currentPwd)
    //         .then((hashed) => {
    //             if (hashed == current) return getData();
    //             localStorage.removeItem('pwd')
    //             location.reload()
    //         })
    //     } else {
    //         Swal.fire({
    //             icon : "info",
    //             text : "verify admin",
    //             input: 'password',
    //             color: '#eee',
    //             background : 'var(--primary)',
    //             customClass: { container: 'swalert' },
    //             inputPlaceholder: 'Enter your password',
    //             showCancelButton: true,
    //             confirmButtonText: 'Login',
    //             cancelButtonText: 'Cancel',
    //             allowOutsideClick : false,
    //             preConfirm: (enteredPassword) => {
    //                 const correctPassword = localStorage.getItem('rDx001114mHgln')
    //                 generatePwd(enteredPassword).then((password) => {
    //                     if (password == correctPassword) {
    //                         Swal.fire({
    //                             icon: 'success',
    //                             color: '#eee',
    //                             text : "welcome back, admin!",
    //                             timer : 1500,
    //                             background : 'var(--primary)',
    //                             showConfirmButton: false,
    //                             customClass: { container: 'swalert' },
    //                             allowOutsideClick: false
    //                         }).then(() => {
    //                             localStorage.setItem('pwd', enteredPassword)
    //                             getData()
    //                         })
    //                     } else {
    //                         Swal.fire({
    //                             text: 'Invalid password! Please try again.',
    //                             color: '#eee',
    //                             icon: 'error',
    //                             timer : 1500,
    //                             showConfirmButton : false,
    //                             background : 'var(--primary)',
    //                             customClass: { container: 'swalert' },
    //                         })
    //                         .then(() => { location.reload() })
    //                     }
    //                 })
    //             }
    //         })
    //         .then((res) => {
    //             res.dismiss && navigate('/')
    //         })
    //     }

    // }, [])

    return (
        <>
        <Sidebar/>
        <div className='page'>
            <div className="var-background">
                <img className="blur1" src="/assets/Gradient 1.png" alt="blur" />
                <img className="meteor" src="/assets/Meteor BG - Desktop.png" alt="meteor" />
            </div>
            <div className='page-container'>
                <Navbar/>
                <div className='meh-content'>
                    <div className='admin-leaderboard' style={loading ? {justifyContent: 'center', alignItems: 'center'} : {}}>
                    {(loading) ? <ScaleLoader height={30} color='white'/>
                    :   data.map((data, key) => {
                            return (
                            <div className="top-box-player" style={{display: 'flex', width: '100%', justifyContent: 'space-between', boxSizing : 'border-box', padding: '35px 10px'}} key={key}>
                                <div style={{display: 'flex', gap: '15px', alignItems: 'center', textAlign: 'left'}}>
                                    <div className="top-box-circle">{key + 1}</div>
                                    <div className="top-box-user">
                                        {(slicedText(data.wallet) == validWallet) ? 
                                        <p style={{color: 'var(--yellow)'}}>{slicedText(data.wallet)}</p>
                                        : 
                                        <p>{slicedText(data.wallet)}</p>
                                        }
                                        <p>{data.point}</p>
                                    </div>
                                </div>
                                {
                                    key == 0 ? <img src="/assets/medal.png" width={35}/> :
                                    key == 1 ? <img src="/assets/medal2.png" width={35}/> :
                                    key == 2 ? <img src="/assets/medal3.png" width={35}/> : 
                                    <img src="/assets/badge.png" width={35}/>
                                }
                            </div>
                            )
                        })
                    }
                    </div>
                    <div onClick={() => resetPoint()} className='button-border' style={{width: '50%'}}>Reset Point</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin