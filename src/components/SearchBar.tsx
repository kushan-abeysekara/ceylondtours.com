import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  contentRef: React.RefObject<HTMLElement>;
  placeholder?: string;
  buttonPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  excludeSelectors?: string; // CSS selectors to exclude from search
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  contentRef,
  placeholder = "Search on this page...",
  buttonPosition = "bottom-right",
  excludeSelectors = ".search-bar, script, style, .navbar, .footer"
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [matches, setMatches] = useState<HTMLElement[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
    clearHighlights();
    setMatches([]);
    setCurrentMatchIndex(-1);
  };

  const clearHighlights = () => {
    if (!contentRef.current) return;
    const highlighted = contentRef.current.querySelectorAll('.search-highlight, .search-highlight-active');
    highlighted.forEach(element => {
      const parent = element.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(element.textContent || ''), element);
        parent.normalize();
      }
    });
  };

  const highlightText = (term: string) => {
    if (!contentRef.current || !term.trim()) {
      clearHighlights();
      setMatches([]);
      setCurrentMatchIndex(-1);
      return;
    }

    clearHighlights();
    
    const walker = document.createTreeWalker(
      contentRef.current,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.closest(excludeSelectors)) return NodeFilter.FILTER_REJECT;
          if (node.textContent && node.textContent.trim().length > 0) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodesToProcess: { node: Text; text: string }[] = [];
    let node: Node | null;
    
    while ((node = walker.nextNode())) {
      const textNode = node as Text;
      nodesToProcess.push({ node: textNode, text: textNode.textContent || '' });
    }

    const matchElements: HTMLElement[] = [];
    const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');

    nodesToProcess.forEach(({ node, text }) => {
      const matches = [...text.matchAll(regex)];
      if (matches.length === 0) return;

      const fragment = document.createDocumentFragment();
      let lastIndex = 0;

      matches.forEach((match) => {
        const index = match.index!;
        
        if (index > lastIndex) {
          fragment.appendChild(document.createTextNode(text.substring(lastIndex, index)));
        }

        const span = document.createElement('span');
        span.className = 'search-highlight';
        span.textContent = match[0];
        fragment.appendChild(span);
        matchElements.push(span);

        lastIndex = index + match[0].length;
      });

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
      }

      node.parentNode?.replaceChild(fragment, node);
    });

    setMatches(matchElements);
    if (matchElements.length > 0) {
      setCurrentMatchIndex(0);
      scrollToMatch(matchElements[0]);
    }
  };

  const scrollToMatch = (element: HTMLElement) => {
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    highlightText(value);
  };

  const navigateToNextMatch = () => {
    if (matches.length === 0) return;
    const nextIndex = (currentMatchIndex + 1) % matches.length;
    setCurrentMatchIndex(nextIndex);
    scrollToMatch(matches[nextIndex]);
  };

  const navigateToPrevMatch = () => {
    if (matches.length === 0) return;
    const prevIndex = currentMatchIndex - 1 < 0 ? matches.length - 1 : currentMatchIndex - 1;
    setCurrentMatchIndex(prevIndex);
    scrollToMatch(matches[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      navigateToNextMatch();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateToPrevMatch();
    } else if (e.key === 'Escape') {
      handleSearchClose();
    }
  };

  // Update active highlight when currentMatchIndex changes
  useEffect(() => {
    matches.forEach((match, index) => {
      if (index === currentMatchIndex) {
        match.classList.add('search-highlight-active');
        match.classList.remove('search-highlight');
      } else {
        match.classList.add('search-highlight');
        match.classList.remove('search-highlight-active');
      }
    });
  }, [currentMatchIndex, matches]);

  // Add global keyboard shortcut (Ctrl+F or Cmd+F)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        handleSearchOpen();
      }
    };
    
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearHighlights();
    };
  }, []);

  return (
    <>
      {/* Search Bar Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-bar">
            <button className="search-close-btn" onClick={handleSearchClose} aria-label="Close search">
              ✕
            </button>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <div className="search-navigation">
              {matches.length > 0 && (
                <>
                  <span className="search-count">
                    {currentMatchIndex + 1} of {matches.length}
                  </span>
                  <button 
                    className="search-nav-btn" 
                    onClick={navigateToPrevMatch}
                    aria-label="Previous match"
                    disabled={matches.length === 0}
                  >
                    ↑
                  </button>
                  <button 
                    className="search-nav-btn" 
                    onClick={navigateToNextMatch}
                    aria-label="Next match"
                    disabled={matches.length === 0}
                  >
                    ↓
                  </button>
                </>
              )}
              {searchTerm && matches.length === 0 && (
                <span className="search-count no-results">No results</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating Search Button */}
      <button 
        className={`floating-search-btn floating-search-btn-${buttonPosition}`}
        onClick={handleSearchOpen}
        aria-label="Search page"
        title="Search (Ctrl+F)"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
};

export default SearchBar;
