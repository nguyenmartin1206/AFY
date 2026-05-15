/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PersonalizedAIPage from './pages/PersonalizedAIPage';
import EnterpriseAIPage from './pages/EnterpriseAIPage';
import ProductsPage from './pages/ProductsPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import ForumPage from './pages/ForumPage';
import LearningCenterPage from './pages/LearningCenterPage';
import AuthPage from './pages/AuthPage';
import { ChatProvider } from './context/ChatContext';
import ChatBox from './components/ChatBox';

export default function App() {
  return (
    <ChatProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-bg-base">
          <Navbar />
          
          <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 pt-32 pb-12 relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/personalized-ai" element={<PersonalizedAIPage />} />
              <Route path="/enterprise-ai" element={<EnterpriseAIPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/forum" element={<ForumPage />} />
              <Route path="/learning-center" element={<LearningCenterPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>

          <Footer />
          <ChatBox />
        </div>
      </Router>
    </ChatProvider>
  );
}

