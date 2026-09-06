import { Sun, Moon, Monitor } from 'lucide-react'
import { useStore } from '../store/useStore'
import { Preferences } from '../types'
import { cn } from '../lib/utils'

const THEME_OPTIONS: { value: Preferences['theme']; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]

export function ThemeToggle() {
  const theme = useStore(state => state.preferences.theme)
  const setTheme = useStore(state => state.setTheme)

  return (
    <div className="theme-toggle inline-flex items-center rounded-md p-0.5" role="radiogroup" aria-label="Theme">
      {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          title={`${label} theme`}
          onClick={() => setTheme(value)}
          className={cn(
            'theme-toggle-option flex items-center justify-center p-1.5 rounded transition-colors',
            theme === value && 'active'
          )}
        >
          <Icon className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  )
}
