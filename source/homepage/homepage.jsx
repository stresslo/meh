import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../fragments/navbar/navbar"
import Sidebar from "../fragments/sidebar/sidebar";
import swalert from "../../utils/swalert";
import Chart from "../fragments/chart/chart";
import "./homepage.css"

const Homepage = () => {

    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.onresize = () => setWindowWidth(window.innerWidth);

    const [boxStyle, setBoxStyle] = useState('box1')

    return (
        <>
        <Sidebar/>
        <div className="homepage">
            <div className="top-page">
                <Navbar/>
                <div className="var-background">
                    <img className="meteor" src="/assets/Meteor BG - Desktop.png" alt="meteor" />
                    <img className="blur1" src="/assets/Gradient 1.png" alt="blur" />
                </div>
                <div className="bottom-container">
                    <h1 className="gradient1">Meh Guy On Radix</h1>
                    <h3>Driven by his passion for spreading positifity and embrading Meh</h3>
                    <img className="meh5-mobile" src="/assets/variasi/Meh5.png" width={300} style={{marginTop: '40px'}}></img>
                    <div className="button-container">
                        <div className="button-gradient" onClick={() => navigate('/play')}>Play Meh!</div>
                        <div className="button-border">LETS FIND OUT MEH <img src="/assets/chevron-down.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="mid-page">
                <div className="mid-card">
                    <img className="meh5" src="/assets/variasi/Meh5.png" alt="" />
                    <div className="mid-container-img">
                        <img className="light1" src="/assets/Light 1.png" alt="" />
                        <img className="light2" src="/assets/Light 2.png" alt="" />
                        <img className="meh1" src="/assets/variasi/Meh1.png" alt="" />
                    </div>
                    <div className="mid-container-text">
                        <h1 className="gradient1">A piece of the story <br /> about MEH</h1>
                        <h3 style={{marginTop: '15px'}}>In the vest digital realm of radix, there existed the community unike any other. This community, known as the Mehsters, embraced a philosophy of simplicity and contentment in the face of complex and tumultuous world of cryptocurrency.</h3>
                        <h3>At the hearts of this community stood Meh Guy, a Humble but spirited individual who embodied the Meh mindset. Meh Guy believed that cyrpto didn't have to be all about moonshots and Lambos - it could also be about finding joy in the everyday, the Meh moments that often go unnoticed.</h3>
                        <h3>Driven by this belief, Meh Guy set out on a quest to spread a Meh philosophy far and wide across Radix. Along the way, he encountered fellow Mehsters who shared his vision and joined him in his mission.</h3>
                    </div>
                </div>
            </div>
            <div className="IT-page">
                <img className="IT-gd1" src="/assets/Gradient 1.png" alt="" />
                <img className="IT-gd2" src="/assets/Gradient 2.png" alt="" />
                <div className="IT-top">
                    <h1 className="gradient1">Information Token</h1>
                    <h3>Details of MEH Tokenomic</h3>
                </div>
                <div className="IT-mid">
                    <div className="IT-container">
                        <div>
                            <h1>Name</h1>
                            <h3>Meh Guy</h3>
                            <div/>
                        </div>
                        <div>
                            <h1>Symbol</h1>
                            <h3>MEH</h3>
                            <div/>
                        </div>
                        <div>
                            <h1>Resource ID</h1>
                            <h3>rdx1t5rwvw6sylv69kj29dpgd9f5a352kxgc7gs08t0vahp03ztdxuwfn4</h3>
                            <div/>
                        </div>
                    </div>
                    <div className="IT-container">
                        <img src="/assets/circle.png" className="circle" alt="" />
                        {/* <Chart/> */}
                    </div>
                    <div className="IT-container">
                        <div>
                            <h1>Supply</h1>
                            <h3>18</h3>
                            <div/>
                        </div>
                        <div>
                            <h1>Circulating Supply</h1>
                            <h3>100%</h3>
                            <div/>
                        </div>
                        <div>
                            <h1>Network</h1>
                            <h3>Radix DLT</h3>
                            <div/>
                        </div>
                        <div>
                            <h1>Utility</h1>
                            <h3>MEH</h3>
                            <div/>
                        </div>
                    </div>
                </div>
                <div className="IT-bottom">
                    <div onClick={() => setBoxStyle('box1')} className="IT-bottom-card">
                        {(boxStyle == 'box1') && 
                        <>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        </>
                        }
                        <h1 className="gradient1">90%</h1>
                        <h3>MEH Liquidity</h3>
                    </div>
                    <div onClick={() => setBoxStyle('box2')} className="IT-bottom-card">
                        {(boxStyle == 'box2') && 
                        <>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        </>
                        }
                        <h1 className="gradient1">5%</h1>
                        <h3>MEH Airdrop</h3>
                    </div>
                    <div onClick={() => setBoxStyle('box3')} className="IT-bottom-card">
                        {(boxStyle == 'box3') && 
                        <>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        <img style={{position: 'absolute', bottom: '-70px', left: '0', width: '100%', height:'170px'}} src="/assets/Gradient 2.png"/>
                        </>
                        }
                        <h1 className="gradient1">5%</h1>
                        <h3>MEH Creator</h3>
                    </div>
                </div>
            </div>
            <div className="overview-page">
                <div className="overview-card">
                    <img className="meh2left" src="/assets/variasi/Meh2.png" alt="" />
                    <img className="meh2right" src="/assets/variasi/Meh2.png" alt="" />
                    <img className="light1" src="/assets/Light 1.png" alt="" style={{top: '0', left : '0'}}/>
                    <img className="light1" src="/assets/Light 1.png" alt="" style={{top: '0', right : '0', left : 'unset'}}/>
                    {windowWidth <= 470 && <img className="IT-gd1" src="/assets/Gradient 1.png" alt="" style={{top: 'unset', bottom: '-130px', left: '0', zIndex: '1', width: '100%', scale : '1.5'}}/>}
                    <h1 className="gradient1">Overview of MEH</h1>
                    <h3 style={{marginTop: '10px'}}>Meh Guy isn't your typical crypto influencer. He's not interested in Lambos or moonshots. Instead, he's all about embracing the Meh philosophy - finding joy in the everyday moments, even in the midst of the volatile world of cryptocurrency.</h3>
                    <h3>Born and raised in the Radix Community, Meh Guy embodies simplicity, authenticity, and contentment. He believes that crypto doesn't have to be complicated or overwhelming; it can be as sample as Enjoying a Meh moment with friends.</h3>
                    <h3>Driven by his passion for spreading positifity and embracing Meh, Meh Guy has become a beloved figure in the Radix Community. With his laid-back attitude and witty sense of humor, he's captured the hearts of Mehsters everywhere.</h3>
                </div>
                <div className="global-card" style={windowWidth <= 660 ? {marginTop: '40px', padding: '50px 0', display: 'flex', alignItems: 'center', flexDirection: 'column'} : {marginTop: '40px', padding: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/Meteor BG - Desktop.png" alt="" style={{width: '100%',height: '100%',position: 'absolute', objectFit: 'cover'}}/>
                    <div style={windowWidth <= 660 ? {textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', gap: '30px'} : {width: '50%', display: 'flex', flexDirection: 'column', gap: '30px', paddingLeft: '50px', boxSizing: 'border-box'}}>
                        <h1 className="gradient1">MEH Bot Tracker</h1>
                        <h3 style={{color: '#ccc'}}>Track Everything in Radix Ecosystem with MEH Bot Tracker, and become MEH.</h3>
                        <div onClick={(() => location.href = 'https://t.me/mehtracker_bot')} style={windowWidth <= 660 ? {width: '50%', margin: 'auto'} : {  }} className="button-border">Access MEH BOT</div>
                    </div>
                    <div style={windowWidth <= 660 ? {width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'} : {width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                        {windowWidth <= 660 ? 
                            <img src="/assets/variasi/Meh3.png" style={{width: '70%', objectFit: 'cover', marginTop: '30px'}} alt="" />
                        : 
                            <img src="/assets/variasi/Meh3.png" style={{width: '70%', objectFit: 'cover', transform: 'rotateY(180deg)'}} alt="" />
                        }
                    </div>
                </div>
                <div className="global-card" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="/assets/Meteor BG - Desktop.png" alt="" style={{width: '100%',height: '100%',position: 'absolute', objectFit: 'cover'}}/>
                    {(windowWidth <= 470) && <img src="/assets/Gradient 1.png" alt="" style={{width: '100%',height: '100%',position: 'absolute', objectFit: 'cover', scale: '2'}}/>}
                    <div style={{padding: '0 20px'}}>
                        <h1 className="gradient1" style={{textAlign: 'center'}}>$MEH Market</h1>
                        <div style={{zIndex : "10", position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '30px', marginTop: '20px'}}>
                            <img style={{cursor: 'pointer'}} width={100} onClick={() =>  location.href = 'https://defiplaza.net'} src="/assets/Logo Defiplaza.png" alt="" />
                            <img style={{cursor: 'pointer'}} width={100} onClick={() => location.href = 'https://ociswap.com/resource_rdx1t5rwvw6sylv69kj29dpgd9f5a352kxgc7gs08t0vahp03ztdxuwfn4/'} src="/assets/Logo Ociswap.png" alt="" />
                            <img style={{cursor: 'pointer'}} width={50} onClick={() => location.href = 'https://swap.dogecube.io/swap'} src="/assets/Logo Dogecube.png" alt="" />
                        </div>
                        <div className="line" style={{margin: '70px 0'}}/>
                        <h1 className="gradient1" style={{textAlign: 'center'}}>Partnerships connected with us</h1>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '30px', marginTop: '20px'}}>
                            {/* <img width={60} src="/assets/Logo Fiatfighters.png" alt="" /> */}
                            <img style={{cursor: 'pointer', zIndex: 10}} onClick={() => location.href = 'https://radket.shop'} width={50} src="/assets/Logo Radketshop.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="global-card" style={windowWidth <= 660 ? {marginTop: '40px', padding: '50px 0', display: 'flex', alignItems: 'center', flexDirection: 'column'} : {marginTop: '40px', padding: '50px 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="/assets/Meteor BG - Desktop.png" alt="" style={{width: '100%',height: '100%',position: 'absolute', objectFit: 'cover'}}/>
                    <div style={windowWidth <= 660 ? {textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', gap: '30px'} : {width: '50%', display: 'flex', flexDirection: 'column', gap: '30px', paddingLeft: '50px', boxSizing: 'border-box'}}>
                        <h1 className="gradient1">Utility of MEH</h1>
                        <h3 style={{color: '#ccc'}}>Hold MEH possibillity getting benefits, Meh will have different benefits at each moment. Because MEH, will look for Meh friends who can give our community a little happiness.</h3>
                    </div>
                    <div style={windowWidth <= 660 ? {width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'} : {width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                        {windowWidth <= 660 ? 
                            <img src="/assets/Utility Assets - Mobile.png" style={{width: '85%', objectFit: 'cover', marginTop: '30px'}} alt="" />
                        : 
                            <img src="/assets/Utility Assets - Desktop.png" style={{width: '80%', objectFit: 'cover'}} alt="" />
                        }
                    </div>
                </div>
                <div className="banner-card" style={windowWidth <= 820 ? {flexDirection: 'column', height: 'max-content', padding: '30px 0', marginTop: '0'} : {flexDirection: 'row', marginTop: '100px'}}>
                    <div style={{width: '37%'}}><img src="/assets/MEH POP - Desktop.png" style={windowWidth <= 820 ? {position: 'unset', flexBasis: '3', width: '100%', scale: '1.2'} : { width: '37%', position: 'absolute', bottom: '0', left: '-15px'}} alt="" /></div>
                    <div style={windowWidth <= 820 ? { marginTop: '10px', textAlign: 'center', gap: '10px', display: 'flex', flexDirection: 'column', fontFamily: 'var(--dmsans)' } : {display: 'flex', flexDirection: 'column', gap: '15px', fontFamily: 'var(--dmsans)'}}>
                        <h1 className="gradient1">MEH POP</h1>
                        <h3 style={{color: '#ccc', fontSize: '0.95rem'}}>Play MEH POP to earn limited MEH tokens.</h3>
                    </div>
                    <div style={windowWidth <= 820 ? {marginTop: '30px'} : {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '250px'}}>
                        <div className="button-gradient" onClick={() => navigate('/play')}>PLAY MEH POP!</div>
                    </div>
                </div>
                <div className="line" style={{border: '1px solid #ccc', background: 'unset', marginTop: '100px'}}/>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <img src="/assets/Logo.png" width={150} alt="" />
                        {(windowWidth >= 640) &&
                        <>
                        <div style={{width: '2px', height: '40px', backgroundColor: '#ccc'}}></div>
                        <h3 style={{fontFamily: 'var(--dmsans)', fontSize: '0.8rem'}}>© 2024 MehGuy. All rigths reserved.</h3>
                        </> 
                        }
                    </div>
                    <div style={{display: 'flex', gap: '20px', justifyContent:'center', alignItems: 'center'}}>
                        <img onClick={() => location.href = 'https://t.me/mehguyxrd'} src="/assets/Tele Icon.png" alt="" style={{cursor: 'pointer'}}/>
                        <img onClick={() => location.href = 'https://x.com/mehguyxrd'} src="/assets/X Icon.png" alt="" style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                {(windowWidth <= 640) && <h3 style={{fontFamily: 'var(--dmsans)', textAlign: 'center', marginTop: '35px', fontSize: '0.8rem'}}>© 2024 MehGuy. All rigths reserved.</h3>}
            </div>
        </div>
        </>
    )
}

export default Homepage