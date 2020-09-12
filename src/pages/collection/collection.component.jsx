import React, {useContext} from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import CollectionsContext from "../../context/collections/collections.context";

const CollectionPage = ({ match }) => {
  return (
      <CollectionsContext.Consumer>
          {
             collections => {
                 const collection = collections[match.params.collectionId]
                 const { title, items } = collection;
                 return (
                 <div className='collection-page'>
                     <h2 className='title'>{title}</h2>
                     <div className='items'>
                         {items.map(item => (
                             <CollectionItem key={item.id} item={item} />
                         ))}
                     </div>
                 </div>)
             }
          }
      </CollectionsContext.Consumer>
  );
};
// eslint-disable-next-line
const CollectionPage2 = ({ match }) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId]
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>)
};

export default CollectionPage;
