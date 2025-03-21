import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";


export default function Home() {
  return (
    <div className="">
      <Container className="py-7">
        <HomeBanner/>
        <ProductGrid/>
      </Container>
    </div>
  );
}
