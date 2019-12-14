import {mount} from '@vue/test-utils'
import List from "../../src/components/List";

describe('List component', () => {

  const wrapper = mount(List, {
    propsData: {
      list: []
    }
  })

  it('Empty list displays correct text', () => {
    expect(wrapper.html()).toContain('Add your first Todo task')
  })
});
