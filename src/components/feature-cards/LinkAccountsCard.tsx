import { Monitor, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { name: "ASUS ROG Strix G16", info: "Intel Core i7 / RTX 4060", code: "₽ 129 990", color: "bg-violet-700" },
  { name: "Samsung Odyssey G5", info: "27\" / 165 Hz / QHD", code: "₽ 34 990", color: "bg-blue-700" },
  { name: "Logitech G Pro X", info: "Механическая клавиатура", code: "₽ 12 490", color: "bg-teal-600" },
  { name: "Kingston Fury 32GB", info: "DDR5 / 5600 MHz", code: "₽ 8 990", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Monitor className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Широкий каталог техники</h3>
      <p className="mb-4 text-sm text-gray-400">Ноутбуки, мониторы, клавиатуры и комплектующие — всё от проверенных брендов</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть каталог <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-lg ${product.color} flex items-center justify-center`}>
                <Monitor className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{product.name}</p>
                <p className="text-xs text-gray-500">{product.info}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 font-medium">{product.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Все товары
        </Button>
      </div>
    </div>
  )
}
