
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TreeNode from './treeNode';
import EditDialog from './dialog/editDialog';
import DeleteDialog from './dialog/deleteDialog';

const Tree = ({data}) => {
  const [treeData, setTreeData] = useState(data)
  const [editNode, setEditNode] = useState(null)
  const [deleteNode, setDeleteNode] = useState(null)
  
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

  const onMenuClicked =(node, action) => {
    if (action === "Edit") {
      setEditNode(node);
    }
    else if (action === "Delete") {
      setDeleteNode(node);
    }
  }

  const setNodeChecked = (node, value, newData) => {
    if (!node) return;

    node.checked = value;
    node.children.forEach(child => {
      var selectedNode = newData.find(p => p.id === child);
      if (selectedNode) {
        setNodeChecked(selectedNode, value, newData);
      }
    })
  }

  const onNodeChecked = (node, value) => {
    setTreeData(prevState => {
      let newData = prevState.slice();
      var selectedNode = newData.find(p => p.id === node.id);
      setNodeChecked(selectedNode, value, newData)
      return newData;
    })
  }

  const getNodeChildren = (node, newData, children) => {
    if (!node) return;

    children.push(node.id);
    node.children.forEach(child => {
      var selectedNode = newData.find(p => p.id === child);
      if (selectedNode) {
        getNodeChildren(selectedNode, newData, children);
      }
    })
  }

  const onNodeDelete = (node) => {
    setTreeData(prevState => {
      let newData = prevState.slice();
      var selectedNode = newData.find(p => p.id === node.id);
      if (selectedNode) {
        let children = [];
        getNodeChildren(selectedNode, newData, children)
        let parent = newData.find(p => p.children.includes(node.id));
        if (parent && parent.children) {
          parent.children = parent.children.filter(id => id !== node.id);
        }
        const result = newData.filter(p => children.includes(p.id) === false)
        return result;  
      }
      else {
        return newData
      }
    })
  }


  var root = treeData.find(p => p.isRoot === true);

  return (
    <div>
      <TreeNode node={root} data={data} level={0} getChildNodes={getChildNodes} toggleNode={toggleNode} onMenuClicked={onMenuClicked} onNodeChecked={onNodeChecked} />

      <EditDialog node={editNode} onClose={() => setEditNode(null)} />
      <DeleteDialog node={deleteNode} onCancel={() => setDeleteNode(null)} onOk={() => { setDeleteNode(null); onNodeDelete(deleteNode); }} />
      
    </div>
  );
};


Tree.propTypes = {
   data: PropTypes.arrayOf(PropTypes.any),
   onMenuClicked: PropTypes.func,
};

Tree.defaultProps ={
  data: [],
}

export default Tree;