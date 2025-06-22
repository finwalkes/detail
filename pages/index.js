import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1939] via-[#142047] to-[#432371] text-white">
      <Head>
        <title>Bagus Nexus – AI Portfolio</title>
        <meta name="description" content="Bagus Wahyu Pratomo – AI Enthusiast, Web Developer, Cyber Fantasy Storyteller" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">
        {/* Hero */}
        <section className="flex flex-col items-center gap-4 text-center">
          <img src="/profile.png" className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg mb-4" alt="Bagus Nexus Avatar" />
          <h1 className="text-4xl font-bold drop-shadow-xl">Bagus Nexus</h1>
          <p className="text-lg">AI Enthusiast • Web Wizard • Storyteller</p>
          <div className="flex gap-3 justify-center mt-2">
            <a href="https://www.linkedin.com/in/baguswahyupratomo" className="underline">LinkedIn</a>
            <a href="https://github.com/bgswahyup" className="underline">GitHub</a>
            <a href="/cv-bagus-nexus.pdf" className="underline">Download CV</a>
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Tentang Saya</h2>
          <p>
            Hi, saya <span className="font-semibold">Bagus Wahyu Pratomo</span>, seorang AI enthusiast, developer, dan storyteller dengan passion besar di dunia cyber dan fantasi. Selalu tertarik pada tantangan baru, saya suka menciptakan solusi kreatif, membangun web yang aman, serta menulis cerita yang memicu imajinasi.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Keahlian</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center">
            <li>AI Engineering</li>
            <li>Web Development</li>
            <li>Prompt Design</li>
            <li>Storytelling</li>
            <li>Cyber Branding</li>
            <li>Security First</li>
          </ul>
        </section>

        {/* Portfolio */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Highlight Project</h2>
          <div className="flex flex-col gap-2">
            <div className="bg-[#292050] rounded-xl p-4 shadow">Portofolio AI — Next.js, Tailwind, Midjourney</div>
            <div className="bg-[#292050] rounded-xl p-4 shadow">Chatbot Fantasy — OpenAI + Story Script</div>
            <a href="https://notion.site/your-portfolio" className="underline text-cyan-400 mt-2">Lihat semua</a>
          </div>
        </section>

        {/* Analytics */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Insight</h2>
          <p>✨ 30,000+ visitors telah mengunjungi portofolio ini sejak 2023!</p>
          {/* Bisa diintegrasi dengan Vercel Analytics/Umami untuk live insight */}
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <form action="/api/contact" method="POST" className="flex flex-col gap-2">
            <input className="p-2 rounded bg-[#181634]" name="email" type="email" placeholder="Email kamu" required />
            <textarea className="p-2 rounded bg-[#181634]" name="message" placeholder="Pesan" required></textarea>
            <button className="bg-cyan-500 hover:bg-cyan-700 rounded p-2 font-bold" type="submit">Kirim</button>
          </form>
        </section>
      </main>
      <footer className="text-center text-sm py-4 opacity-70">© 2025 Bagus Nexus</footer>
    </div>
  );
}
