
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import RightIcon from './right.svg';
// import FileIcon from './file.svg';
import Menu from '@mui/material/Menu';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMenuItem = styled.div`
  padding: 6px 26px 6px 16px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

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

const StyledIcon = styled.div`
  display: inline-block;
  margin-right: 4px;
  transition-duration: 0.5s;
  transform-origin: center center;
  transform: ${props => props.isOpen ? "rotate(90deg)" : "rotate(0deg)"};
`;

const TreeNode = (props) => {
  const { node, level, getChildNodes, toggleNode, onMenuClicked, onNodeChecked } = props;
  
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const onTreeClick = (event) => {
    event.preventDefault();

    switch (event.type) {
      case 'click':
        break;
      case 'contextmenu':
        setAnchorEl(event.currentTarget);
        break;
    }
  };

  const onMenuClick = (item) => {
    handleMenuClose();
    onMenuClicked(node, item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
 
  let children = getChildNodes(node);

  const isOpen = () => {
    if (node.children.length === 0) return false;

    if (node.isOpen === undefined) return true;
    return node.isOpen;
  }

  const hasChildren = () => {
    return node.children.length > 0;
  }

  const onChecked = (e) => {
    onNodeChecked(node, e.currentTarget.checked)
  }

  return (
    <Fragment>
      {level > 0 &&
        <StyledTreeNode level={level}>
          <StyledContainer>
            {hasChildren() && 
              <Fragment>
                <StyledIcon isOpen={isOpen()}><img alt='' src={RightIcon} width='12' height='12' onClick={(e) => { e.stopPropagation(); toggleNode(node)}} /></StyledIcon>
                <input type="checkbox" style={{width: '18px', height: '18px'}} onChange={onChecked} checked={node.checked} />
                <span style={{marginLeft:'4px'}} onClick={(e) => { onTreeClick(e)}}>{node.path}</span>
              </Fragment>
            }
            {!hasChildren() && 
              <Fragment>
                {/* <img alt='' src={FileIcon} width='14' height='14' /> */}
                <input type="checkbox" style={{width: '18px', height: '18px', marginLeft: '20px'}} onChange={onChecked} checked={node.checked} />
                <span style={{marginLeft:'4px'}} onClick={onTreeClick} onContextMenu={onTreeClick}>{node.path}</span>
              </Fragment>
            }
          </StyledContainer>
          <Menu
            id={"tree-menu-" + node.id }
            aria-labelledby={"tree-button-" + node.id}
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
              <StyledMenuItem onClick={() => onMenuClick("Add")}>Add new item</StyledMenuItem>
              <StyledMenuItem onClick={() => onMenuClick("Edit")}>Edit this item</StyledMenuItem>
              <StyledMenuItem onClick={() => onMenuClick("Delete")}>Delete this item</StyledMenuItem>
          </Menu>

        </StyledTreeNode>
      }
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
   clickNode: PropTypes.func,
   onMenuClicked: PropTypes.func,
   onNodeChecked: PropTypes.func,
};

export default TreeNode;