import React from "react";
import Card from "./components/card";
import Count from "./components/count";
import Footer from "./components/footer";
import Why from "./components/Why";
import "./index.css";
function App() {
  return (
    <div>
      <a href="https://lapage.website">
        <h1 className="flex justify-center">Lapage</h1>
      </a>
      <div className="mx-3 my-10">
        <h1 className="flex justify-center text-lg">Tahukah Anda?</h1>
        <Why />
      </div>
      <h1 className="flex justify-center text-lg text-center">
        Perbesar peluang dengan website milikmu!
      </h1>
      <h1 className="flex justify-center text-lg">
        Massive Website<span className="bg-red-600">Sale!</span>
      </h1>

      <Count />
      <Card
        wa="https://wa.link/gyiqrv"
        harga="Rp 1.5Jt"
        imageSrc="/1.webp"
        imageAlt="Custom Code Website"
        title="Custom Code Website"
        description="Website dibuat dengan bahasa pemrograman"
      />
      <Card
        wa="https://wa.link/h9g3s4"
        harga="Rp 700rb"
        imageSrc="/2.webp"
        imageAlt="Web Builder Website"
        title="Web Builder Website"
        description="Website berbasis web builder seperti WordPress, Webly, Wix, dll"
      />
      <Card
        wa="https://wa.link/mmok7a"
        harga="Rp 500rb"
        imageSrc="/4.webp"
        imageAlt="Web Design"
        title="UI/UX Design and Research"
        description="Kami akan membantu melakukan riset desain, desain, hingga user test."
      />
      <Card
        wa="https://wa.link/lm4cxj"
        harga="Rp 200rb"
        imageSrc="/3.webp"
        imageAlt="Web Maintenance"
        title="Web Maintenance"
        description="Kami menerima jasa untuk membantu bug fixing, tambah fitur, update web, dll"
      />
      <div className="text-white m-3 backdrop-blur-xl bg-white/30 rounded-lg p-3 justify-between text-center border">
        <h2 className=" text-lg font-bold font-sans ">
          {" "}
          Masih ragu? Gratis ngobrol konsultasi kok{" "}
        </h2>
        <a href="https://wa.link/cvlbki">
          <button className="btn bg-green-500 rounded-lg m-5">WA kami</button>
        </a>
        <a href="https://lapage.website/email">
          <button className="btn bg-blue-500 rounded-lg m-5">Email aja</button>
        </a>
      </div>
      <div className="text-white m-3 backdrop-blur-xl bg-white/30 rounded-lg p-3">
        <h1 className="text-lg">Sedikit info</h1>
        <p>
          Kenapa kami tidak menentukan paket? Karena kami percaya bahwa
          kebutuhan website tiap orang berbeda. Oleh karena itu, harga akan
          menyesuaikan kebutuhan fitur, tampilan, teknologi, dan variabel lain.
          Harapannya dengan begitu konsumen akan mendapatkan produk sesuai
          dengan apa yang diekspektasikan.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
