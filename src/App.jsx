import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading a component.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading header...</div>}>
          <Header />
        </Suspense>

        <nav style={{ padding: '1rem' }}>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>

        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
