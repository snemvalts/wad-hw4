import {mount, shallowMount} from '@vue/test-utils'
import Header from "../../src/components/Header";

describe('Header', () => {


    it('Should show correct date in the header', () => {
        const wrapper = shallowMount(Header, {
            data: () => ({
                today: new Date('2019-01-01T00:00:00+0000')
            })
        });

        expect(wrapper.find('.day').text()).toBe('01');
        expect(wrapper.find('.month').text()).toBe('JAN');
        expect(wrapper.find('.year').text()).toBe('2019');
        expect(wrapper.find('.weekday').text()).toBe('TUESDAY');

    })
});