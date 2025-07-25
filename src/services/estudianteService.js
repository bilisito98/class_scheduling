export const estudianteService = {
  getAll: () => api.get('/estudiantes'),
  create: (data) => api.post('/estudiantes', data),
  update: (id, data) => api.put(`/estudiantes/${id}`, data),
  delete: (id) => api.delete(`/estudiantes/${id}`),
};
