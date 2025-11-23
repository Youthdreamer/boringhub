const MAIN_TITLE = '我很无聊';
const SUB_TITLE = 'I AM SO BORED';
const REPO_URL = 'https://github.com/Youthdreamer/boringhub';
const FOOTER_TEXT = '网站施工中';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 font-sans">
      {/* Hero Section */}
      <section>
        <div className="flex  flex-col items-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-gray-100 font-extrabold leading-none mb-0">
            {MAIN_TITLE}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 font-semibold tracking-widest md:tracking-[0.8em] lg:tracking-[1.2em] leading-5 ">
            {SUB_TITLE}
          </h2>
        </div>
      </section>

      <footer className="mt-20 flex flex-col items-center text-gray-500">
        <p className="text-xl font-bold mb-1">{FOOTER_TEXT}</p>

        <div className="flex items-center text-sm">
          <p>施工地址：</p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            GitHub 仓库
          </a>
        </div>
      </footer>
    </main>
  );
}
