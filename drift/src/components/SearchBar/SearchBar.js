import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SearchBar.scss';
import { useEffect, useState } from 'react';

const SearchBar = () => {
    const [input, setInput] = useState(false);
    
    useEffect(() => {
        setInput(true);

        return () => setInput(false);
    }, []);

    return (
        <div className={`search-bar-wrapper ${input && 'full-search-bar'}`}>
            <TextField id="outlined-basic" label="Search..." variant="outlined" className='search-input' />
            <Button
                variant='contained'
                color='primary'
                className='button-search'
                type='submit'
            >
                SEARCH
            </Button>
        </div>
    )
}

export default SearchBar;