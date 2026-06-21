import { useState } from 'react';
import treeData from '../data/decision-tree.json';

export default function SymptomChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (key) => {
    const newAnswers = { ...answers, [treeData[step].qKey]: key };
    setAnswers(newAnswers);
    
    if (treeData[step].next[key]) {
      if (typeof treeData[step].next[key] === 'string') {
        setResult(treeData[step].next[key]);
      } else {
        setStep(treeData[step].next[key]);
      }
    } else {
      setResult('Complete differential list generated. Export available.');
    }
  };

  return (
    <div className="bg-surface p-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-text mb-4">Symptom Checker</h2>
      {result ? (
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <p className="text-accent font-medium">{result}</p>
          <button className="mt-3 px-4 py-2 bg-primary text-bg rounded hover:bg-primary/90 transition" onClick={() => window.print()}>Export Report</button>
        </div>
      ) : (
        <>
          <p className="text-text mb-4">{treeData[step].question}</p>
          {treeData[step].options.map((opt) => (
            <button key={opt.value} onClick={() => handleAnswer(opt.value)} className="w-full text-left p-3 mb-2 bg-white/5 hover:bg-primary/20 rounded transition text-text">
              {opt.label}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
