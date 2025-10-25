interface ISectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: ISectionProps) {
  return (
    <section id={id} className="py-16 md:py-20 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display">
          <span className="text-teal-400">{title.split(" ")[0]}</span>
          &nbsp;
          <span className="text-gray-200">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
}
