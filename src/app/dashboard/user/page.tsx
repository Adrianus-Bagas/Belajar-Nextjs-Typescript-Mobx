"use client";
import Link from "next/link";
import { useState } from "react";

interface UserId {
  userId: string;
}

function User() {
  const [idObject, setIdObject] = useState<UserId>({ userId: "" });
  return (
    <>
      <h1 className="text-center">User</h1>
      <div className="flex justify-center items-center">
        <h2>Ketik User ID</h2>
        <input
          type="string"
          value={idObject.userId}
          onChange={(event) => setIdObject({ userId: event.target.value })}
          className="input input-bordered w-full max-w-xs"
        />
        <Link
          href={`/dashboard/user/${idObject.userId}`}
          className="p-3 m-1 bg-yellow-300"
        >
          Menuju detail user
        </Link>
      </div>
    </>
  );
}

export default User;
