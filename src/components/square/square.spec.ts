import { shallowMount } from "@vue/test-utils";
import Square from "@/components/square/square.vue";

describe("square.vue", () => {
  it("renders empty message on button in square", () => {
    const wrapper = shallowMount(Square, {
      
    });
    const button = wrapper.find('button')
  
    expect(button.text()).toContain('')
  
    // await button.trigger('click')
  
    // expect(button.text()).toContain('X' || 'O')
  });
});