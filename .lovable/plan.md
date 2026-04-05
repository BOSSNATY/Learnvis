

## Add Sidebar Toggle Button

**Problem**: The sidebar toggle button is only in the Header. When the sidebar is open or collapsed, there's no dedicated toggle button on the sidebar itself to expand/collapse it.

**Plan**:

### 1. Pass toggle callback to Sidebar
- Add `onToggleSidebar` prop to the `Sidebar` component (from `MainLayout`)

### 2. Add toggle button inside Sidebar
- At the bottom (or top) of the sidebar, add a visible toggle button with a chevron icon (`ti ti-chevrons-left` when expanded, `ti ti-chevrons-right` when collapsed)
- The button will call `onToggleSidebar` on click
- When collapsed (mini-sidebar), show a small icon-only button; when expanded, show the full button

### Files changed
- **`src/components/layout/Sidebar.tsx`** — Add `onToggleSidebar` prop, render a toggle button at the bottom of the sidebar
- **`src/components/layout/MainLayout.tsx`** — Pass `toggleSidebar` to the Sidebar component

