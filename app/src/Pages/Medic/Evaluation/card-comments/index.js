import "../../../Common/common.scss"
import "../index.scss"
import LinhaSeparação from "../../../../assets/images/linha-separação3.svg"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Card(props){
    return(
            <main className="evaluation-cards">
                <div>
                    <img src={props.image} className="evaluation-cards-image-profile" width="64px" style={{borderRadius: "99px"}}/>
                </div>
                <div>
                    <img src={LinhaSeparação} className="evaluation-cards-image-separation" />
                </div>
                <div className="evaluation-cards-div-comments">
                    <div className="evaluation-cards-div-infos">
                        <h1 style={{fontSize:"1em"}}>{props.name}</h1>
                        <h1 style={{marginLeft: "1em", color:"#c7ac63"}}> {props.nota}</h1>
                    </div>
                    <div>
                    <p className="evaluation-cards-div-infos-desc">{props.desc}</p>
                    </div>
                </div>
            </main>
    )
}