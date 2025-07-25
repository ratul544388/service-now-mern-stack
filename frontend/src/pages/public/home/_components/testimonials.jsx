import { Marquee, MarqueeItem } from "@/components/marquee";
import { reviews } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=24");
      const result = data.results.map((r, i) => ({
        id: r.login.uuid,
        username: `@${r.name.first.toLowerCase()}_${r.name.last.toLowerCase()}`,
        image: r.picture.thumbnail,
        comment: reviews[i % reviews.length],
      }));

      return result;
    },
  });

  if (isError) return <p>Failed to load testimonials.</p>;

  return (
    <div className="w-full">
      <motion.h2
        className="mb-8 text-center text-3xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>
      {isPending && <span className="loader mx-auto block" />}
      <Reviews reviews={data} slice={[1, 8]} />
      <Reviews reviews={data} slice={[9, 16]} position="right" />
      <Reviews reviews={data} slice={[17, 24]} />
    </div>
  );
};

const Reviews = ({ reviews, slice, position = "left" }) => {
  return (
    <Marquee position={position}>
      {reviews?.slice(...slice).map((user) => (
        <MarqueeItem
          key={user.id}
          className="bg-background hover:bg-primary/5 flex w-[300px] flex-col gap-5 rounded-lg border p-5 shadow-md transition-colors"
        >
          <p className="text-sm">{user.comment}</p>
          <div className="mt-auto flex items-center gap-3">
            <img
              src={user.image}
              alt={user.username}
              className="h-10 w-10 rounded-full"
            />
            <p className="font-semibold">{user.username}</p>
          </div>
        </MarqueeItem>
      ))}
    </Marquee>
  );
};

export default Testimonials;
