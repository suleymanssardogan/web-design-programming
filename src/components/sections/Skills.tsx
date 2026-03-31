export default function Skills() {
  const skills = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Git"];
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Yetenekler
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
