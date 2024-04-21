import { useEffect, useRef, useState } from "react";
import Navbar from "../fragments/navbar/navbar"
import Sidebar from "../fragments/sidebar/sidebar"
import sampleData from "../../utils/sampleData"
import swalert from "../../utils/swalert"
import axios from "axios";
import "./mehpop.css"

const Mehpop = () => {

    const inputref = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.onresize = () => setWindowWidth(window.innerWidth);

    const [ data, setData ] = useState([])
    const [ time, setTime ] = useState(0)
    const [ name, setName ] = useState('')
    const [ wallet, setWallet ] = useState('')
    const [ validWallet, setValidWallet ] = useState(localStorage.getItem('wallet') || '')
    
    const [ clicked, setClicked ] = useState(false)
    const [ lastTime, setLastTime ] = useState(localStorage.getItem('lastTime') || null)
    const [ lastPoints, setLastPoints ] = useState(localStorage.getItem('lastPoints') || 0)
    const [ currentPoints, setCurrentPoints ] = useState(localStorage.getItem('currentPoints') || 0)

    const updatePoints = async () => {
        try {
            const response = await axios.patch("https://api.mehguy.click/api/v1/users")
        } catch (error) {
            if (error && error.response) return false;
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get("https://api.mehguy.click/api/v1/users")
            setData(response.data.users)
        } catch (error) {
            return false
        }
    }

    const sendPoints = async () => {
        if (lastTime) {
            const currentTime = new Date();
            const elapsedTime = currentTime - lastTime;
            const remainingTime = 3600000 - elapsedTime;
            if (remainingTime <= 0) {
                // kirim points ke backend
                handlePoints();
            } else {
                setTimeout(() => {
                    // kirim points ke backend
                    handlePoints()
                }, remainingTime)
            }
        } else {
            // kirim points ke backend
            handlePoints()
        }
    }


    const handlePoints = () => {
        localStorage.setItem('lastTime', new Date())
        localStorage.setItem('lastPoints', currentPoints)
    }
    
    const pushClick = () => {
        setCurrentPoints(currentPoints + 1);
        setClicked(true)
    }
    
    const handleInput = async () => {
        if (wallet.length <= 3) return false;
        setValidWallet(wallet)
        localStorage.setItem("wallet", wallet)
    }
    
    
    useEffect(() => { setInterval(() => { setClicked(false) }, 500) }, [])
    useEffect(() => { localStorage.setItem('currentPoints', currentPoints); getData(); }, [currentPoints])
    
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

    return (
        <>
        <Sidebar/>
        <div className="page" style={{paddingBottom: '0'}}>
            <div className="var-background">
                <img className="blur1" src="/assets/Gradient 1.png" alt="blur" />
                <img className="meteor" src="/assets/Meteor BG - Desktop.png" alt="meteor" />
            </div>
            <div className="page-container">
                <Navbar/>
                <div className="meh-content">
                    <div className="meh-user">
                        <form onSubmit={(e) => {e.preventDefault(); handleInput()}} style={{marginLeft: '10px', textAlign: 'left', position: 'relative'}}>
                            <div className="text3" style={{fontSize: '0.8rem', color: '#aaa'}}>{validWallet ? "Your Wallet : " : "Wallet"}</div>
                            {validWallet  && <input ref={inputref} className="meh-input-name" type="text" value={validWallet} readOnly/>}
                            {!validWallet && <input ref={inputref} className="meh-input-name" type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="Input Wallet"/>}
                            {!validWallet && <img src="/assets/play-circle.png" style={{position: 'absolute', right: '0', bottom: '10px', cursor: 'pointer'}} alt="" />}
                        </form>
                        <div onClick={() => inputref.current.focus()} className="button-border">
                            {windowWidth <= 560 ? <img src="/assets/wallet-01.png"/> : 'CONNECT WALLET'}
                        </div>
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
                                                <p>{data.wallet}</p>
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
                                        <p>{data.wallet}</p>
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