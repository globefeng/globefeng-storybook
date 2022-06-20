import React, { useEffect } from 'react';
import { DoScroll } from '../../helper/winHelper';
import Tree from '../../components/tree/tree';

const data = [
    {
      id: 0,
      path: 'Root',
      type: 'folder',
      isRoot: true,
      children: [1, 6],
    },
    {
      id: 1,
      path: 'Books',
      type: 'folder',
      checked: true,
      menus: [
        {
          name: "Add new book"
        },
        {
          name: "Delete"
        },
      ],
      children: [2, 3, 4, 5],
    },
    {
      id: 2,
      path: 'React Tutorial',
      type: 'folder',
      checked: true,
      children: [],
    },
    {
      id: 3,
      path: 'SQL Step By Step',
      type: 'folder',
      checked: false,
      children: [],
    },
    {
      id: 4,
      path: 'Hacking with React',
      type: 'folder',
      checked: false,
      children: [],
    },
    {
      id: 5,
      path: 'Java for Beginner',
      type: 'folder',
      checked: true,
      children: [],
    },
    {
      id: 6,
      path: 'Movies',
      type: 'folder',
      checked: true,
      menus: [
        {
          name: "Add new movie"
        },
        {
          name: "Delete"
        },
      ],
      children: [7, 8, 9, 10],
    },
    {
      id: 7,
      path: 'The Godfather',
      type: 'folder',
      checked: true,
      children: [],
    },
    {
      id: 8,
      path: 'The Lord of the Rings: The Return of the King',
      type: 'folder',
      checked: false,
      children: [],
    },
    {
      id: 9,
      path: 'The Matrix',
      type: 'folder',
      checked: true,
      children: [],
    },
    {
      id: 10,
      path: 'Star Wars',
      type: 'folder',
      checked: false,
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
