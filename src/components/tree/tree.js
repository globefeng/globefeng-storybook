
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TreeNode from './treeNode';

const Tree = ({data}) => {
  const [treeData, setTreeData] = useState(data)
  
  const getChildNodes = (node) => {
    return node.children.map(child => {
      return treeData.find(p => p.id === child);
    });
  }

  const toggleNode = (node) => {
    let newData = treeData.map(item => {
      if (item.id === node.id) {
        if (item.isOpen === undefined) {
          item.isOpen = false;
        }
        else {
          item.isOpen = !item.isOpen;
        }
      }
      return item;
    });
    setTreeData(newData);
  };

  var root = treeData.find(p => p.isRoot === true);

  return (
    <div>
      <TreeNode node={root} data={data} level={0} getChildNodes={getChildNodes} toggleNode={toggleNode} />
    </div>
  );
};


Tree.propTypes = {
   data: PropTypes.arrayOf(PropTypes.any),
};

Tree.defaultProps ={
  data: []
}

export default Tree;