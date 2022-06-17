import React, { useEffect } from 'react';
import { DoScroll } from '../../helper/winHelper';
import Tree from '../../components/tree/tree';

const data = [
    {
      id: 0,
      path: 'Root',
      type: 'folder',
      isRoot: true,
      children: [1, 2],
    },
    {
      id: 1,
      path: 'Child 1',
      type: 'folder',
      children: [3, 4],
    },
    {
      id: 2,
      path: 'Child 2',
      type: 'file',
      children: [5, 6],
    },
    {
      id: 3,
      path: 'Son 1',
      type: 'folder',
      children: [],
    },
    {
      id: 4,
      path: 'Son 2',
      type: 'folder',
      children: [],
    },
    {
      id: 5,
      path: 'Daughter 1',
      type: 'folder',
      children: [],
    },
    {
      id: 6,
      path: 'Daughter 2',
      type: 'folder',
      children: [],
    },
  ];

const TreePage = () => {
  useEffect(() => {
    DoScroll();
  }, []);

  return (
      <div style={{padding: '40px 0px', margin: "auto", width: '80%'}}>
        <Tree data={data} />
      </div>
  )
}

export default TreePage;
