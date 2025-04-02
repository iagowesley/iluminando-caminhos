interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
  ornate?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  accent = false,
  ornate = false
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-12`}>
      {ornate && (
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-16 bg-church-accent"></div>
          <div className="mx-4 text-church-accent">✝</div>
          <div className="h-px w-16 bg-church-accent"></div>
        </div>
      )}
      
      <h2 className={`
        ${ornate ? 'font-adventist text-3xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-4xl'} 
        font-bold ${accent ? 'text-church-blue' : ''}
      `}>
        {title}
      </h2>
      
      {accent && !ornate && (
        <div className={`h-1 w-20 bg-church-accent mt-4 mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      )}
      
      {accent && ornate && (
        <div className={`flex items-center justify-center mt-4 mb-6 ${centered ? 'mx-auto' : ''}`}>
          <div className="h-px w-12 bg-church-accent"></div>
          <div className="mx-2 text-xs text-church-accent">●</div>
          <div className="h-px w-12 bg-church-accent"></div>
        </div>
      )}
      
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-600 font-adventist ${ornate ? 'font-light' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
