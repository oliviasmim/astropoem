import './styles.css';

export const SolarSystem = () => {
    return (
        <div className="solarContainer">
            <div className="object" id="sun"></div>          
            <div id='mercury-orbit'>
                <div className="object planet" id="mercury"></div>
            </div>      
            <div id='venus-orbit'>
                <div className="object planet" id="venus"> </div>
            </div>     
            <div id='earth-orbit'>
                <div className="object planet" id="earth"></div>
            </div>
            <div id='mars-orbit'>
                <div className="object planet" id="mars"></div>
            </div>  
            <div id='jupiter-orbit'>
                <div className="object planet" id="jupiter"></div>
            </div>
        </div>
    )
}