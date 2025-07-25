import api from './api';

export const tutorService = {
  getAll: () => api.get('/tutores'),
  create: (data) => api.post('/tutores', data),
  update: (id, data) => api.put(`/tutores/${id}`, data),
  delete: (id) => api.delete(`/tutores/${id}`),
};
