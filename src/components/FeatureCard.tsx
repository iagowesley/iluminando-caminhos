import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  image
}: FeatureCardProps) {
  return (
    <div className="group glass-card overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        {icon && (
          <div className="mb-4 text-church-blue flex items-center justify-center w-12 h-12 rounded-lg bg-church-gray">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-3 text-church-darkBlue">{title}</h3>

        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
