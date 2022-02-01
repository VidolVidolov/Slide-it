import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { searchedCars } from '../../actions/userActions';
import './SearchBar.scss';

const SearchBar = ({ searchedCars }) => {
    const [input, setInput] = useState(false);

    const handleSearch = async (e) => {
        await searchedCars(e.target.value);
    }

    useEffect(() => {
        setInput(true);

        return () => setInput(false);
    }, []);

    return (
        <div className={`search-bar-wrapper ${input && 'full-search-bar'}`}>
            <TextField
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                className='search-input'
                name='search'
                onChange={e => handleSearch(e)} />
        </div>
    )
}

const mapDispatchToProps = {
    searchedCars
}

export default connect(null, mapDispatchToProps)(SearchBar);