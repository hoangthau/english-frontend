import React, { Fragment } from "react";

import ItemList from "../../components/ItemList";

const View = ({ auth }) => {
  return (
    <Fragment>
      <ItemList auth={auth} />
    </Fragment>
  );
};

export default View;
