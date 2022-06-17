
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import RightIcon from './right.svg';
import FileIcon from './file.svg';

const StyledTreeNode = styled.div`
  display: block;
  padding-left: ${props => ((props.level + 1)* 10)}px;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }
`;

  // border: solid black;
  // border-width: 0 3px 3px 0;
  // padding: 3px;
const StyledIcon = styled.div`
  display: inline-block;
  margin-right: 10px;
  transition-duration: 0.5s;
  transform-origin: center center;
  transform: ${props => props.isOpen ? "rotate(90deg)" : "rotate(0deg)"};
`;

const TreeNode = (props) => {
  const { node, level, getChildNodes, toggleNode } = props;
  
  let children = getChildNodes(node);

  const isOpen = () => {
    if (node.children.length === 0) return false;

    if (node.isOpen === undefined) return true;
    return node.isOpen;
  }

  const hasChildren = () => {
    return node.children.length > 0;
  }

  return (
    <Fragment>
      <StyledTreeNode level={level} onClick={() => toggleNode(node)} >
        {hasChildren() && <Fragment><StyledIcon isOpen={isOpen()}><img alt='' src={RightIcon} width='12' height='12' /></StyledIcon>{node.path}</Fragment>}
        {!hasChildren() && <Fragment><img alt='' src={FileIcon} width='14' height='14' /><span style={{marginLeft:'10px'}}>{node.path}</span></Fragment>}
      </StyledTreeNode>
      <Collapse in={isOpen()} timeout={500}>
        {children && children.map(childNode => 
          <TreeNode key={childNode.id} {...props} node={childNode} level={level + 1}/>
        )}
      </Collapse>
    </Fragment>
  );
};


TreeNode.propTypes = {
  /**
   * boolean to show/hide progress icon
   */
   data: PropTypes.arrayOf(PropTypes.any),
   node: PropTypes.any,
   level: PropTypes.number,
   getChildNodes: PropTypes.func,
   toggleNode: PropTypes.func,
};

export default TreeNode;