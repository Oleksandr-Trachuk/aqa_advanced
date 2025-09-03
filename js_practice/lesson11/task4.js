class Api {
  static async getJson(url, label) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${label} HTTP ${res.status}`);
    return res.json();
  }

  static getTodo() {
    return Api.getJson("https://jsonplaceholder.typicode.com/todos/1", "Todo");
  }

  static getUser() {
    return Api.getJson("https://jsonplaceholder.typicode.com/users/1", "User");
  }
}

class Runner {
  static withThenCatch() {
    const t = Api.getTodo();
    const u = Api.getUser();

    Promise.all([t, u])
      .then(([todo, user]) => {
        console.log("Runner all (then):", { todo, user });
      })
      .catch(err => console.error("Runner all error:", err.message));

    Promise.race([t, u])
      .then(first => console.log("Runner race (then):", first))
      .catch(err => console.error("Runner race error:", err.message));
  }

  static async withAsyncAwait() {
    try {
      const [todo, user] = await Promise.all([Api.getTodo(), Api.getUser()]);
      console.log("Runner all (await):", { todo, user });
    } catch (e) {
      console.error("Runner all (await) error:", e.message);
    }

    try {
      const first = await Promise.race([Api.getTodo(), Api.getUser()]);
      console.log("Runner race (await):", first);
    } catch (e) {
      console.error("Runner race (await) error:", e.message);
    }
  }
}

// demo
Runner.withThenCatch();
Runner.withAsyncAwait();