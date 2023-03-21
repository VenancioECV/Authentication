import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FirstContext } from "../../../context/FirstContext";
import EarthOrbit from "../../EarthOrbit";
import Game from "../../PlanetGame";
import SolarSystem from "../../SolarSystem/SolarSystem";
import APOD from "../../APOD/APOD";

const WelcomePage = () => {

    const { user, admin, validateAdmin } = useContext(FirstContext);
    const navigate = useNavigate();

    useEffect(() => {
        validateAdmin();
    }, [])
    useEffect(() => {
        if (admin === false) {
            navigate("/");
        }
        console.log(user);
    }, [admin])

    return (
        <>
            {admin ?
                <Fragment>
                <APOD />
            </Fragment>
                : null
            }
        </>
    )
}

export default WelcomePage;