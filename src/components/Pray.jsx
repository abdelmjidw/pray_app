import React, { useEffect, useState } from 'react';
import '../index.css';

function Pray() {
    const [prayerTimes, setPrayerTimes] = useState({});
    const [city, setCity] = useState('Agadir'); 

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                
                const response = await fetch(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Morocco`);
                const dataPrayer = await response.json(); 

                
                setPrayerTimes(dataPrayer.data.timings);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        fetchPrayerTimes(); 

    }, [city]);

    return (
        <section>
            <div className="container">
                <div className="top">
                    <div className="city">
                        <h3>City:</h3>
                        <select value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="Agadir">Agadir</option>
                            <option value="Maka">Maka</option>
                            <option value="Alqahira">Alqahira</option>
                            <option value="Alquds">Alquds</option>
                            <option value="New York">New York</option>
                            <option value="Tokyo">Tokyo</option>
                        </select>
                    </div>
                    <div className="day">
                        <h3>Day:</h3>
                        <b>{new Date().toLocaleDateString('en-GB')}</b>
                    </div>
                </div>
                <hr />
                <div className="buttom">
                <div>Fajr: <b>{prayerTimes.Fajr}</b></div>
                    <div>Dhuhr: <b>{prayerTimes.Dhuhr}</b></div>
                    <div>Asr: <b>{prayerTimes.Asr}</b></div>
                    <div>Maghrib: <b>{prayerTimes.Maghrib}</b></div>
                    <div>Isha: <b>{prayerTimes.Isha}</b></div>
                </div>
            </div>
        </section>
        )
}
export default Pray;