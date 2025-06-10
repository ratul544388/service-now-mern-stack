export const formatUserResponse = (user) => {
  return {
    id: user._id,
    email: user.email,
    name: user.name,
    imageUrl: user.imageUrl,
  };
};
