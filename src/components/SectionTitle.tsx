
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  accent = false
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-12`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${accent ? 'text-church-blue' : ''}`}>
        {title}
      </h2>
      
      {accent && (
        <div className={`h-1 w-20 bg-church-accent mt-4 mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      )}
      
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
