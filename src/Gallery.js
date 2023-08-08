export default function Gallery() {
    return (
      <section>
        <h1>Esculturas inspiradoras</h1>
        <Image />

        <Image />
        <Image/>
      </section>
    );
  }
  
  function Image() {
    return (
      <img
        src="https://i.imgur.com/ZF6s192.jpg"
        alt="'Floralis Genérica' de Eduardo Catalano: una gigantesca escultura floral metálica con pétalos reflectantes"
      />
    );
  }
  