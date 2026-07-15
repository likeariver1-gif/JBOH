import Image from "next/image";

const profile = {
  name: "홍길동",
  initial: "홍",
  role: "Frontend Developer",
  tagline: "아이디어를 아름다운 경험으로 만듭니다",
  bio: "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 깔끔한 UI, 견고한 코드, 그리고 끊임없는 학습으로 더 나은 제품을 만들어 갑니다.",
  about:
    "React 생태계를 중심으로 웹 개발을 학습하고 있습니다. 새로운 기술을 빠르게 익히고, 팀과 소통하며 함께 성장하는 개발자가 되고 싶습니다.",
};

const highlights = [
  { label: "경력", value: "2+ Years" },
  { label: "프로젝트", value: "10+" },
  { label: "기술 스택", value: "Full-stack" },
];

const skills = [
  { name: "TypeScript", level: 90 },
  { name: "React / Next.js", level: 88 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "Git & CI/CD", level: 80 },
];

const projects = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js App Router와 Tailwind CSS로 제작한 반응형 개인 소개 페이지입니다.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    accent: "from-violet-500/20 to-indigo-500/5",
  },
  {
    title: "팀 협업 프로젝트",
    description:
      "Git 브랜치 전략과 코드 리뷰를 활용해 팀원들과 함께 개발한 풀스택 웹 앱입니다.",
    tags: ["React", "TypeScript", "REST API"],
    accent: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "UI 컴포넌트 라이브러리",
    description:
      "재사용 가능한 디자인 시스템 컴포넌트를 설계하고 문서화한 사이드 프로젝트입니다.",
    tags: ["Storybook", "Accessibility"],
    accent: "from-emerald-500/20 to-teal-500/5",
  },
];

const contacts = [
  { label: "GitHub", href: "https://github.com", icon: "⌘" },
  { label: "이메일", href: "mailto:hello@example.com", icon: "✉" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
];

const navItems = [
  { label: "소개", href: "#about" },
  { label: "기술", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락", href: "#contact" },
];

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-medium tracking-[0.2em] text-violet-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#030712] text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] animate-pulse-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-8">
        <span className="text-sm font-semibold tracking-tight text-white">
          {profile.name}
          <span className="text-violet-400">.</span>
        </span>
        <nav className="hidden gap-8 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24 sm:px-8">
        <section className="grid min-h-[80vh] items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              프로젝트 진행 중
            </div>

            <h1 className="animate-fade-up stagger-1 mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              안녕하세요,
              <br />
              <span className="gradient-text animate-shimmer">
                {profile.name}
              </span>
              입니다
            </h1>

            <p className="animate-fade-up stagger-2 mb-4 max-w-xl text-xl font-medium text-zinc-300">
              {profile.role} · {profile.tagline}
            </p>

            <p className="animate-fade-up stagger-3 mb-10 max-w-lg leading-relaxed text-zinc-400">
              {profile.bio}
            </p>

            <div className="animate-fade-up stagger-4 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 hover:shadow-violet-500/40"
              >
                프로젝트 보기
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
              >
                연락하기
              </a>
            </div>
          </div>

          <div className="animate-fade-up stagger-5 relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-cyan-500/20 to-emerald-500/20 blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-violet-500/20">
              <Image
                src="/positano.jpg"
                alt="이탈리아 포지타노 해안의 colorful cliffside village"
                width={800}
                height={1000}
                priority
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">Positano</p>
                  <p className="text-sm text-zinc-300">Amalfi Coast, Italy</p>
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  ✦ Inspiration
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16">
          <SectionTitle eyebrow="About" title="저를 소개합니다" />
          <div className="glass-card mb-6 overflow-hidden rounded-2xl">
            <div className="relative h-48 sm:h-64">
              <Image
                src="/positano.jpg"
                alt="포지타노 전경"
                fill
                className="object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/40 to-transparent" />
              <div className="absolute inset-0 flex items-center px-8">
                <p className="max-w-md text-lg leading-relaxed text-zinc-200">
                  아름다운 것에서 영감을 받습니다. 포지타노처럼 단순하지만
                  강렬한 경험을 코드로 만들어 가고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-6 transition-colors hover:border-white/15"
              >
                <p className="mb-1 text-3xl font-bold gradient-text">
                  {item.value}
                </p>
                <p className="text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
            <div className="glass-card col-span-full rounded-2xl p-8 sm:col-span-3">
              <p className="text-lg leading-relaxed text-zinc-300">
                {profile.about}
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-16">
          <SectionTitle eyebrow="Skills" title="기술 스택" />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card group rounded-2xl p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-violet-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700 group-hover:from-violet-400 group-hover:to-emerald-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-16">
          <SectionTitle eyebrow="Projects" title="주요 프로젝트" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.title}
                className={`glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/10`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24 py-16">
          <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10"
            />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                함께 일해요
              </h2>
              <p className="mx-auto mb-8 max-w-md text-zinc-400">
                새로운 프로젝트, 협업, 또는 그냥 인사도 환영합니다. 아래
                채널로 편하게 연락해 주세요.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:border-violet-500/40 hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/10"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white">
                      {contact.icon}
                    </span>
                    <span className="font-medium text-white">
                      {contact.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js
      </footer>
    </div>
  );
}
