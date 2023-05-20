export const getUserById = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) {
        throw new Error("Gagal fetch data")
    }
    return res.json();
};