import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="products">{children}</div>

      <style jsx>{`
        .products {
          max-width: 1240px;
          margin: 0 auto;
          padding: 30px;
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
}