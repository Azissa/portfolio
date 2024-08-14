// src/api/github.ts
import axios from 'axios';

const GITHUB_USERNAME = 'Azissa';

export const fetchContributions = async () => {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
    return response.data;
};
