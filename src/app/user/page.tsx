"use client"; 

import { useUsersQuery } from "@/app/graphql/generated/graphql";


export default function Page() {

  const { data, loading, error } = useUsersQuery();
  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)

  if (error) {
    console.error('Error details:', {
      message: error.message,
      graphQLErrors: error.graphQLErrors,
      networkError: error.networkError,
    });
    return <p>Error: {error.message}</p>;
  }
  
  return (
    <>
      <h1>Users</h1>
    </>
  )
}