import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <TechStoreLogo />
        <span className="text-lg font-semibold text-white">
          ТехноМаркет<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Каталог
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Категории <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Бренды
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Акции
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Перейти в каталог
      </Button>
    </header>
  )
}

function TechStoreLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="13" rx="2" fill="#8B5CF6" />
      <rect x="4" y="6" width="16" height="9" rx="1" fill="#141414" />
      <rect x="8" y="18" width="8" height="2" rx="1" fill="#8B5CF6" opacity="0.7" />
      <rect x="6" y="19.5" width="12" height="1" rx="0.5" fill="#8B5CF6" opacity="0.4" />
    </svg>
  )
}