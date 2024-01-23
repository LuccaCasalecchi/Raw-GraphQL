import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USER);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  console.log(data);

  return (
    <div>
       <ul>
      {!data?.users || data.users.length === 0
        ? <h1>Not Found</h1>
        : data.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
      }
    </ul>

    <NewUserForm/>
    </div>
  );
}

export default App;
