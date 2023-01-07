import { shallowMount } from "@vue/test-utils";
import Notes from "@/views/notes/notes.vue";

describe("notes.vue", () => {
    it("contains heading as notes", () => {
        const wrapper = shallowMount(Notes, {

        });
        const div = wrapper.find('div')
        const h1 = wrapper.find('h1')
        expect(h1.text()).toContain('notes')
    });
});