const Layout = () => {
  return (
    <>
      <div className="bg-cyan-700 p-2 rounded-r-md fixed top-80 z-50">
        <nav>
          <ul className="space-y-3">
            <li>
              <a href="#">
                <img src="/assets/icons/home.png" alt="Home" className="w-8" />
              </a>
            </li>
            <li>
              <a href="#about">
                <img src="/assets/icons/profile.png" alt="Home" className="w-8"/>
              </a>
            </li>
            <li>
              <a href="#techstack">
                <img src="/assets/icons/project-management.png" alt="Home" className="w-8"/>
              </a>
            </li>
            <li>
              <a href="#project">
                <img src="/assets/icons/project-management (1).png" alt="Home" className="w-8"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Layout;
