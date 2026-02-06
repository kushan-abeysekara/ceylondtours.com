# SearchBar Component

A reusable search component with text highlighting and keyboard navigation for searching content on any page.

## Features

- 🔍 Real-time text search and highlighting
- ⌨️ Keyboard shortcuts (Ctrl+F or Cmd+F to open)
- ⬆️⬇️ Arrow navigation between matches
- 📱 Fully responsive and mobile-friendly
- 🎨 Customizable button position and placeholder
- ✨ Smooth animations and transitions

## Usage

### Basic Example

```tsx
import React, { useRef } from 'react';
import SearchBar from '../components/SearchBar';

const MyPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* Add SearchBar component */}
      <SearchBar contentRef={contentRef} />

      {/* Wrap your searchable content */}
      <div ref={contentRef}>
        <h1>Your Content Here</h1>
        <p>This text will be searchable...</p>
      </div>
    </div>
  );
};
```

### With Custom Props

```tsx
<SearchBar 
  contentRef={contentRef} 
  placeholder="Search destinations, places, testimonials..."
  buttonPosition="bottom-right"
  excludeSelectors=".navbar, .footer, .search-bar"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `contentRef` | `React.RefObject<HTMLElement>` | **Required** | Reference to the container element to search within |
| `placeholder` | `string` | `"Search on this page..."` | Placeholder text for search input |
| `buttonPosition` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | Position of floating search button |
| `excludeSelectors` | `string` | `".search-bar, script, style, .navbar, .footer"` | CSS selectors to exclude from search |

## Keyboard Shortcuts

- **Ctrl+F** or **Cmd+F** - Open search
- **Enter** or **↓** - Go to next match
- **↑** - Go to previous match
- **Escape** - Close search

## Button Navigation

- **↑ Button** - Navigate to previous match
- **↓ Button** - Navigate to next match
- **✕ Button** - Clear and close search

## Styling

The component comes with its own CSS file (`SearchBar.css`) with the following customizable classes:

- `.search-overlay` - Dark overlay background
- `.search-bar` - Main search bar container
- `.floating-search-btn` - Floating search button
- `.search-highlight` - Yellow highlight for matches
- `.search-highlight-active` - Orange highlight for current match

## Examples on Other Pages

### Destinations Page

```tsx
import React, { useRef } from 'react';
import SearchBar from '../components/SearchBar';

const Destinations = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="destinations">
      <SearchBar 
        contentRef={contentRef}
        placeholder="Search destinations..."
        buttonPosition="bottom-right"
      />

      <div ref={contentRef}>
        {/* Your destinations content */}
      </div>
    </div>
  );
};
```

### About Page

```tsx
import React, { useRef } from 'react';
import SearchBar from '../components/SearchBar';

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="about">
      <SearchBar 
        contentRef={contentRef}
        buttonPosition="bottom-left"
        excludeSelectors=".navbar, .footer, .search-bar, .sidebar"
      />

      <div ref={contentRef}>
        {/* Your about content */}
      </div>
    </div>
  );
};
```

## Notes

- The search is case-insensitive
- Special characters in search terms are automatically escaped
- The component automatically cleans up highlights when unmounted
- The contentRef should wrap all content you want to be searchable
- Elements matching `excludeSelectors` will not be searchable
