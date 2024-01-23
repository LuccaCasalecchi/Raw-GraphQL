import { useState,FormEvent } from "react";
import { gql,useMutation} from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function NewUserForm() {
  const [name,setName] = useState('');
  const [createUser,{data}] = useMutation(CREATE_USER);

  async function handleCreateUser(event:FormEvent){
    event.preventDefault();
    console.log(name);

    if(!name) return;

    await createUser({variables:{name}});

    console.log(data)

  }

  return (
    <form onSubmit={handleCreateUser}>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button type="submit">Create User</button>
    </form>
  )
}