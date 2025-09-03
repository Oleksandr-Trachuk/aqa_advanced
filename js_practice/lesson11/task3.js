async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!res.ok) throw new Error(`Todo HTTP ${res.status}`);
  return res.json();
}

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!res.ok) throw new Error(`User HTTP ${res.status}`);
  return res.json();
}

(async () => {
  try {
    // all
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    console.log("await all → todo:", todo);
    console.log("await all → user:", user);
  } catch (e) {
    console.error("await all error:", e.message);
  }

  try {
    // race
    const first = await Promise.race([getTodo(), getUser()]);
    console.log("await race → first result:", first);
  } catch (e) {
    console.error("await race error:", e.message);
  }
})();