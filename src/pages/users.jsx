import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    // const res = await fetch("http://localhost:5000");
    // const data = await res.json();
    const data = await axios.get("http://localhost:5000");
    console.log("data", data.data);
    setUsers(data.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  async function deleteUser(id) {
    await axios.delete(`http://localhost:5000/users/${id}`);
    const singleUser = users.filter((mereusers) => mereusers._id !== id);
    setUsers(singleUser);
    toast.success("User removed");
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Link to="/users/create">Add User</Link>
      <div className="flex justify-center flex-wrap gap-4">
        {users.map((mereusers) => {
          return (
            <>
              <div className="card glass w-96" key={mereusers._id}>
                <figure>
                  <img src={mereusers.avatar} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{mereusers.firstName}</h2>
                  <p>{mereusers.lastName}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/user/${mereusers._id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-error"
                      onClick={() => deleteUser(mereusers._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
