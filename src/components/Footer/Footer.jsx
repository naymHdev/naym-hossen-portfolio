const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <section>
        <p className="mt-16 font-bold text-foreground text-sm text-center italic">
          Built with Next JS 14, Tailwind, Node Js and Material UI by Naym
          Hossen ©{Year}
        </p>
      </section>
    </>
  );
};

export default Footer;
