import { placeholderUserImage } from "@/constants";
import useAuthStore from "@/hooks/use-auth-store";

const UserInfo = () => {
  const {user} = useAuthStore()
  if(!user) return;
  const { name, imageUrl, email } = user;
  const list = [
    {
      key: "Name",
      value: name,
    },
    {
      key: "Email",
      value: email,
    },
  ];
  return (
    <div className="flex flex-col w-full md:flex-row gap-4">
      <div className="min-w-40 max-w-40 h-48 rounded-md overflow-hidden bg-secondary/40">
        <img
          src={imageUrl || placeholderUserImage}
          alt={name}
          className="object-cover size-full"
        />
      </div>
      <ul>
        {list.map(({ key, value }) => (
          <li key={key} className="flex gap-3">
            <p className="font-medium text-muted-foreground">{key}: </p>
            <p className="line-clamp-1 font-medium">{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;