const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2">
              <span className="text-sm text-slate-400 font-light">
                All rights reserved{" "}
              </span>{" "}
              © 2024 by Nikesh Dhakal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
