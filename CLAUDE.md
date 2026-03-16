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

## External links (social media, Google Calendar, email):
- Always use `<a>` not RouterLink
- Always add `target="_blank" rel="noopener noreferrer"`
- Never add active-class styling
