import React, { useContext } from "react";

import { Context } from "../App";

function Company() {
  const { state, dispatch } = useContext(Context);
  return <div>{state.companyStep}</div>;
}

export default Company;
