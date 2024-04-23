import { useEffect, useRef, useState } from "react";
import Navbar from "../fragments/navbar/navbar"
import Sidebar from "../fragments/sidebar/sidebar"
import slicedText from "../../utils/slicedText";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import swalert from "../../utils/swalert"
import axios from "axios";
import "./mehpop.css"

const Mehpop = () => {

    const navigate = useNavigate()
    const inputref = useRef(null)
    const endpoint = "https://api.mehguy.click/api/v1/users"
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.onresize = () => setWindowWidth(window.innerWidth);

    const audio = useRef(new Audio())
    const [ data, setData ] = useState([])
    const [ time, setTime ] = useState(0)
    const [ name, setName ] = useState('')
    const [ wallet, setWallet ] = useState('')
    const [ loading, setLoading ] = useState('')
    const [ validWallet, setValidWallet ] = useState(localStorage.getItem('wallet') || '')
    
    const [ soundOn, setSoundOn ] = useState(false)
    const [ update, setUpdate ] = useState(false)
    const [ clicked, setClicked ] = useState(false)
    const [ lastTime, setLastTime ] = useState(parseInt(localStorage.getItem('clvlsTm')) || 0)
    const [ lastPoints, setLastPoints ] = useState(parseInt(localStorage.getItem('clvlsPnt')) || 0)
    const [ currentPoints, setCurrentPoints ] = useState(parseInt(localStorage.getItem('clvcrnPnt')) || 0)

    const [ points, setPoints ] = useState(localStorage.getItem('clvrsrlibp') || 0)
    const [ fixPoints, setFixPoints] = useState(parseInt(localStorage.getItem('clvfxPnt')) || 0)

    const getData = async () => {
        try {
            const response = await axios.get(endpoint)
            setData(response.data.users)
            const index = response.data.users.findIndex((data) => data.wallet == validWallet)
            if (response.data.users[index].point == 0) {
                setCurrentPoints(response.data.users[index].point)
                setLastPoints(response.data.users[index].point)
            }
        } catch (error) {
            return false;
        }
    }

    const handleSend = async () => {
        try {
            if (currentPoints > lastPoints && validWallet) {
                // const greater = currentPoints >= lastPoints
                // setLoading(true)
                const updated = currentPoints - lastPoints
                const realPoint = points ? parseInt(points.split(' ')[1]) + updated : updated
                const response = await axios.patch(endpoint, { wallet: validWallet, point: currentPoints })
                setLastTime(new Date().getTime())
                setLastPoints(currentPoints >= lastPoints ? currentPoints : lastPoints)
                // setPoints(`clv ${realPoint} ${new Date().getTimezoneOffset().toString().split('').join('')}`)
                // setCurrentPoints(0)
                // setLastPoints(0)
                setUpdate(true)
                // setFixPoints(currentPoints)
                // localStorage.setItem('clvlsPnt', currentPoints >= lastPoints ? currentPoints : lastPoints)
                // localStorage.setItem('clvfxPnt', currentPoints >= fixPoints ? currentPoints : fixPoints)
                // console.log(response)
            } else {
                getData()
                validWallet ? setLastTime(new Date().getTime()) : setLastTime(0)
            }
        } catch (error) {
            if (error) return false;
        } finally {
            // setLoading(false)
        }
    }
    
    const sendPoints = async () => {
        if (lastTime) {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - lastTime;
            const remainingTime = 1000 * 15 - elapsedTime;
            if (remainingTime <= 0) return handleSend()
            // else {
            //     setTimeout(() => {
            //         // kirim points ke backend
            //         handleSend()
            //     }, remainingTime)
            // }
        } 
        else {
            handleSend()
        }
    }
    
    const pushClick = () => {
        setCurrentPoints(currentPoints + 1);
        setClicked(true)
        setSoundOn(true)
        
        // const audio = document.getElementById('audio')
        // console.log(audio.currentTime)
        // const audio = new Audio('/assets/ba.mp3');
        // audio.src = '/assets/ba.mp3'
        // audio.load()
        // audio.current.play()
    }
    
    const handleInput = async () => {
        if (wallet.length <= 2) return false;
        try {
            setLoading(true)
            await axios.post(endpoint, { wallet: wallet, point: 0})
            setValidWallet(wallet)
            setLastTime(new Date().getTime())
            localStorage.setItem("wallet", wallet)
            localStorage.setItem('clvlsTm', new Date().getTime())
        } catch (error) {
            if (error || error.response) {
                return false;
            }
        } finally {
            setLoading(false)
        }
    }
    
    // window.onbeforeunload = () => { setClicked(false) }
    
    useEffect(() => { update && getData(); setUpdate(false); }, [update])
    useEffect(() => { getData(); sendPoints(); setInterval(() => { setClicked(false) }, 300) }, [])

    useEffect(() => { localStorage.setItem('clvrsrlibp', points) }, [points])
    useEffect(() => { localStorage.setItem('clvlsPnt', lastPoints) }, [lastPoints])
    useEffect(() => { localStorage.setItem('clvcrnPnt', currentPoints);}, [currentPoints])
    useEffect(() => { lastTime && localStorage.setItem('clvlsTm', lastTime) }, [lastTime])

    // useEffect(() => { localStorage.setItem('clvrsrlibp', points)}, [points])
    // useEffect(() => { localStorage.setItem('clvfxPnt', fixPoints)}, [fixPoints])

    
    useEffect(() => {
        if (clicked) { 
            audio.current.src = '/assets/bya.mp3'
            audio.current.currentTime = 0.25
            audio.current.load()
            audio.current.play()
            // setSoundOn(false)
        }
    }, [clicked])

    // useEffect(() => { 
    //     const currentTime = new Date().getTime();
    //     const elapsedTime = currentTime - lastTime;
    //     const remainingTime = 10000 - elapsedTime;
    //     setTimeout(() => { sendPoints() }, remainingTime)
    //  }, [lastTime])
    
    // useEffect(() => { !name && setCurrentPoints(0) }, [name])
    // useEffect(() => {
        //     let intervalId;
        //     if (clicked && time > 0) {
            //         intervalId = setInterval(() => {
                //             setTime(prevTime => prevTime - 10);
                //         }, 10);
                //     }
                
                //     return () => { clearInterval(intervalId);};
                // }, [clicked, time]);
                // useEffect(() => { time == 0 && setClicked(false) }, [time]);
                

    const handleBoard = () => {
        const topBox = document.getElementById('top-box-player')
        const board = document.getElementById('leaderboard')
        const arrow = document.getElementById('arrow')
        topBox.classList.toggle('show')
        if (topBox.classList.contains('show')) {
            arrow.style.transform = 'rotateX(180deg)'
            board.style.gap = '30px'
        } else {
            arrow.style.transform = 'rotateX(0deg)'
            board.style.gap = '0'
        }
    }

    const handleBoardMobile = () => {
        const boardMobile = document.querySelector('.top-box-player-mobile')
        const page = document.querySelector('.page')
        boardMobile.classList.contains('show') ? boardMobile.classList.remove('show') : boardMobile.classList.add('show')
        page.classList.contains('blur') ? page.classList.remove('blur') : page.classList.add('blur')
    }


    // -------- REMAINING TIME --------

    const Remaining = ({ startTime }) => {
        const [timeLeft, setTimeLeft] = useState(startTime);

        useEffect(() => {
            if (startTime) {
                const elapsedTime = new Date().getTime() - startTime;
                setTimeLeft(Math.max(15 * 1000 - elapsedTime, 0)); // Menghitung waktu sisa 15 detik
            }
        }, [startTime]);
    
        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(prevTimeLeft => Math.max(prevTimeLeft - 1000, 0)); // Mengurangi waktu sisa setiap detik
            }, 1000);
    
            return () => clearInterval(timer); // Membersihkan interval saat komponen unmount
        }, []);
    
        useEffect(() => {
            if (timeLeft === 0) {
                // Ketika waktu habis, lakukan apa yang diperlukan di sini
                sendPoints()
            }
        }, [timeLeft]);
    
        const formatTime = (timeInMilliseconds) => {
            const totalSeconds = Math.ceil(timeInMilliseconds / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    
        return ( 
            <p style={{fontFamily: 'var(--dmsans)', textAlign: 'center', fontSize: '1rem'}}>Remaining time : {formatTime(timeLeft)}</p>
        );
    }

    return (
        <>
        <Sidebar/>
        <audio style={{display: 'none'}} ref={audio} preload="auto" id="audio"><source src="/assets/ba.mp3" type="audio/mpeg"/></audio>
        <div className="page" style={{paddingBottom: '0'}}>
            <div className="var-background">
                <img className="blur1" src="/assets/Gradient 1.png" alt="blur" />
                <img className="meteor" src="/assets/Meteor BG - Desktop.png" alt="meteor" />
            </div>
            <div className="page-container">
                <Navbar/>
                <div className="meh-content">
                    <div className="meh-user">
                        {(loading) ? 
                        <ScaleLoader style={{marginLeft: '10px'}} height={20} color="white"/>
                        :
                        <form onSubmit={(e) => {e.preventDefault(); handleInput()}} style={{marginLeft: '10px', textAlign: 'left', position: 'relative'}}>
                            <div className="text3" style={{fontSize: '0.8rem', color: '#aaa'}}>{validWallet ? "Your Wallet : " : "Wallet"}</div>
                            {validWallet  && <input className="meh-input-name" type="text" value={slicedText(validWallet)} readOnly/>}
                            {/* {validWallet && <div className="fa-solid fa-circle-xmark fa-md" style={{translate : '-5px 0'}}></div>} */}
                            {!validWallet && <input ref={inputref} className="meh-input-name" type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="Input Wallet"/>}
                            {!validWallet && <img src="/assets/play-circle.png" onClick={() => handleInput()} style={{position: 'absolute', right: '0', bottom: '10px', cursor: 'pointer'}} alt="" />}
                        </form>
                        }
                        {validWallet ? 
                        // <form onSubmit={(e) => {e.preventDefault(); handleInput()}} style={{marginLeft: '10px', textAlign: 'left', position: 'relative'}}>
                        //     <div className="text3" style={{fontSize: '0.8rem', color: '#aaa'}}>Points :</div>
                        //     <input className="meh-input-name" type="text" value={points ? points.split(' ')[1] : '0'} readOnly/>
                        // </form>
                        // <Remaining startTime={lastTime}/>
                        <></>
                        :
                        <div onClick={() => inputref.current.focus()} className="button-border">
                            {windowWidth <= 560 ? <img src="/assets/wallet-01.png"/> : 'CONNECT WALLET'}
                        </div>
                        }
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <div className="text1">Your Score {name ? `: ${name}` : ''}</div>
                        <div className="text1" style={{fontSize: '3.5rem', fontWeight: 'bold'}}>{currentPoints}</div>
                        <img 
                            id={clicked ? "open" : "close"} 
                            src={clicked ? "/assets/openclose/open.png" : "/assets/openclose/close.png"} 
                            width={400} 
                            alt="" 
                        />
                        <div className="button-gradient" onClick={() => pushClick()} style={validWallet ? {width: '120px', height: '45px', zIndex: '10', margin: 'auto', marginTop: '30px'} : { display: 'none' }}>POP MEH!</div>
                    </div>
                    {lastTime != 0 && <Remaining startTime={lastTime}/>}
                    <div onClick={() => windowWidth <= 470 ? handleBoardMobile() : handleBoard()} id="leaderboard" className="leaderboard">
                        <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                <img src="/assets/award-02.png" alt="" width={30} />
                                <div className="text3" style={{color: 'var(--blue)'}}>Leaderboard</div>
                                <div className="text3">{'(Top 10)'}</div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {(windowWidth <= 470) ?
                                <div className="fa-solid fa-arrow-up fa-lg" style={{transform: 'rotate(45deg)'}}/>
                                : 
                                <img style={{cursor: 'pointer'}} id="arrow" src="/assets/chevron-down.png" width={27} alt="" />
                                }
                            </div>
                        </div>
                            <div style={{position: 'relative', width: '100%'}} id="top-box-player">
                                {(data.map((data, key) => {
                                    return (
                                    <div className="top-box-player" style={{width: '100%', boxSizing : 'border-box', justifyContent: 'space-between', height: 'max-content'}} key={key}>
                                        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
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
                                }))}
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="top-box-player-mobile">
            <div className="board-mobile-content">
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <img src="/assets/award-02.png" alt="" width={30} />
                        <div className="text3" style={{color: 'var(--blue)'}}>Leaderboard</div>
                        <div className="text3">{'(Top 10)'}</div>
                    </div>
                    <div className="fa-solid fa-close fa-xl" onClick={() => handleBoardMobile()}/>
                </div>
                <div style={{ overflow: 'hidden scroll'}}>
                    <div id="top-box-player-mobile" style={{boxSizing: 'border-box'}}>
                        {(data.map((data, key) => {
                            return (
                            <div className="top-box-player" style={{display: 'flex', width: '100%', justifyContent: 'space-between', boxSizing : 'border-box', padding: '35px 10px'}} key={key}>
                                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
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
                        }))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Mehpop