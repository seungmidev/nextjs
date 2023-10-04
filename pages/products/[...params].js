import Seo from "@/components/Seo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Detail({ results }) {
  console.log(results)
  const images = results.images;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="products__detail">
      <Seo title={results.title} />
      <Slider {...settings}>
        {images.map((image, index) => (
          <img src={image} alt={image} key={index} />
        ))}
      </Slider>
      <dl>
        <dt>
          <h3>{results.title}</h3>
        </dt>
        <dd>{results.description}</dd>
        <dd>{results.brand} / {results.category}</dd>
        <dd>£{results.price} / ⭐️ {results.rating}</dd>
      </dl>

      <style jsx>{`
        .products__detail {
          max-width: 500px;
          margin: 0 auto;
        }
        dl {
          padding-top: 50px;
        }
        dd {
          margin-top: 10px;
        }
        img {
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps({params:{ params }}) {
  const id = params[1];
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const results = await res.json();
  return {
    props: {
      results,
    }
  }
}