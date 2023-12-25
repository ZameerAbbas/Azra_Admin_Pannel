
import './Progressbar.css'
import React, { useState, useEffect } from 'react';

const Progressbar = () => {
    const [progress, setProgress] = useState(0);
    const [progresstwo, setProgresstwo] = useState(0);
    const [progressthree, setProgressthree] = useState(0);
    const [progressfour, setProgressfour] = useState(0);
    const [progressfive, setProgressfive] = useState(0);

    useEffect(() => {
        // Example: Update progress to 50% after 2 seconds
        const timer = setTimeout(() => {
            setProgress(50);
        }, 2000);
        const timertwo = setTimeout(() => {
            setProgresstwo(35);
        }, 2000);

        const timerthree = setTimeout(() => {
            setProgressthree(20);
        }, 2000);

        const timerfour = setTimeout(() => {
            setProgressfour(60);
        }, 2000);

        const timerfive = setTimeout(() => {
            setProgressfive(80);
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
        return () => clearTimeout(timertwo);
        return () => clearTimeout(timerthree);
        return () => clearTimeout(timerfour);
        return () => clearTimeout(timerfive);
    }, []);
    return (
        <div className="progress-container">
            <div className='title'>
                <h2>Most Sold Items</h2>
            </div>
            <div className='persentage-outer-div'>
                <div className='persentage'> <h3>Boby</h3> <h4>{progress}%</h4></div>
                <div className="progress-bar">
                    <div className="progress-bar-inner" style={{ width: `${progress}%` }}>
                    </div>
                </div>
            </div>
            
            <div className='persentage-outer-div'>
                <div className='persentage'> <h3>Combinason</h3> <h4>{progresstwo}%</h4></div>
                <div className="progress-bar">
                    <div className="progress-bar-inner" style={{ width: `${progresstwo}%` }}>
                    </div>
                </div>
            </div>
            
            <div className='persentage-outer-div'>
                <div className='persentage'> <h3>Bas</h3> <h4>{progressthree}%</h4></div>
                <div className="progress-bar">
                    <div className="progress-bar-inner" style={{ width: `${progressthree}%` }}>
                    </div>
                </div>
            </div>
            
            <div className='persentage-outer-div'>
                <div className='persentage'> <h3>top</h3> <h4>{progressfour}%</h4></div>
                <div className="progress-bar">
                    <div className="progress-bar-inner" style={{ width: `${progressfour}%` }}>
                    </div>
                </div>
            </div>

            <div className='persentage-outer-div'>
                <div className='persentage'> <h3>Ensumble</h3> <h4>{progressfive}%</h4></div>
                <div className="progress-bar">
                    <div className="progress-bar-inner" style={{ width: `${progressfive}%` }}>
                    </div>
                </div>
            </div>
   
        </div>
    );
}

export default Progressbar