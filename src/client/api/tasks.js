export const getAll = async () => {
    const response = await fetch('/api/tasks');
    return await response.json();
};


const request = (url, method, data) => fetch(url, {
    method: method,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined,
}).catch(function (error) {
    console.log('Request failed', error);
});

export const insert = newItem => request('/api/tasks/', 'put', newItem);

export const remove = (id) => request(`/api/tasks/${id}`, 'delete');

export const change = (buka) => request('/api/tasks/', 'post', buka);
