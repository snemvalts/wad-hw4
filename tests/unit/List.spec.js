import {mount} from '@vue/test-utils'
import List from "../../src/components/List";
import flushPromises from "flush-promises";

describe('List component', () => {

  const wrapper = mount(List, {
    propsData: {
      list: []
    }
  });

  it('Empty list displays correct text', () => {
    expect(wrapper.html()).toContain('Add your first Todo task')
  });

  it('should update done property', async () => {
    const wrapper = mount(List, {
      propsData: {
        list: [{done: false, title: "do this task"}, {done:false,title:"this should not be done"},{done:false,title:"this should also not be done"}]
      },
      sync:false
    });
    // item exists in the list
    expect(wrapper.html()).toContain("do this task");
    wrapper.findAll("span").at(0).trigger('click');
    await flushPromises(); // wait for the click to resolve
    expect(wrapper.props().list[0].done).toBe(true);
  });
});

