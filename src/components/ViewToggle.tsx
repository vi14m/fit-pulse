
import React from 'react';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
  className?: string;
}

const ViewToggle = ({ isDarkMode, onToggle, className }: ViewToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className={cn("rounded-full", className)}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-amber-300" />
      ) : (
        <Moon className="h-5 w-5 text-fitPulse-purple" />
      )}
    </Button>
  );
};

export default ViewToggle;
