import classes from "./SaleProduct.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../../products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

function SaleProductList() {
  const products = useSelector((state) => state.products.products);
  const saleProducts = products.filter((product) => product.discont_price);
  return (
    <section className={classes.saleProductSamples}>
      <div className={classes.title}>
        <h4>Sale</h4>
        <div className={classes.line}></div>
        <Link to="/sales">All sales</Link>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <ul className={classes.saleProductWrapper}>
          {saleProducts.map((saleProduct) => {
            return (
              <SwiperSlide key={saleProduct.id}>
                <ProductCard key={saleProduct.id} {...saleProduct} />
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
    </section>
  );
}
export default SaleProductList;
