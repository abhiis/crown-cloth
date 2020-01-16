import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import Collections from '../collections/collections.component';
import './shoppage.styles.scss';
const  ShopPage = ({match}) =>(
            
            <div className='shop-page'>
                
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collections}/>
            </div>
);

export default ShopPage;