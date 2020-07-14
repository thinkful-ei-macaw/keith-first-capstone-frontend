import React from 'react';
import DisplayMonster from './DisplayMonster'
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
  //make a DOM element to render app into
  const div = document.createElement('div');
  //tests if this will render at all
  ReactDOM.render(<DisplayMonster />, div);
  //clean up when done
  ReactDOM.unmountComponentAtNode(div)
});
