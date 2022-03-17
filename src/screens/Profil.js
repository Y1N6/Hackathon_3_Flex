// import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import Logo from "../assets/logo_blue.png";
import { useEffect, useState } from "react";
import "./styles/Profil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  const [totalScore, setTotalScore] = useState();

  useEffect(() => {
    let users = localStorage.getItem(props.user.name);
    setTotalScore(users);
  }, []);

  if (props.isLoading) {
    return;
  }

  return (
    <>
      <div className="holderContainer">
        <div className="imgContainer">
          <img src={Logo} alt="logo Enedis"></img>
        </div>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      <p>{user.email}</p> */}
        <div className="infoContainer">
          <img src={props.user.picture} alt={props.user.name}></img>
          <p className="profilName">{props.user.name}</p>
        </div>
        <div className="holderScoreContainer">
          <div className="scoreContainer">
            <FontAwesomeIcon
              icon={faTrophy}
              size="3x"
              color="var(--neutral-600)"
              className={totalScore >= 1 ? "winIcon" : ""}
            />
            <FontAwesomeIcon
              icon={faTrophy}
              size="3x"
              color="var(--neutral-600)"
              className={totalScore >= 2 ? "winIcon" : ""}
            />
            <FontAwesomeIcon
              icon={faTrophy}
              size="4x"
              color="var(--neutral-600)"
              className={totalScore >= 3 ? "winIcon" : ""}
            />
            <FontAwesomeIcon
              icon={faTrophy}
              size="4x"
              color="var(--neutral-600)"
              className={totalScore >= 4 ? "winIcon" : ""}
            />
            <FontAwesomeIcon
              icon={faTrophy}
              size="5x"
              color="var(--neutral-600)"
              className={totalScore >= 5 ? "winIcon" : ""}
            />
            {/* <div className="circleBorder"></div> */}
          </div>
          <div>{totalScore} Fondamentaux</div>
        </div>
        <div className="boutonContainer">
          <div className="bouton reviser">Reviser</div>
          <Link to="game3" onClick={() => props.setChooseGame(0)}>
            <div className="bouton play">Jouer Route</div>
          </Link>
          <Link to="game3" onClick={() => props.setChooseGame(1)}>
            <div className="bouton play">Jouer Bureau</div>
          </Link>
        </div>
        <div className="logOut">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Profile;
