import { describe, expect, it } from 'vitest';
import renderer from 'react-test-renderer';
import Eargasm from '../pages/project/eargasm';
import TestTable from '../pages/project/testtable';
import WouldYouRather from '../pages/project/wouldyourather';
import WritingByLilyanne from '../pages/project/writingbylilyanne';

describe('pages', () => {
  it('should Eargasm match snapshot', () => {
    const tree = renderer.create(<Eargasm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should TestTable match snapshot', () => {
    const tree = renderer.create(<TestTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should WouldYouRather match snapshot', () => {
    const tree = renderer.create(<WouldYouRather />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should WritingByLilyanne match snapshot', () => {
    const tree = renderer.create(<WritingByLilyanne />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
