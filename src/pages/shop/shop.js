import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from "./shop-data";

class ShopePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {

        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
export default ShopePage;