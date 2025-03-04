import React from 'react';

interface TagProps {
  tag: string;
  onClick?: () => void;
  category?: string;
}

export function ProjectTag({ tag, onClick, category }: TagProps) {
  // Determine color based on tag category or content
  const getTagColor = () => {
    if (tag.toLowerCase().includes('react')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    if (tag.toLowerCase().includes('vue')) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (tag.toLowerCase().includes('angular')) return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    if (tag.toLowerCase().includes('python')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    if (tag.toLowerCase().includes('node')) return 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300';
    if (tag.toLowerCase().includes('mongo')) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
    if (tag.toLowerCase().includes('firebase')) return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    if (tag.toLowerCase().includes('tensor') || tag.toLowerCase().includes('ai')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    if (tag.toLowerCase().includes('tailwind')) return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300';
    
    // Default color
    return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300';
  };
  
  return (
    <span 
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
      ${getTagColor()} 
      transition-all duration-200 ease-in-out 
      ${onClick ? 'cursor-pointer hover:scale-105 hover:shadow-md' : ''}
      border border-transparent dark:border-neutral-700/30`}
    >
      {tag}
    </span>
  );
}