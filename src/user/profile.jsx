import React from 'react';
import { getData } from '../services';
import Header from "../user/header.jsx"
import Footer from "../user/footer.jsx"
import { useEffect, useState } from 'react';
import './style.css';

function Profile() {
    const [getCountries, setCountries] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("All");
    const [filteredCountries, setFilteredCountries] = useState([]);
    useEffect(() => {
        getData().then((data) => {
            setCountries(data)
        })
    }, []);
    const handleRegionChange = (region) => {
        setSelectedRegion(region);
    };
    useEffect(() => {
        const updatedFilteredCountries = selectedRegion === "All"
            ? getCountries
            : getCountries.filter(country => country.region === selectedRegion);

        setFilteredCountries(updatedFilteredCountries);
    }, [getCountries, selectedRegion]);
    return (
        <div className="country-wrpr">
            <div className="container">
                <Header onRegionChange={handleRegionChange} />
                <div className="row fullwidth" >
                    {filteredCountries.map((item, index) => (
                        <div key={index} className="col-md-6 halfwidth">
                            <div className="inlinediv">
                                <div className="inlineimg">
                                    <img src={item.flag} alt="" />
                                </div>
                                <div className="inlinetext">
                                    <h3 className="inline-h3">{item.name}</h3>
                                    <p className="inline-p">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;