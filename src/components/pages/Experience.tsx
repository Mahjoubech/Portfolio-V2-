const experiences = [
  {
    period: "2020 - 2021",
    title: "Web Developer - Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, cumque asperiores ducimus hic quibusdam.",
  },
  {
    period: "2021 - 2022",
    title: "Web Developer - Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, cumque asperiores ducimus hic quibusdam.",
  },
  {
    period: "2022 - 2023",
    title: "Web Developer - Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum fuga in impedit tenetur ab? Nulla sed alias in animi, cumque asperiores ducimus hic quibusdam.",
  },
];

export default function Experience() {
  return (
    <div className="h-full">
      <h2 className="mb-8 text-3xl font-bold text-slate-800">
        Work Experience
      </h2>

      <div className="relative ml-3 border-l-2 border-sky-300 pl-6">
        {experiences.map((item, index) => (
          <div key={index} className="relative mb-8">
            <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-sky-500"></span>

            <p className="mb-1 text-sm font-semibold text-sky-500">
              {item.period}
            </p>

            <h3 className="text-lg font-bold text-slate-800">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}