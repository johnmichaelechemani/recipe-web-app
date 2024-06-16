export function getUsers() {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  console.log(storedUsers);

  return {
    storedUsers,
  };
}
