// About.jsx — patched: clicking New Zealand on the map opens the secret gate.
// Changes from your original (3 spots, marked with // SECRET GATE):
//   1. import { SecretGateModal } + useState
//   2. Geography for New Zealand gets onClick + pointer cursor
//   3. <SecretGateModal /> rendered at the bottom
import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SecretGateModal } from '../components/SecretGate'; // SECRET GATE

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const presentationCities = [
    { name: 'New Orleans, LA', coords: [-90.07, 29.95] },
    { name: 'Denver, CO', coords: [-104.99, 39.74] },
    { name: 'Chicago, IL', coords: [-87.63, 41.88] },
    { name: 'Boston, MA', coords: [-71.06, 42.36] },
    { name: 'Seattle, WA', coords: [-122.33, 47.61] },
    { name: 'Amsterdam', coords: [4.90, 52.37] },
    { name: 'Rotterdam', coords: [4.48, 51.92] },
    { name: 'Malta', coords: [14.38, 35.94] },
];

const workCities = [
    { name: 'Seattle, WA', coords: [-122.33, 47.61] },
    { name: 'San Jose, CA', coords: [-121.89, 37.34] },
    { name: 'Atlanta, GA', coords: [-84.39, 33.75] },
];

const homeCities = [
    { name: 'Athens, GA', coords: [-83.36, 33.95] },
];

const travelCities = [
    { name: 'Barcelona', coords: [2.17, 41.39] },
    { name: 'Madrid', coords: [-3.70, 40.42] },
    { name: 'Seville', coords: [-5.99, 37.39] },
    { name: 'Córdoba', coords: [-4.78, 37.89] },
    { name: 'Naples', coords: [14.27, 40.84] },
    { name: 'Pompeii', coords: [14.50, 40.75] },
    { name: 'Sorrento', coords: [14.37, 40.63] },
    { name: 'Santorini', coords: [25.43, 36.39] },
    { name: 'Tokyo', coords: [139.69, 35.69] },
    { name: 'Kamakura', coords: [139.55, 35.32] },
    { name: 'Osaka', coords: [135.50, 34.69] },
    { name: 'Hiroshima', coords: [132.46, 34.39] },
    { name: 'Hong Kong', coords: [114.17, 22.32] },
    { name: 'Oahu', coords: [-157.82, 21.31] },
    { name: 'North Island, NZ', coords: [175.5, -37.7] },
    { name: 'Cairns', coords: [145.77, -16.92] },
    { name: 'Sydney', coords: [151.21, -33.87] },
    { name: 'Cancún', coords: [-86.85, 21.16] },
    { name: 'Bahamas', coords: [-77.39, 25.03] },
];

const About = () => {
    const [gateOpen, setGateOpen] = useState(false); // SECRET GATE

    useEffect(() => {
        document.title = 'Brandon Y. Kang | About';
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F4EE] font-sans selection:bg-red-100">
            <Navbar />

            <div className="max-w-3xl mx-auto px-7 pt-24 pb-20">
                <h1
                    className="font-serif text-gray-900 font-normal mb-14"
                    style={{ fontSize: '42px', letterSpacing: '-0.02em' }}
                >
                    About
                </h1>

                {/* Bio */}
                <div className="space-y-5 mb-14">
                    <p className="text-[16px] font-sans text-gray-600 leading-relaxed">
                        I'm a PhD student at UGA studying how people build — and lose — trust in AI. Most of
                        my work lives in two places: designing psychometric tools to measure trust and
                        AI-related constructs, and building computational models to simulate how that trust
                        changes over time.
                    </p>
                    <p className="text-[16px] font-sans text-gray-600 leading-relaxed">
                        I've also spent time in industry doing people analytics — Adobe and T-Mobile recently,
                        SPANX and PwC in earlier summers. Being close to real organizations making actual
                        decisions about people does something useful for how you think about the research.
                    </p>
                    <p className="text-[16px] font-sans text-gray-600 leading-relaxed">
                        When I'm not working, I'm usually outside. Hiking and camping to think, tennis and
                        pickleball to compete.
                    </p>
                </div>

                {/* Map */}
                <div className="border-t border-[#E2DDD5] pt-10">
                    <div className="text-[11px] font-sans uppercase tracking-widest text-gray-400 mb-6">
                        Where I've Been
                    </div>

                    <div
                        className="overflow-hidden rounded-sm"
                        style={{ backgroundColor: '#E8E4DC' }}
                    >
                        <ComposableMap
                            width={800}
                            height={400}
                            projection="geoMercator"
                            projectionConfig={{ center: [10, 20], scale: 112 }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        // SECRET GATE: New Zealand opens the door
                                        const isNZ = geo.properties.name === 'New Zealand';
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#CCC8C0"
                                                stroke="#E8E4DC"
                                                strokeWidth={0.5}
                                                onClick={isNZ ? () => setGateOpen(true) : undefined}
                                                style={{
                                                    default: { outline: 'none' },
                                                    hover: {
                                                        outline: 'none',
                                                        fill: '#CCC8C0',
                                                        cursor: isNZ ? 'pointer' : 'default',
                                                    },
                                                    pressed: { outline: 'none' },
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>

                            {/* Travel diamonds (drawn first, underneath) */}
                            {travelCities.map(({ name, coords }) => (
                                <Marker key={`travel-${name}`} coordinates={coords}>
                                    <path d="M0,-4 L4,0 L0,4 L-4,0 Z" fill="#B8883C" opacity={0.85} />
                                </Marker>
                            ))}

                            {/* Work rings */}
                            {workCities.map(({ name, coords }) => (
                                <Marker key={`work-${name}`} coordinates={coords}>
                                    <circle r={5.5} fill="none" stroke="#6B7280" strokeWidth={1.5} />
                                </Marker>
                            ))}

                            {/* Presentation dots */}
                            {presentationCities.map(({ name, coords }) => (
                                <Marker key={`pres-${name}`} coordinates={coords}>
                                    <circle r={3.5} fill="#BA0C2F" opacity={0.9} />
                                </Marker>
                            ))}

                            {/* Home marker */}
                            {homeCities.map(({ name, coords }) => (
                                <Marker key={`home-${name}`} coordinates={coords}>
                                    <circle r={5.5} fill="#BA0C2F" />
                                    <circle r={9} fill="none" stroke="#BA0C2F" strokeWidth={1} opacity={0.35} />
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>

                    {/* Legend */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-2">
                        <div className="flex items-center gap-2">
                            <svg width="10" height="10" viewBox="0 0 10 10">
                                <circle cx="5" cy="5" r="3.5" fill="#BA0C2F" opacity="0.9" />
                            </svg>
                            <span className="text-[12px] font-sans text-gray-400">Conferences</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="10" height="10" viewBox="0 0 10 10">
                                <circle cx="5" cy="5" r="4" fill="none" stroke="#6B7280" strokeWidth="1.5" />
                            </svg>
                            <span className="text-[12px] font-sans text-gray-400">Industry</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="10" height="10" viewBox="0 0 10 10">
                                <path d="M5,1 L9,5 L5,9 L1,5 Z" fill="#B8883C" opacity="0.85" />
                            </svg>
                            <span className="text-[12px] font-sans text-gray-400">Travel</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="10" height="10" viewBox="0 0 10 10">
                                <circle cx="5" cy="5" r="4.5" fill="#BA0C2F" />
                            </svg>
                            <span className="text-[12px] font-sans text-gray-400">Athens, GA — Home</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* SECRET GATE */}
            <SecretGateModal open={gateOpen} onClose={() => setGateOpen(false)} />
        </div>
    );
};

export default About;
