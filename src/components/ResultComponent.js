import React, { useContext, useEffect, useState } from 'react'
import { useParams  } from 'react-router';
import { useNavigate } from "react-router-dom";
import { Context as MainContext } from '../context/MainContext';
import '../styles/result.scss'


export const ResultComponent = () => {
    const { state: { selected, suggestions } } = useContext(MainContext)
    const [innerSelected, setInnerSelected] = useState({})
    const idParam = useParams().id.split(':')[1];
    const navigate = useNavigate();

    useEffect(() => {
       const theOne = suggestions.find((v) => v.artistId == idParam)
       setInnerSelected(theOne)
    }, [selected])

    return (
        <div className="result-container">
            <h2 className="title">App Review</h2>
            {innerSelected &&
            <div className="selected-data">
                <div className="app-image">
                    <img src={innerSelected.artworkUrl100} alt="v"/>
                </div>
                <div className="app-data">
                    <span className="app-data-title">{innerSelected.artistName}</span>
                    <span>Ages: {innerSelected.contentAdvisoryRating}</span>
                    {innerSelected.formattedPrice && 
                        <span style={{marginTop: 20}}>{innerSelected.formattedPrice}</span>
                    }
                </div>
            </div>  
            }

            <div className="selected-screenshots">
                <h3>iPhone Screenshots</h3>
                <div className="screenshot">
                    {innerSelected && innerSelected.screenshotUrls && innerSelected.screenshotUrls.length > 0 &&
                        innerSelected.screenshotUrls.map((v) => {
                            return (
                                <img key={v} src={v} alt="v"/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="back-home">
                <button onClick={() => navigate('/')} className="result-btn">Back</button>
            </div>
        </div>
    )
}
