import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';
const Directory = ({ sections }) => {
        return(
        <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionprops}) =>(<MenuItem key={id} {...otherSectionprops}/>)  )
            }
        </div>
        )};
const mapStateToProps = createStructuredSelector({
sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);
