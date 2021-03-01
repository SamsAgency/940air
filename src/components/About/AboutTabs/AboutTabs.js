import React, {useState} from 'react'
import './AboutTabs.css'
import AboutTabvission from './AboutTabsContent/AboutTabvission';
import AboutTabwhyus from './AboutTabsContent/AboutTabwhyus';
import AboutTabmission from './AboutTabsContent/AboutTabmission';
import AboutTabValues from './AboutTabsContent/AboutTabValues';

const AboutTabs = () => {

    const [tabType, setTabType] = useState('whyus')

    const switchTabs = () => {
        if (tabType === "whyus"){
            return <AboutTabwhyus/>
        } else if (tabType === "vision") {
            return <AboutTabvission/>
        } else if (tabType === "mission") {
            return <AboutTabmission/>
        } else if (tabType === "values"){
            return <AboutTabValues/>
        }
    }

    return (
        <div className="about-tabs">
            <div className="about-tabs-head">
                <button onClick={()=>setTabType('whyus')} className="about-tab-head-button">Why us</button><hr/>
                <button onClick={()=>setTabType('vision')} className="about-tab-head-button">Vision</button><hr/>
                <button onClick={()=>setTabType('mission')} className="about-tab-head-button">Mission</button><hr/>
                <button onClick={()=>setTabType('values')} className="about-tab-head-button">Values</button><hr/>
            </div>
            {
                switchTabs()
            }
        </div>
    )
}

export default AboutTabs
