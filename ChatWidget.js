'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

export default function ChatWidget({ onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Salut! 👋 Sunt asistentul RobboMaster. Te pot ajuta să găsești cursul potrivit pentru copilul tău, să-ți spun despre locații sau să te înscriu la o oră gratuită. Cu ce te pot ajuta?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const sessionId = useRef(`session_${Date.now()}_${Math.random().toString(36).slice(2)}`);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const send = async (text) => {
    const message = text || input.trim();
    if (!message || loading) return;

    const newMessages = [...messages, { role: 'user', content: message }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, sessionId: sessionId.current })
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: 'Îmi cer scuze, momentan nu pot răspunde. Sună-ne la +40 731 029 029.' }]);
      }
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Conexiune eșuată. Te rog încearcă din nou sau sună-ne direct.' }]);
    } finally {
      setLoading(false);
    }
  };

  const quickReplies = [
    'Ce curs e potrivit pentru un copil de 8 ani?',
    'În ce locații aveți cursuri?',
    'Vreau o oră de probă gratuită'
  ];

  return (
    <div className="fixed right-5 bottom-24 w-[360px] max-w-[calc(100vw-2.5rem)] h-[500px] bg-white border-[3px] border-ink rounded-2xl shadow-block-lg flex flex-col z-30 overflow-hidden">
      <div className="bg-brand-500 px-4 py-3 flex items-center gap-3 border-b-[3px] border-ink">
        <div className="w-8 h-8 bg-white border-2 border-ink rounded-md flex items-center justify-center p-0.5">
          <Image src="/images/logo.png" alt="" width={24} height={24} className="object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-sm text-ink">Asistent AI</h3>
          <p className="text-[11px] text-ink/70">Răspunde instant despre cursuri</p>
        </div>
        <button onClick={onClose} className="hover:bg-ink/10 p-1 rounded">
          <X className="w-4 h-4 text-ink" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 bg-cream">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
              m.role === 'user'
                ? 'bg-brand-500 text-ink border-2 border-ink font-medium'
                : 'bg-white text-ink border-2 border-ink'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-3">
            <div className="bg-white border-2 border-gray-200 px-3 py-2 rounded-xl text-sm text-gray-500 italic">
              Asistentul scrie...
            </div>
          </div>
        )}
      </div>

      {messages.length === 1 && (
        <div className="px-3 pt-2 pb-1 bg-cream flex flex-wrap gap-1.5">
          {quickReplies.map((q, i) => (
            <button key={i} onClick={() => send(q)}
              className="text-xs bg-white border-2 border-ink text-ink px-2.5 py-1.5 rounded-full font-medium hover:bg-brand-500">
              {q}
            </button>
          ))}
        </div>
      )}

      <div className="p-3 border-t-2 border-ink bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Scrie un mesaj..."
          className="flex-1 px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-500"
          disabled={loading}
        />
        <button onClick={() => send()} disabled={loading || !input.trim()}
          className="bg-brand-500 border-2 border-ink hover:bg-brand-400 disabled:bg-gray-200 text-ink p-2 rounded-lg">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
