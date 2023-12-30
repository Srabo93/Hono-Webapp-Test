const TopProductCard = ({ post }) => {
  return (
    <a
      class="hover:opacity-100 bg-white opacity-90 cursor-pointer"
      href={`/some-route/${post.id}`}
    >
      <div class="relative my-2">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <img
          src={post.image}
          alt="Product"
          class="w-full h-full object-cover rounded-lg"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-start text-white pl-2">
          <p class="text-2xl">{post.title}</p>
          <p class="text-sm font-bold mb-2">${post.price}</p>
        </div>
      </div>
    </a>
  );
};

export default TopProductCard;
