import PropTypes from 'prop-types';
import s from './Filter.module.css';


function Filter({ value, onChange }) {
    return <div className={s.filter}>
        <label htmlFor='filter' className={s.title}> Find contacts by name</label>
        <input className={s.input} id='filter' value={value} onChange={onChange} />
        </div>
    
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter