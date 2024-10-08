import axios from 'axios';

const apiUrl = `${import.meta.env.VITE_API_URL}/auth`;

export const register = async (user) => {
    try {
        const response = await axios.post(`${apiUrl}/register`, user);
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error.response ? error.response.data : error.message);
        if (error.response) {
            console.error('Detalhes do erro:', {
                status: error.response.status,
                headers: error.response.headers,
                data: error.response.data
            });
        }
        throw error.response ? error.response.data : new Error('Erro desconhecido');
    }
};

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Erro desconhecido');
    }
};