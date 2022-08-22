import React from 'react';
import Index from './Components/ResumeCard/Index';

function App() {

  const data = [
    {
      Name: "Abrham Muche",
      Experience: "The person who builds, adjusts, and/or maintains it.",
      Skills: ["java", "c++", "mongodb"] 
    },
    {
      Name: "Green H",
      Experience: "The person who builds, adjusts, and/or maintains it.",
      Skills: ["python", "c++", "mongodb"] 
    }
  ]
  return (
    <>
      <div className='w-full inline-flex gap-10 justify-center mt-10'>
          {
        data && data.map((resume) => {
          return (
             <Index Name={resume.Name} Experience={resume.Experience} Skills={resume.Skills} />
          )
        })
      }
      </div>
      
    </>
  );
}

export default App;
