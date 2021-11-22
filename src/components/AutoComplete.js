import React, {useState, useContext, useEffect, useRef} from 'react'
import { Context as MainContext } from '../context/MainContext';
import { useNavigate } from "react-router-dom";
import '../styles/autocomplete.scss'

export const AutoComplete = () => {
    const navigate = useNavigate();
    const elem = useRef()
    const [value, setValue] = useState('')
    const { searchApi, state: {suggestions, selected} } = useContext(MainContext)

    useEffect(() => {console.log('suggestions', suggestions)}, [suggestions, selected])

    return (
        <div className="autocomplete-container">
            <input
                ref={elem}
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyUp={e => {
                    e.preventDefault();
                    searchApi(value)
                }}
            />
            {document.activeElement === elem.current && 
            suggestions.length > 0 &&
            <div className="autocomplete-results">
                <ul>
                    {suggestions.map(s => {
                        return (
                            <li key={s.trackId} onClick={() => {
                                navigate(`/result/:${s.artistId}`)
                            }}>
                                <img alt="c" src={s.artworkUrl100}/>
                                <p>{s.artistName}</p>
                            </li>
                        )
                    })} 
                </ul>
            </div>
            }
        </div>
    )
}
