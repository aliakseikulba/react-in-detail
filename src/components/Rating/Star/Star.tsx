import React from "react";

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  if (props.selected) {
    return (
      <span><b>star</b> </span>
    )
  } return (
    <span>star </span>
  )
}

export default Star;