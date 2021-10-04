import React from "react";

function Star(props: any) {
  if (props.selected) {
    return (
      <span><b>star</b> </span>
    )
  } return (
    <span>star </span>
  )
}

export default Star;