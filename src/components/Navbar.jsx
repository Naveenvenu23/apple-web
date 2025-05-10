function Navbar() {
  return (
    <>
      <nav className="w-full text-white p-4" style={{ backgroundColor: '#0F164D', color: "white" }}>
        <ul className="hidden lg:flex space-x-8 justify-center w-full">
          <li><i className="fa-brands fa-apple"></i></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">TV & Home</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Support</a></li>
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li><i className="fa-solid fa-bag-shopping"></i></li>
        </ul>
        <div className="flex justify-between p-1">    
          <div className="flex md:hidden">
          <li><i className="fa-brands fa-apple fa-2xl"></i></li>
        </div>
          <div className="flex md:hidden">
            <li><i className="fa-solid fa-bag-shopping"></i></li>
            <li><i class="fa-solid fa-bars"></i></li>
          </div>
          </div>
      </nav>
      <div className=" p-4 text-white text-center text-sm" style={{ backgroundColor: '#10174E', color: "white" }}>
        <a href="#" className="hidden lg:block">Get iPhone 16  from just ₹54,900.00/mo. for up to 12 mo.‡ with No Cost EMI and instant cashback. <span className="text-blue-700">Buy ></span></a>
      </div>

    </>
  );
}

export default Navbar;
