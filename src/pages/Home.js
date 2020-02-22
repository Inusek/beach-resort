import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturesRooms from "../components/FeaturedRoms";

export const Home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturesRooms />
        </>
    );
};

export default Home;
