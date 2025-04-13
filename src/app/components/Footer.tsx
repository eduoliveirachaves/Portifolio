import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent border-b-transparent ">
      <div className="container p-10 flex justify-between items-center mx-auto">
        <Image
          src={"/images/logo-removebg-preview.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <p className="text-slate-600 ">All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
