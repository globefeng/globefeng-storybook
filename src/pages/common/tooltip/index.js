import React from 'react';
import { Tooltip, Zoom } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const HtmlTooltip = withStyles(({
  tooltip: {
    backgroundColor: '#444444',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontSize: '16px'
  }
}))(Tooltip);

function TooltipComponent(props) {
  const placement = props.placement ? props.placement : "top";
  return (
    <HtmlTooltip arrow TransitionComponent={Zoom} placement={placement} title={
      <div style={{padding: '2px 10px'}}>
        <span>{props.tooltip}</span>
        {props.tooltip2 && <span><br />{props.tooltip2}</span>}
      </div>
      }>
      {props.children}
    </HtmlTooltip>
  )
}

export default TooltipComponent;