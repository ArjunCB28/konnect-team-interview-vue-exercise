export type Service = {
  id: number;
  name: string;
  description: string;
  versions: ServiceVersions[];
};

export type ServiceVersions = {
  id: number;
  name: string;
  description: string;
};

export type ServiceListState = {
  pageNumber: number;
  searchText: string;
  services: Service[];
};

export type AppState = {
  serviceList: ServiceListState;
};

export const MutationTypes = {
    SET_SERVICE_LIST: 'SET_SERVICE_LIST'
};
