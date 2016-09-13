import ReactWrapper from './ReactWrapper';
import ShallowWrapper from './ShallowWrapper';

import mount from './mount';
import shallow from './shallow';
import render from './render';

window.enzyme = {
  render,
  shallow,
  mount,
  ShallowWrapper,
  ReactWrapper,
}

export default enzyme;
