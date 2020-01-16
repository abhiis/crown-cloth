import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection} from '../../redux/shop/shop.selectors';
import { withRouter } from 'react-router-dom';
import './collections.styles.scss';
const Collections = ({ collection, history }) =>{
    const {title, items} = collection;

    return(
    <div className='collection-page'>
        <div className='back' onClick={()=> history.goBack()}>&#8672; Back to Shop</div>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items.map(item =>(<CollectionItem className='collection-item' key={item.id} item={item}/>))
        }
    </div></div>
);}
const mapStateToProps = (state,ownprops) =>({
    collection: selectCollection(ownprops.match.params.collectionId)(state)
});
export default withRouter(connect(mapStateToProps)(Collections));