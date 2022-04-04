import api from './api';

export async function getHeroes() {
  const response = await api.get('heroes');
  return response.data;
}

export async function getHero(id) {
  const response = await api.get(`hero/${id}`);
  return response.data;
}

export async function getHeroesByType(type) {
  const response = await api.get(`hero-type/${type}`);
  return response.data;
}

export async function createHero(form, headers) {
  const response = await api.post('hero/save', form, headers);
  return response.data;
}

export async function updateHero(id, form = {}, headers) {
  const response = await api.put(`hero/${id}/update`, form, headers);
  return response.data;
}

export async function deleteHero(id) {
  const response = await api.delete(`hero/${id}/delete`);
  return response.data;
}
