const BASE_URL = "https://jsonplaceholder.typicode.com";

async function request(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export function fetchTasks() {
  return request("/todos?_limit=10");
}

export function fetchTask(id) {
  return request(`/todos/${id}`);
}

export function createTask(title) {
  return request("/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
      completed: false,
      userId: 1,
    }),
  });
}

export function updateTask(id, changes) {
  return request(`/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteTask(id) {
  return request(`/todos/${id}`, {
    method: "DELETE",
  });
}
