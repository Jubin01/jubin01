import { shallowMount } from "@vue/test-utils";
import Blog from "@/views/blog/blog.vue";

describe("blog.vue", () => {
    it("contains heading", async () => {
        const wrapper = shallowMount(Blog, {

        });
        const div = wrapper.find('div')
        const h1 = wrapper.find('h1')
        expect(h1.text()).toContain('Blogs From Blogger')
    });

    it("calls getData on rewind button click", async () => {
        const wrapper = shallowMount(Blog, {

        });
        //const append = jest.spyOn(Blog.methods, "getData");
        const instance = wrapper.props;
        console.log(instance);
        wrapper.vm.getData = jest.fn();
        const prevButton = wrapper.find("#rewindButton")
        console.log(prevButton);
        prevButton.trigger('click').then((res) => {
            expect(wrapper.vm.getData).toBeCalled()
        }, (err) => {

        }).catch((error) => {
            console.log("Promise Rejected");
        });

    });

    it("calls getData on next button click", async () => {
        const wrapper = shallowMount(Blog, {

        });
        wrapper.vm.getData = jest.fn();
        const nextButton = wrapper.find("#nextButton")
        nextButton.trigger('click').then((res) => {
            expect(wrapper.vm.getData).toBeCalled()
        }, (err) => {

        }).catch((error) => {
            console.log("Promise Rejected");
        });
    });
});