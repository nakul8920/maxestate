import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EnquireForm from '@/components/EnquireForm';

interface EnquireContextType {
  openEnquireForm: (source: string) => void;
  closeEnquireForm: () => void;
}

const EnquireContext = createContext<EnquireContextType | undefined>(undefined);

export const useEnquire = () => {
  const context = useContext(EnquireContext);
  if (!context) {
    throw new Error('useEnquire must be used within an EnquireProvider');
  }
  return context;
};

interface EnquireProviderProps {
  children: ReactNode;
}

export const EnquireProvider = ({ children }: EnquireProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('');
  const location = useLocation();

  const openEnquireForm = (formSource: string) => {
    setSource(formSource);
    setIsOpen(true);
  };

  const closeEnquireForm = () => {
    setIsOpen(false);
    setSource('');
  };

  // Auto-close modal on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <EnquireContext.Provider value={{ openEnquireForm, closeEnquireForm }}>
      {children}
      <EnquireForm isOpen={isOpen} onClose={closeEnquireForm} source={source} />
    </EnquireContext.Provider>
  );
};
