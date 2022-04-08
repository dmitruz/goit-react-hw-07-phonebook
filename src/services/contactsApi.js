import axios from "axios";

axios.defaults.baseURL = "https://623dd67be8fbc4f162683dd2.mockapi.io";

export class ContactsAPI {
  static async fetchContacts() {
    const { data } = await axios.get("/contacts");

    return data;
  }

  static async addContact(contact) {
    const { data } = await axios.post("/contacts", contact);

    return data;
  }

  static async deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
  }
}