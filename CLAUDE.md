# ROUTING AND NAVIGATION RULES

## Every new page requires four things:

1. TWO routes in router/index.js — one Czech, one Spanish:
   ```javascript
   {
     path: '/:lang/czech-slug',
     name: 'pagename-cz',
     component: () => import('@/views/PageNameView.vue')
   },
   {
     path: '/:lang/spanish-slug',
     name: 'pagename-es',
     component: () => import('@/views/PageNameView.vue')
   }
   ```

2. LANGUAGE-AWARE RouterLinks everywhere the page
   is linked to — in header, footer, and any CTA:
   ```vue
   :to="currentLang === 'cz' ?
     '/cz/czech-slug' :
     '/es/spanish-slug'"
   ```

3. ACTIVE STATE STYLING on every internal RouterLink:
   Header nav links:
   ```vue
   active-class="text-coral underline decoration-coral underline-offset-4 font-semibold"
   exact-active-class="text-coral underline decoration-coral underline-offset-4 font-semibold"
   ```

   Footer and body links:
   ```vue
   active-class="text-coral underline decoration-coral underline-offset-4"
   exact-active-class="text-coral underline decoration-coral underline-offset-4"
   ```

4. TRANSLATIONS in both cz.json and es.json —
   matching keys, never one language without the other.

## Current route map:
| Page | Czech slug | Spanish slug | View component |
|------|-----------|--------------|----------------|
| Home | / | / | HomeView.vue |
| Downloads | dokumenty-ke-stazeni | documentos-para-descargar | DownloadsView.vue |
| Community | o-komunite | sobre-la-comunidad | CommunityView.vue |
| Meetings | jak-se-potkavame | como-nos-reunimos | MeetingsView.vue |
| Participate | jak-se-zapojit | como-participar | ParticipateView.vue |

### When adding a new page, update this table.

### CRITICAL: Two files control navigation — always update both

AppHeader.vue handles desktop navigation (xl: breakpoint and above).
MobileMenu.vue handles mobile navigation (below xl: breakpoint).

These two files are separate components. Any change made to
navigation links in one file MUST be made in the other file too.
They must always be in sync.

This applies to:
- URL slug changes or corrections
- Language-aware :to bindings
- Adding new routes
- Removing routes
- Any fix to how links are constructed

The correct :to pattern for both files is always:
```vue
:to="`/${currentLang}/${currentLang === 'cz' ? 'czech-slug' : 'spanish-slug'}`"
```

Never use:
- Hardcoded Czech slugs without language check
- Czech diacritics in URL slugs (o-komunitě ❌, o-komunite ✅)
- active-class or exact-active-class props — they do not work
  with Tailwind purging. Use :class with isActive() instead.
  isActive() is only needed in AppHeader.vue — mobile menu
  does not need active state highlighting.

### Every time you add a new page, update BOTH files:
1. AppHeader.vue — add RouterLink to desktop nav if needed
2. MobileMenu.vue — add RouterLink with same language-aware pattern
3. router/index.js — add both Czech and Spanish routes
4. Update the route map table in this CLAUDE.md file

## External links (social media, Google Calendar, email):
- Always use `<a>` not RouterLink
- Always add `target="_blank" rel="noopener noreferrer"`
- Never add active-class styling
