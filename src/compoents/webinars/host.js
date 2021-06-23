/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import $ from 'jquery';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Host = () => {

    const iframeRef = useRef(null);
    const [ stateIframeH, setIframeH ] = useState(100);
    useEffect(() => {
        const RWD = () => {
            const $iframe = iframeRef.current;
            const _w = $($iframe).width();
            setIframeH( _w / 1.777 );
        }
        RWD();
        window.addEventListener('resize', RWD);
        return() => window.removeEventListener('resize', RWD);
    },[]);

    return(
        <div className="webinars-row posts-host">
            <div className="center">
                <div className="host-left">
                    <h3>Meet Your Host - Alistair Schultz</h3>
                    <p>With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.</p>
                    <p>As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.</p>
                    <p>At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.</p>
                    <Link to="">See more<i><AiOutlineRight size="20px"/></i></Link>
                </div>
                <div className="host-right">
                    <iframe
                        style= {{height: stateIframeH}}
                        ref={iframeRef}
                        src="https://www.youtube.com/embed/0rp3pP2Xwhs" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}

export default Host;