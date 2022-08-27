import { getContacts } from "./../contactsService";
import { IContact } from "./../../types/IContact";

import axios from "axios";

jest.mock("axios");
describe("getContacts", () => {
  let response: { data: IContact[] | IContact };
  beforeEach(() => {
    response = {
      data: [
        {
          createdAt: "2022-06-13T16:46:11.829Z",
          name: "Vernon Kemmer",
          avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg",
          email: "Maymie29@gmail.com",
          companyName: "Gutmann - Hudson",
          recentActivity: "2022-06-13T16:40:55.562Z",
          id: "1",
        },
      ],
    };
  });
  test("Корректное значение", async () => {
    //@ts-ignore
    axios.get.mockReturnValue(response);
    const data = await getContacts();
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(response);
  });
});
