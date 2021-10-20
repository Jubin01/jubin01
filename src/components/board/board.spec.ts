import { shallowMount } from "@vue/test-utils";
import Board from "@/components/board/board.vue";

describe("board.vue", () => {
  it("renders Boared message", () => {
    const wrapper = shallowMount(Board, {
    });
    expect(wrapper.text()).toMatch("Boared");
  });
});