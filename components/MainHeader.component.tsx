import Header from "./Header.component";

const MainHeader = () => {
  return (
    <header className="flex">
      <div className="container flex items-center justify-between px-4 lg:px-8 py-4 mx-auto">
        <Header />
      </div>
    </header>
  );
};

export default MainHeader;
