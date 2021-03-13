import React, { useState  } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    }
 
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Image Search</label>
                <input 
                    type='text'
                    name='first-name'
                    placeholder='検索名を入力してください'
                    value={term} 
                    onChange={
                        (e) => {setTerm(e.target.value);                
                    }}
                />
            </div>
        </form>
    )
}

export default SearchBar;
