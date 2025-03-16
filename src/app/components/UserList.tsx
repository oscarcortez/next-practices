import { useUsersQuery } from "@/app/graphql/generated/graphql";

export default function UserList() {
  const { data } = useUsersQuery();
  console.log(data)
  return (
    <ul>
      {data?.users.map(user => (
        <li key={user.id}>
          <a href={`/user/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}