import React, { lazy, Suspense, memo, Component, useEffect } from 'react';
import WhatsAppFloatingButton from '../components/Button';
import Hero from '../components/Hero';

// Lazy-load components with fallback for import failures
const CourseSlider = lazy(() =>
  import('../components/CourseSlider').catch(() => ({
    default: () => <div className="text-red-600 p-4">Error loading CourseSlider</div>,
  }))
);
const TopRankers = lazy(() =>
  import('../components/Top').catch(() => ({
    default: () => <div className="text-red-600 p-4">Error loading TopRankers</div>,
  }))
);
const WhyChooseUsAndTestimonials = lazy(() =>
  import('../components/WhyChoos').catch(() => ({
    default: () => <div className="text-red-600 p-4">Error loading WhyChooseUsAndTestimonials</div>,
  }))
);

// Error Boundary to catch rendering errors
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center min-h-[200px] bg-red-100 text-red-600 p-4 rounded-lg">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}

// Preload lazy-loaded components in the background
const preloadComponents = () => {
  import('../components/CourseSlider');
  import('../components/Top');
  import('../components/WhyChoos');
};

const HomePage = memo(() => {
  // Start preloading components after initial render
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <main className="relative">
      <ErrorBoundary>
        <WhatsAppFloatingButton />
        <Hero />
        <Suspense
          fallback={
            <div
              className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4"
              aria-busy="true"
              aria-label="Loading content"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-gray-600 text-lg font-semibold">Loading A Plus Academy Content...</span>
              </div>
              {/* Skeleton placeholders */}
              <div className="w-full max-w-4xl mt-6 space-y-4">
                <div className="h-12 bg-gray-200/50 backdrop-blur-md rounded-xl animate-pulse"></div>
                <div className="h-64 bg-gray-200/50 backdrop-blur-md rounded-xl animate-pulse"></div>
                <div className="h-32 bg-gray-200/50 backdrop-blur-md rounded-xl animate-pulse"></div>
              </div>
            </div>
          }
        >
          <CourseSlider />
          <TopRankers />
          <WhyChooseUsAndTestimonials />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
});

export default HomePage;