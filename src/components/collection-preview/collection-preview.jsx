import React from "react";

import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ items, title }) => {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
