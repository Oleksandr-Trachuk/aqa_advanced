function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
    if (!res.ok) throw new Error(`Todo HTTP ${res.status}`);
    return res.json();
  });
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then((res) => {
    if (!res.ok) throw new Error(`User HTTP ${res.status}`);
    return res.json();
  });
}
Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    console.log('Promise.all → todo:', todo);
    console.log('Promise.all → user:', user);
  })
  .catch((err) => {
    console.error('Promise.all error:', err.message);
  });

Promise.race([getTodo(), getUser()])
  .then((first) => {
    console.log('Promise.race → first result:', first);
  })
  .catch((err) => {
    console.error('Promise.race error:', err.message);
  });
