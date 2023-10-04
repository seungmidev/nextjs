import Seo from '@/components/Seo';
import Link from 'next/link';

export default function Home({ results }) {
  const products = results.products;

  return (
    <div className="products__list">
      <Seo title="Home" />
      {products.map(product => (
        <div className='products__item' key={product.id}>
          <Link href={`products/${product.title}/${product.id}`}>
              <div className="products__thumb">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
          </Link>
        </div> 
      ))}

      <style jsx>{`
        .products__list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 30px;
          max-width: 768px;
          margin: 0 auto;
        }
        .products__item {
          width: calc(50% - 15px);
        }
        h2 {
          font-size: 16px;
          padding: 15px 0 5px;
        }
        p {
          font-size: 14px;
        }
        .products__thumb {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          min-height: 250px;
          padding-top: 250px;
          box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 250px;
          object-fit: cover;
          background-position: 50% 50%;
          transition: transform 1s cubic-bezier(0.2, 0, 0.1, 1), -webkit-transform 1s cubic-bezier(.2, 0, .1, 1);
          transform: rotate(0.001deg);
        }
        .products__item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const results = await res.json();
  return {
    props: {
      results,
    }
  }
}
