
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ActivitySquare, Award, BarChart, Calendar, 
  Cog, Dumbbell, Home, User 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ViewToggle from './ViewToggle';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface MainNavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  className?: string;
}

const MainNavbar = ({ isDarkMode, onToggleTheme, className }: MainNavbarProps) => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Workouts', href: '/workouts', icon: Dumbbell },
    { label: 'Progress', href: '/progress', icon: BarChart },
    { label: 'Calendar', href: '/calendar', icon: Calendar },
    { label: 'Achievements', href: '/achievements', icon: Award },
    { label: 'Activities', href: '/activities', icon: ActivitySquare },
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Settings', href: '/settings', icon: Cog },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-10 w-full bg-background/80 backdrop-blur-md border-b",
      className
    )}>
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-fitPulse-purple to-fitPulse-blue rounded-lg flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">FitPulse</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition-colors"
              aria-label={item.label}
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
            </Link>
          ))}
          
          <ViewToggle 
            isDarkMode={isDarkMode} 
            onToggle={onToggleTheme} 
            className="ml-2"
          />
          
          <Link 
            to="/profile" 
            className="relative w-8 h-8 rounded-full bg-gradient-to-br from-fitPulse-pink to-fitPulse-purple flex items-center justify-center text-white font-medium ml-2"
            aria-label="Profile"
          >
            A
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-fitPulse-green rounded-full border-2 border-background"></span>
          </Link>
        </div>
        
        {/* Mobile only - show profile and theme toggle in header */}
        <div className="md:hidden flex items-center space-x-2">
          <ViewToggle 
            isDarkMode={isDarkMode} 
            onToggle={onToggleTheme} 
          />
          
          <Link 
            to="/profile" 
            className="relative w-8 h-8 rounded-full bg-gradient-to-br from-fitPulse-pink to-fitPulse-purple flex items-center justify-center text-white font-medium"
            aria-label="Profile"
          >
            A
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-fitPulse-green rounded-full border-2 border-background"></span>
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-around border-t py-2 bg-background/95 fixed bottom-0 left-0 right-0">
        {navItems.slice(0, 5).map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex flex-col items-center p-2"
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNavbar;
