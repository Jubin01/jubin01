import { shallowMount } from "@vue/test-utils";
import Board from "@/components/board/board.vue";

describe("board.vue", () => {
  it("renders Start New Game message on button", () => {
    const wrapper = shallowMount(Board, {
    });
    const button = wrapper.find('button')
   // const text = wrapper.find('p')
   expect(button.text()).toContain('Start new Game')
  });
});