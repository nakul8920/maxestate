import { lazy, Suspense, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CallbackForm from '@/components/CallbackForm';
import WelcomeForm from '@/components/WelcomeForm';
import { useLocation, useNavigate } from 'react-router-dom';

// Lazy load components that are not immediately visible
const About = lazy(() => import('@/components/About'));
const FloorPlans = lazy(() => import('@/components/FloorPlans'));
const Masterplan = lazy(() => import('@/components/Masterplan'));
const Amenities = lazy(() => import('@/components/Amenities'));
const Pricing = lazy(() => import('@/components/Pricing'));
const Location = lazy(() => import('@/components/Location'));
const Achievements = lazy(() => import('@/components/Achievements'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Map pathname to section id; default to home
  const pathnameToSectionId = (pathname: string) => {
    const clean = pathname.replace(/\/+$/, '');
    const section = clean === '' || clean === '/' ? 'home' : clean.slice(1);
    const allowed = new Set(['home', 'about', 'floorplans', 'amenities', 'masterplan', 'pricing']);
    return allowed.has(section) ? section : 'home';
  };

  useEffect(() => {
    const id = pathnameToSectionId(location.pathname);
    // If we're on `/`, keep URL clean; if on `/home`, normalize to `/`
    if (location.pathname === '/home') {
      navigate('/', { replace: true });
    }
    const el = document.getElementById(id);
    if (el) {
      // Use RAF to ensure section exists after lazy components mount
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen">
      <WelcomeForm />
      <CallbackForm />
      <div className="lg:pr-[380px]">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <FloorPlans />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Masterplan />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Amenities />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Location />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
