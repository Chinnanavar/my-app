import React, { memo } from 'react'

const NewComp = (props) => {
  console.log("NewComp render", props.newCount);
  return (
    <div>NewComp</div>
  )
}

export default memo(NewComp)