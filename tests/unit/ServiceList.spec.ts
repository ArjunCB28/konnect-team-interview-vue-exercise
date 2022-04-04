import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import ServiceList from "@/components/ServiceList.vue";
import ServiceMockData from "./ServiceListMock.js";
import KCard from "@kongponents/kcard";

describe("ServiceList.vue", () => {
  const wrapper = shallowMount(ServiceList, { propsData: { services: ServiceMockData } });
  it("Renders ServiceList component", () => {
    expect(wrapper.classes("catalog")).to.be.true;
  });

  it("Renders the correct number of service cards", async () => {
    expect(wrapper.findAllComponents(KCard).length).to.equals(20);
  });

});
