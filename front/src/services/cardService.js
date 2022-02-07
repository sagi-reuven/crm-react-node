import httpService from "./httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
  return httpService.post(`${apiUrl}/cards`, card);
}

function getMyCards() {
  return httpService.get(`${apiUrl}/cards/my-cards`);
}
function getCard(id) {
  return httpService.get(`${apiUrl}/cards/${id}`);
}

function editCard(id, body) {
  return httpService.put(`${apiUrl}/cards/${id}`, body);
}

function deleteCard(id) {
  return httpService.deleteCard(`${apiUrl}/cards/${id}`);
}

const cardService = {
  createCard,
  getMyCards,
  getCard,
  editCard,
  deleteCard,
};

export default cardService;
