
import React from 'react';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export const MessageBubble = ({ message }) => {
  const formatTime = (date) => {

    // if(typeof date === "string"){
    //   date = new Date(message.timestamp)
    // }

    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      {message.isBot && (
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot size={16} className="text-blue-600" />
        </div>
      )}
      
      <div className={`max-w-xs md:max-w-md lg:max-w-lg ${message.isBot ? '' : 'order-first'}`}>
        <div
          className={`p-3 rounded-2xl ${
            message.isBot
              ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
          } ${message.isBot ? 'rounded-bl-md' : 'rounded-br-md'}`}
        >
          {/* <p className="text-sm leading-relaxed">{message.text}</p> */}
          <div className="prose prose-sm max-w-none text-left ">
            {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown> */}

             <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside ml-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside ml-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-1" {...props} />
          ),
          table: ({ node, ...props }) => (
            <table className="table-auto border-collapse border border-gray-300 my-4" {...props} />
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-100" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-gray-300 px-2 py-1 text-left" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-gray-300 px-2 py-1" {...props} />
          ),
        }}
      >
        {message.text.replace(/\\n/g, '\n')}
      </ReactMarkdown>
        {message.links && message.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {message.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    {link.title}
                    <svg 
                      className="w-3 h-3 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
          
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>

      {!message.isBot && (
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
          <User size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};