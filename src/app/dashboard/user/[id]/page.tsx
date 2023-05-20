import { getUserById } from "@/service/UserService";

async function UserById({ params: { id } }: { params: { id: string } }) {
  const dataUser = getUserById(id);
  const user = await Promise.resolve(dataUser);
  return (
    <>
      <h1 className="text-center">
        Halo {user.firstName + " " + user.lastName + " " + user.maidenName}
      </h1>
    </>
  );
}

export default UserById;
