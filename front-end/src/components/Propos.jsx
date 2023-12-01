import React, { useState, useEffect } from "react";
import Animefront from "./Animefront.json";
// import Animefront2 from "./Animefront2.json";
import Animation1 from "./Animation1.json";
import Prestation from "./Prestation.json";
import Lottie from "lottie-react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ResponsiveAppBar from "./ResponsiveAppBar.js";
import Footer from "./Footer.js";
function Propos() {
  return (
    <div>
      <ResponsiveAppBar />
      <div
        style={{
          display: "flex",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            flex: 1,
            marginTop: "50px",
            marginBottom: "40px",
            marginLeft: "30px",
          }}
        >
          {/* Contenu texte à gauche */}
          <h1 style={{ color: "blue", textAlign: "#1b06f1" }}>
            Gerer vos evenements facilement.
          </h1>
          <p style={{ lineHeight: "2", color: "#776af5" }}>
            {" "}
            Organiser ou prester un événement n'a jamais <br /> ete si facile
            avec votre plateforme EVENT-PRO
          </p>
          <div>
            <div style={{ width: "50%", marginLeft: "15px" }}>
              <Lottie animationData={Animation1} />{" "}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, marginTop: "50px", marginBottom: "40px" }}>
          <Lottie animationData={Animefront} />{" "}
        </div>
      </div>

      <div
        style={{ display: "flex", boxShadow: "0px 5px 10px rgba(0, 0, 0, 1)" }}
      >
        <div style={{ flex: 1, marginLeft: "30px" }}>
          {/* Contenu texte à gauche */}
          <h1
            style={{ color: "#8171df", textAlign: "center", marginTop: "40px" }}
          >
            À PROPOS DE NOUS
          </h1>
          <p style={{ lineHeight: "2", color: "#776af5", marginTop: "60px" }}>
            EVENT-PRO est une organisation créée par des sénégalais qui regroupe
            sur une seule plateforme des services d'organisations d'événement et
            de prestations pour tout les types d'événements
          </p>
        </div>
        <div style={{ flex: 1, marginRight: "5px" }}>
          {/* Image à droite */}
          <img
            src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 1)",
          backgroundColor: "#f2f1f8",
        }}
      >
        <div style={{ flex: 1 }}>
          {/* Contenu texte à gauche */}
          <h1
            style={{
              color: "#827ca4",
              textAlign: "center",
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            L'événement
          </h1>
          <div
            style={{ lineHeight: "2", color: "#747379", marginLeft: "30px" }}
          >
            <div style={{ marginTop: "20%", marginLeft: "30px" }}>
              <div>EVENT-PRO est la solution qui permet de:</div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TaskAltIcon /> {" Etre au rendez-vous, sans retard.  "}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TaskAltIcon /> {" Une satisfaction totale pour ton événement.  "}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TaskAltIcon />{" "}
              {" Suivre les besoins de l'organisateur en temps.  "}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TaskAltIcon /> {" Simplifier les événements au Sénégal. "}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <TaskAltIcon /> {" Economiser son argent evec EVENT-PRO.  "}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {/* Image à droite */}
          <img
            src="https://img.freepik.com/free-vector/festive-calendar-event-holiday-celebration-party-work-schedule-planning-project-management-deadline-idea-office-managers-excited-colleagues_335657-1610.jpg"
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 1)",
          backgroundColor: "#f2f1f8",
        }}
      >
        <div style={{ flex: 1, backgroundColor: "#fff" }}>
          {/* Contenu texte à gauche */}
          <h1
            style={{
              color: "blue",
              textAlign: "center",
              margin: "0 auto",
              marginTop: "20px",
            }}
          >
            Préstation
          </h1>
          <div
            style={{ lineHeight: "2", color: "#747379", marginLeft: "30px" }}
          >
            <div
              style={{ marginTop: "20%", marginLeft: "30px", color: "blue" }}
            >
              <div>EVENT-PRO votre meilleur service de prestation</div>
            </div>
            <div style={{ marginBottom: "10px", color: "blue" }}>
              <DoneAllIcon sx={{ color: "blue" }} /> {" Dans le mariage.  "}
            </div>
            <div style={{ marginBottom: "10px", color: "blue" }}>
              <DoneAllIcon /> {" Seremonie religieuse.  "}
            </div>
            <div style={{ marginBottom: "10px", color: "blue" }}>
              <DoneAllIcon /> {" Dans les meetings.  "}
            </div>
            <div style={{ marginBottom: "10px", color: "blue" }}>
              <DoneAllIcon /> {" Dans les finerailles. "}
            </div>
            <div style={{ marginBottom: "10px", color: "blue" }}>
              <DoneAllIcon /> {" Economiser son temps evec EVENT-PRO.  "}
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {/* Image à droite */}
          <Lottie animationData={Prestation} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Propos;