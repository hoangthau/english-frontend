import React, { Fragment } from "react";

import ItemList from "../../components/ItemList";
import SlideShow from "../../components/SlideShow";

const View = ({ auth, leftImages, rightImages }) => {
  return (
    <Fragment>
      <SlideShow images={leftImages} position="left" />
      <SlideShow images={rightImages} position="right" />
      <ItemList auth={auth} />
    </Fragment>
  );
};

export default View;
