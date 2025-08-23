import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/provider/theme-provider"
import { motion, AnimatePresence } from "framer-motion"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5, filter: "drop-shadow(0 0 0px rgba(59,130,246,0))" }}
            animate={{ rotate: 0, opacity: 1, scale: 1, filter: "drop-shadow(0 0 8px rgba(99,102,241,0.7))" }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Moon className="h-[1.2rem] w-[1.2rem] text-blue-500" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5, filter: "drop-shadow(0 0 0px rgba(0,0,0,0))" }}
            animate={{ rotate: 0, opacity: 1, scale: 1, filter: "drop-shadow(0 0 8px rgba(251,191,36,0.8))" }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>

  )
}
