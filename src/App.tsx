import './App.css'

const App = () => {
  const boldBorder = { border: '10px solid black' };
  const neoShadow = { boxShadow: '15px 15px 0px 0px #000' };

  return (
    <div
      className="min-h-screen font-black selection:bg-white selection:text-black overflow-x-hidden"
      style={{ backgroundColor: '#FF00FF', color: 'black', fontFamily: '"Arial Black", sans-serif' }}
    >
      <nav
        className="flex justify-between items-center bg-[#00FFFF] sticky top-0 z-[100]"
        style={{ ...boldBorder, padding: '20px' }}
      >
        <div className="text-5xl sm:text-7xl tracking-tighter">MAXI.LAB</div>
        <button
          className="bg-white hover:bg-black hover:text-white transition-all uppercase"
          style={{ ...boldBorder, ...neoShadow, padding: '10px 30px', fontSize: '1.5rem', fontWeight: '900' }}
        >
          Menu
        </button>
      </nav>

      <header
        className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
        style={{ ...boldBorder, backgroundColor: '#FFFF00', padding: '40px', borderTop: 'none' }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none text-[25rem] leading-none break-all font-black select-none">
          NOISE NOISE NOISE
        </div>

        <h1
          className="uppercase italic z-10 text-white"
          style={{ fontSize: '15vw', lineHeight: '0.8', textShadow: '10px 10px 0px #FF00FF', margin: 0 }}
        >
          Bigger <br /> Is <br /> Better
        </h1>

        <div className="mt-10 flex flex-col md:flex-row gap-10 items-start z-10">
          <div
            className="bg-white -rotate-2 hover:rotate-0 transition-transform"
            style={{ ...boldBorder, ...neoShadow, padding: '30px', maxWidth: '600px' }}
          >
            <p style={{ fontSize: '2.5rem', lineHeight: '1', margin: 0, textTransform: 'uppercase' }}>
              Minimalism is a failure of imagination. We want everything, everywhere, all at once.
            </p>
          </div>
          <div
            className="rounded-full flex items-center justify-center animate-bounce"
            style={{ ...boldBorder, backgroundColor: '#FF0000', width: '200px', height: '200px', fontSize: '100px', color: 'white' }}
          >
            !
          </div>
        </div>
      </header>

      <section
        className="bg-black py-10 flex overflow-hidden whitespace-nowrap"
        style={{ borderBottom: '10px solid black' }}
      >
        <div className="animate-marquee flex gap-10" style={{ color: '#00FFFF', fontSize: '8vw', textTransform: 'uppercase', fontWeight: '900' }}>
          <span>LOUD • AGGRESSIVE • UNAPOLOGETIC • MAXIMALIST • </span>
          <span>LOUD • AGGRESSIVE • UNAPOLOGETIC • MAXIMALIST • </span>
        </div>
      </section>

      <main
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ backgroundColor: '#0000FF' }}
      >
        {[
          { c: '#00FF00', t: 'CHAOS' },
          { c: '#FF4500', t: 'GLITCH' },
          { c: '#FFFFFF', t: 'VIBE' }
        ].map((item, i) => (
          <div
            key={i}
            className="group hover:bg-black transition-colors"
            style={{ ...boldBorder, backgroundColor: item.c, padding: '40px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div style={{ fontSize: '6rem', opacity: 0.3 }}>0{i + 1}</div>
            <h2 className="group-hover:text-white transition-all" style={{ fontSize: '5rem', margin: 0, textTransform: 'uppercase' }}>{item.t}</h2>
          </div>
        ))}
      </main>

      <footer
        className="text-center relative overflow-hidden"
        style={{ backgroundColor: '#FF0000', padding: '100px 20px', borderTop: '10px solid black' }}
      >
        <div
          className="uppercase tracking-tighter text-white"
          style={{ fontSize: '18vw', lineHeight: '0.7', fontWeight: '900', marginBottom: '40px' }}
        >
          Get <br /> Loud
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {['INSTA', 'TWIT', 'MAIL'].map(link => (
            <a
              href="#"
              key={link}
              className="bg-white hover:bg-black hover:text-white transition-all"
              style={{ ...boldBorder, ...neoShadow, padding: '20px 40px', fontSize: '2rem', textDecoration: 'none', color: 'black' }}
            >
              {link}
            </a>
          ))}
        </div>
        <p className="mt-20 text-2xl font-black bg-black text-yellow-400 p-4 inline-block rotate-1">
          © 2026 MAXI.CORE // NO LIMITS
        </p>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        body { margin: 0; padding: 0; cursor: crosshair; }
      `}} />
    </div>
  );
};

export default App;