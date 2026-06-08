import { ShieldCheck, ArrowUpRight, Truck, ChevronDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <ShieldCheck className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Гарантия и сервис</h3>
      <p className="mb-4 text-sm text-gray-400">Официальная гарантия на всю технику, быстрый сервисный центр и помощь после покупки</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Официальная гарантия</p>
              <p className="text-xs text-gray-500">до 3 лет на технику</p>
            </div>
          </div>
          <button className="text-sm text-violet-400 hover:text-violet-300">Условия</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Способ доставки <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Курьером до двери</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Доставка 1-2 дня, бесплатно от 5 000 ₽</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#262626]">
                <Truck className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Самовывоз из магазина</p>
                <p className="text-xs text-gray-500">Готово через 2 часа · Бесплатно</p>
              </div>
            </div>
            <button className="text-sm text-violet-400 hover:text-violet-300">Выбрать</button>
          </div>
        </div>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">Оформить заказ</Button>
      </div>
    </div>
  )
}
