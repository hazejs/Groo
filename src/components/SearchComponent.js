import React from 'react'
import { AutoComplete } from './AutoComplete'
import '../styles/search.scss'

export const SearchComponent = () => {

    return (
        <div className="search-container">
            <div className="inner-container">
                <span>GROO</span>
                <AutoComplete/>
            </div>
        </div>
    )
}
