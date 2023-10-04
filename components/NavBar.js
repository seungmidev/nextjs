import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <h1>
        <Link href="/">Dummyjson - Products</Link>  
      </h1>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 1;
          display: block;
          width: 100%;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
        }
        h1 {
          padding: 20px;
          font-size: 26px;
          text-align: center;
          background-color: #fff;
        }
      `}</style>
    </header>
  )
}