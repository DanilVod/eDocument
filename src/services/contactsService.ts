import { IContact } from "./../types/IContact";

import axios, { AxiosResponse } from "axios";

export const getContacts = (): Promise<AxiosResponse<IContact[]>> => {
  return axios.get<IContact[]>("/sales/1/contacts");
};

export const UserService = {
  getContacts,
};
