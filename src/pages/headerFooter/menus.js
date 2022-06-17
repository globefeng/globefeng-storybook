const TestMenus = [
  {
    name: "Button",
    link: '/button',
  },
  {
    name: "Atomic",
    submenus: [ {name: 'Button', link:'/button'},
                {name: 'Tree', link:'/tree'},                
                {name: 'TextInput', link:'/textinput'},              
              ]
  },
  {
    name: "Animation",
    submenus: [ {name: 'Rotation', link:'/rotation'},                
                {name: 'Rotation', link:'/rotation'},              
              ]
  },
]

export default TestMenus;