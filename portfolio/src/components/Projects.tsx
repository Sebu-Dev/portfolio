import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.tsx";

function Projects() {
  const { translations } = useLanguage();

  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="m-20 text-center text-4xl"
      >
        {translations.PROJECTS_HEADLINE}
      </motion.h2>
      <div>
        {translations.PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className="mb-6 rounded"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                >
                  {tech}
                </span>
              ))}
              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-bold text-cyan-500 hover:underline"
                  >
                    {project.visit}
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
