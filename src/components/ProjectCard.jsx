const ProjectCard = ({ title, desc, tech, image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#1f2937] rounded-2xl overflow-hidden border border-slate-700 
                 hover:border-[#01eeff] transition-all duration-300"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover 
                     group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full 
                         bg-[#01eeff]/10 text-[#01eeff]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;