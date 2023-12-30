const Navigation = () => {
  return (
    <header class="w-full mx-auto my-2 p-2">
      <div class="block lg:hidden">
        <button id="menuToggle" class="text-gray-800 focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div class="hidden lg:flex lg:items-center lg:w-auto">
        <ul class="flex flex-col lg:flex-row lg:ml-auto lg:space-x-4">
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Shop
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Products
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Login
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <div class="lg:hidden flex lg:items-center lg:w-auto">
        <ul class="flex flex-col lg:flex-row lg:ml-auto lg:space-x-4">
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Shop
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Products
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Login
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-800 hover:text-blue-500">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
