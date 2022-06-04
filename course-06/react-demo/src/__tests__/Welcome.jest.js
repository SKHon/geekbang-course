import { expect } from 'chai';
import renderer from 'react-test-renderer';
import Welcome from '../components/Welcome'

describe('Welcom 组件', () => {
  it('first render', () => {
    const component = renderer.create(
      <Welcome />,
    );
    let tree = component.toJSON();
    expect(tree.children[0]).equal('init str');
  })

  it('onclick event', () => {
    const component = renderer.create(
      <Welcome />,
    );
    let tree = component.toJSON();
    

    let msg;
    renderer.act(() => {
      msg = tree.props.onClick();
    });
    
    expect(msg).equal('this is msg');
   
  });
})
