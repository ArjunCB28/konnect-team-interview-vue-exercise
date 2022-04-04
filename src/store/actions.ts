import { AppState, MutationTypes, ServiceListState } from "@/type-defs/";
import { ActionContext } from "vuex";

export const actions = {
  updateServiceList
};

function updateServiceList(
  { commit }: ActionContext<AppState, any>,
  serviceList: ServiceListState
) {
  commit(MutationTypes.SET_SERVICE_LIST, serviceList);
}
