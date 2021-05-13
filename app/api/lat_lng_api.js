import apiClient from './client';

export const createLatLng = (latLng) => (
    apiClient.post('/lat_lngs', latLng)
);
