'use client';

import { useEffect } from 'react';

export default function Admin() {
  const fetchAdmin = async () => {
    const response = await fetch('http://localhost:3000/admin');
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
