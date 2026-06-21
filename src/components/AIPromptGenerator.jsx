import { useState } from 'react';

export default function AIPromptGenerator() {
  const [form, setForm] = useState({ symptom: '', duration: '', aggravating: '' });
  const [prompt, setPrompt] = useState('');

  const generate = () => {
    setPrompt(`Act as a podiatrist. Patient presents with ${form.symptom} lasting ${form.duration}. Aggravated by ${form.aggravating}. Provide differential diagnoses, red flags, and evidence-based first-line management.`);
  };

  return (
    <div className="bg-surface p-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-text mb-4">AI Diagnostic Prompt Builder</h2>
      <input placeholder="Primary symptom..." value={form.symptom} onChange={e=>setForm({...form, symptom:e.target.value})} className="w-full p-3 bg-white/5 rounded text-text mb-3 border border-white/10"/>
      <input placeholder="Duration (e.g., 3 weeks)" value={form.duration} onChange={e=>setForm({...form, duration:e.target.value})} className="w-full p-3 bg-white/5 rounded text-text mb-3 border border-white/10"/>
      <input placeholder="Aggravating factors..." value={form.aggravating} onChange={e=>setForm({...form, aggravating:e.target.value})} className="w-full p-3 bg-white/5 rounded text-text mb-3 border border-white/10"/>
      <button onClick={generate} className="w-full py-2 bg-primary text-bg font-medium rounded hover:bg-primary/90 transition">Generate Prompt</button>
      {prompt && (
        <div className="mt-4 p-3 bg-black/30 rounded text-sm text-text break-all">{prompt}</div>
      )}
    </div>
  );
}
