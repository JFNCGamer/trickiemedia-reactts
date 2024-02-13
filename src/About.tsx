const About = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <>
      <a id="quem_somos"></a>
      <section className="flex flex-col md:flex-row items-center m-10 justify-center mt-16">
        <h2 className=" m-5 text-4xl md:text-7xl text-center font-poppins">Quem somos</h2>
        <p className=" m-5 text-xl max-w-xl text-center">{lorem}</p>
      </section>
    </>
  );
};

export default About;
