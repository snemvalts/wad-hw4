import {mount} from '@vue/test-utils'
import Footer from "../../src/components/Footer";
import flushPromises from "flush-promises";

describe('Footer', () => {

    it('should open footer', async function () {
        const wrapper = mount(Footer);

        expect(wrapper.find("span").isVisible()).toBe(true); //basically means that open is false if this test passes
        wrapper.find("span").trigger('click');
        await flushPromises(); // wait for the click to resolve
        expect(wrapper.find("input").isVisible()).toBe(true); //basically means that open is true if this test passes
    });
});