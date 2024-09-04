import axios from "axios";

const apiUrl = "http://localhost:3000/tasks"; // Verifique se esta URL está correta

// Função para obter o token do localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

// Função para obter todas as tarefas
export const getTasks = async () => {
    try {
        const token = getToken();
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao obter tarefas:", error);
        throw error;
    }
};

// Função para obter uma tarefa específica por ID
export const getTaskById = async (id) => {
    try {
        const token = getToken();
        const response = await axios.get(`${apiUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter a tarefa com ID ${id}:`, error);
        throw error;
    }
};

// Função para criar uma nova tarefa
export const createTask = async (taskData) => {
    try {
        const token = getToken();
        const response = await axios.post(apiUrl, taskData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
        throw error;
    }
};

// Função para atualizar uma tarefa existente
export const updateTask = async (id, taskData) => {
    try {
        const token = getToken();
        const response = await axios.put(`${apiUrl}/${id}`, taskData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar a tarefa com ID ${id}:`, error);
        throw error;
    }
};

// Função para deletar uma tarefa
export const deleteTask = async (id) => {
    try {
        const token = getToken();
        await axios.delete(`${apiUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error(`Erro ao deletar a tarefa com ID ${id}:`, error);
        throw error;
    }
};