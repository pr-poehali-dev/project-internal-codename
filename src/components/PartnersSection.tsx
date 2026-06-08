import Icon from "@/components/ui/icon"

const brands = [
  { name: "ASUS", icon: "Monitor" },
  { name: "Samsung", icon: "Smartphone" },
  { name: "Logitech", icon: "Mouse" },
  { name: "Intel", icon: "Cpu" },
  { name: "NVIDIA", icon: "Zap" },
  { name: "Kingston", icon: "HardDrive" },
  { name: "Corsair", icon: "Keyboard" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {brands.map((brand) => (
        <div key={brand.name} className="flex items-center gap-2 text-gray-500">
          <Icon name={brand.icon} size={16} />
          <span className="text-sm font-medium">{brand.name}™</span>
        </div>
      ))}
    </section>
  )
}