import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TopProductCard from "../components/TopProductCard";
import { Product } from "../db/schema/products";

const Home = ({ allProducts }: { allProducts: Product[] }) => {
  return (
    <Layout title={"Welcome"}>
      <Navigation />
      <main class="p-2 my-2">
        <h2 class="text-2xl uppercase text-center mb-5">Top Products</h2>
        <section class="grid grid-cols-4 gap-3">
          {allProducts.map((product) => (
            <TopProductCard product={product} />
          ))}
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
export default Home;
