import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'About', description: 'Projects I Have Worked On'
    },
    {
      name: 'Portfolio', description: 'Projects I Have Worked On'
    },
    { 
      name: 'Contact', description: 'Reach Out Here' 
    },
    { 
      name: 'Resume', description: 'Work & Coding Experience' 
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
          {currentCategory.name === "Portfolio"? (
            <Portfolio></Portfolio>
          ) : 
          currentCategory.name === "Contact"? (
            <ContactForm></ContactForm>
          ) : 
          currentCategory.name === "Resume"? (
            <Resume></Resume>
          ) : (
            <About></About>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
