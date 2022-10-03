import "../../../Common/common.scss"
import "../index.scss"
import LinhaSeparação from "../../../../assets/images/linha-separação3.svg"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Card(props){
    return(
            <main className="evaluation-cards">
                <div>
                    <img src={props.image} className="evaluation-cards-image-profile"/>
                </div>
                <div>
                    <img src={LinhaSeparação} className="evaluation-cards-image-separation" />
                </div>
                <div className="evaluation-cards-div-comments">
                    <div className="evaluation-cards-div-infos">
                        <h1>{props.name}</h1>
                        <p> {props.nota}</p>
                    </div>
                    <div>
                        <p className="evaluation-cards-div-infos-desc">Médico exelente com atendimento muito bom bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                    </div>
                </div>
            </main>
    )
}