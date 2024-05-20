'use client';

import { useEffect } from 'react';

export default function User() {
  const fetchUser = async () => {
    const response = await fetch('http://localhost:3000/user');
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User</h1>
    </div>
  );
}
