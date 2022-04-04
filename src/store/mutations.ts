import { AppState, MutationTypes, ServiceListState } from "@/type-defs";

export const mutations = {
  [MutationTypes.SET_SERVICE_LIST](state: AppState, payload: ServiceListState): void {
    state.serviceList = { ...payload };
  }
};
