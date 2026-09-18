import type { ReactNode } from "react";

interface FeatureContainerProps {
  children: ReactNode;
  title: string;
}

export function FeatureContainer({ children, title }: FeatureContainerProps) {
  return (
    <div className="border">
      {title && (
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
          <h3 className="text-center text-lg font-bold text-gray-800">{title}</h3>
        </div>
      )}

      <div className="p-6">{children}</div>
    </div>
  );
}
