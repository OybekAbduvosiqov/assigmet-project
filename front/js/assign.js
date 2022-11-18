const host = "http://localhost:5500";

const signUp = async (e) => {
  const name = document.querySelector("#userName").value;
  const email = document.querySelector("#userEmail").value;
  const password = document.querySelector("#userPassword").value;

  const response = await fetch("http://localhost:5500/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const res = await response.json();

  if (res.isRegistered) {
    console.log("oybek");
    window.location.replace("/kirish");
  }
  console.log("rocket ~ file: assign.js ~ line 18 ~ signUp ~ response", res);
};